/**
 * Generates all PWA icon PNGs from scratch using only Node.js built-ins.
 * Run once: node generate-icons.mjs
 * Output: assets/icons/icon-{size}.png + apple-touch-icon.png
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// ── CRC32 ────────────────────────────────────────────────────────────────────
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (const b of buf) c = crcTable[(c ^ b) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

// ── PNG encoder ──────────────────────────────────────────────────────────────
function u32(n) {
  return Buffer.from([(n >>> 24) & 0xFF, (n >>> 16) & 0xFF, (n >>> 8) & 0xFF, n & 0xFF]);
}
function pngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  return Buffer.concat([u32(data.length), body, u32(crc32(body))]);
}
function encodePNG(width, height, pixels /* Uint8Array, RGB row-major */) {
  const PNG_SIG = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.concat([u32(width), u32(height), Buffer.from([8, 2, 0, 0, 0])]);
  // prepend filter byte 0 (None) to each row
  const raw = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 3)] = 0;
    for (let x = 0; x < width; x++) {
      const s = (y * width + x) * 3;
      const d = y * (1 + width * 3) + 1 + x * 3;
      raw[d] = pixels[s]; raw[d + 1] = pixels[s + 1]; raw[d + 2] = pixels[s + 2];
    }
  }
  return Buffer.concat([
    PNG_SIG,
    pngChunk('IHDR', ihdr),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Rounded rect hit test (pixel center sampling) ────────────────────────────
function inRRect(px, py, rx, ry, rw, rh, r) {
  const cx = px + 0.5, cy = py + 0.5;
  if (cx < rx || cx > rx + rw || cy < ry || cy > ry + rh) return false;
  if (r <= 0) return true;
  const inCorner =
    (cx < rx + r && cy < ry + r) ||
    (cx > rx + rw - r && cy < ry + r) ||
    (cx < rx + r && cy > ry + rh - r) ||
    (cx > rx + rw - r && cy > ry + rh - r);
  if (!inCorner) return true;
  const cornerX = cx < rx + rw / 2 ? rx + r : rx + rw - r;
  const cornerY = cy < ry + rh / 2 ? ry + r : ry + rh - r;
  return (cx - cornerX) ** 2 + (cy - cornerY) ** 2 <= r * r;
}

function hex(h) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 0xFF, (n >> 8) & 0xFF, n & 0xFF];
}

// ── Brand colors ─────────────────────────────────────────────────────────────
const BG   = hex('#FAFAF7');  // bone-100  — warm off-white background
const INK  = hex('#0B1120');  // ink-900   — near-black bars
const JADE = hex('#00D4A0');  // jade-400  — brand accent bar

// Logo-mark bars (SVG viewBox 0 0 56 56, bars offset by translate(8,16))
const BARS = [
  { x: 8, y: 16, w: 22, h: 5, rx: 2.5, color: INK  },
  { x: 8, y: 27, w: 40, h: 5, rx: 2.5, color: JADE },
  { x: 8, y: 38, w: 28, h: 5, rx: 2.5, color: INK  },
];

function renderIcon(size) {
  // Scale the 56×56 viewBox to fill 60% of the icon (leaving 20% padding each side)
  const scale  = (size * 0.6) / 56;
  const offset = size * 0.2;
  const pixels = new Uint8Array(size * size * 3);

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let color = BG;
      for (const b of BARS) {
        if (inRRect(px, py, b.x * scale + offset, b.y * scale + offset,
                    b.w * scale, b.h * scale, b.rx * scale)) {
          color = b.color;
          break;
        }
      }
      const i = (py * size + px) * 3;
      pixels[i] = color[0]; pixels[i + 1] = color[1]; pixels[i + 2] = color[2];
    }
  }
  return pixels;
}

// ── Generate all sizes ───────────────────────────────────────────────────────
const OUT = './assets/icons';
mkdirSync(OUT, { recursive: true });

const MANIFEST_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const IOS_SIZES      = [120, 167, 180];
const ALL_SIZES      = [...new Set([...MANIFEST_SIZES, ...IOS_SIZES])].sort((a, b) => a - b);

for (const size of ALL_SIZES) {
  const pixels = renderIcon(size);
  const png    = encodePNG(size, size, pixels);
  const name   = `icon-${size}.png`;
  writeFileSync(join(OUT, name), png);
  console.log(`  ✓ ${name}`);
}

// apple-touch-icon is just the 180 icon under a different name
const atiPixels = renderIcon(180);
writeFileSync(join(OUT, 'apple-touch-icon.png'), encodePNG(180, 180, atiPixels));
console.log('  ✓ apple-touch-icon.png');
console.log(`\nAll icons written to ${OUT}/`);
