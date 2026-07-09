const fs = require('fs');
const path = require('path');
const root = process.cwd();
function walk(dir) {
  let results = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) results = results.concat(walk(p));
    else results.push(p);
  }
  return results;
}
const srcFiles = walk(path.join(root, 'src')).filter((f) => /\.(jsx|js|ts|tsx)$/i.test(f));
const imageRefs = new Map();
const refRegex = /(["'])(\/images\/[^"']+)\1/g;
for (const f of srcFiles) {
  const text = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = refRegex.exec(text))) {
    const ref = match[2];
    if (!imageRefs.has(ref)) imageRefs.set(ref, []);
    imageRefs.get(ref).push(path.relative(root, f));
  }
}
const publicImages = new Set(walk(path.join(root, 'public', 'images')).map((f) => '/' + path.relative(path.join(root, 'public'), f).replace(/\\/g, '/')));
const missing = [];
for (const [ref, files] of imageRefs.entries()) {
  if (!publicImages.has(ref)) missing.push({ ref, files });
}
console.log(JSON.stringify({ publicImages: Array.from(publicImages).sort(), missing }, null, 2));
