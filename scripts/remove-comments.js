#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

const ROOT = process.cwd();
const INCLUDE_DIRS = ['src', 'public'];
const EXTS = {
  js: 'js',
  jsx: 'jsx',
  ts: 'js',
  tsx: 'jsx',
  css: 'css',
  scss: 'css',
  html: 'html',
  svg: 'html'
};

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git'].includes(e.name)) continue;
      walk(full, cb);
    } else if (e.isFile()) cb(full);
  }
}

function processFile(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  if (!EXTS[ext]) return;
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lang = EXTS[ext];
    const stripped = strip(content, { language: lang });
    if (stripped !== content) {
      fs.writeFileSync(filePath, stripped, 'utf8');
      console.log('Updated', filePath);
    }
  } catch (err) {
    console.error('Err processing', filePath, err.message);
  }
}

for (const d of INCLUDE_DIRS) {
  const abs = path.join(ROOT, d);
  if (!fs.existsSync(abs)) continue;
  walk(abs, processFile);
}

// Also process root-level index.html and any .css at root
['index.html', 'style.css', 'src/style.css'].forEach((f) => {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p) && fs.statSync(p).isFile()) processFile(p);
});

console.log('Comment removal complete.');
