#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
if (argv.length < 1) {
  console.error('Usage: node scripts/convert-to-webp.js <src> [dst] [quality]');
  process.exit(2);
}

const src = path.resolve(argv[0]);
const dst = path.resolve(argv[1] || src.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
const quality = parseInt(argv[2], 10) || 80;

(async () => {
  try {
    if (!fs.existsSync(src)) {
      console.error('Source file not found:', src);
      process.exit(3);
    }

    await sharp(src)
      .webp({ quality })
      .toFile(dst);

    const { size: srcSize } = fs.statSync(src);
    const { size: dstSize } = fs.statSync(dst);
    console.log('Converted:', src, '→', dst);
    console.log('Sizes:', Math.round(srcSize / 1024), 'KB →', Math.round(dstSize / 1024), 'KB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
