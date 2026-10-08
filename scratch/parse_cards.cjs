const fs = require('fs');
const txt = fs.readFileSync('C:/Users/Magesture/.gemini/antigravity/brain/820521b8-42a0-4d0a-a657-0c0c7ce7606b/.system_generated/steps/770/content.md', 'utf8');

const idx = txt.indexOf('research-cards-wrap');
const end = txt.indexOf('Our programs are ranked No. 1 in ROI', idx);
const chunk = txt.substring(idx, end);

const cardRegex = /<a[\s\S]*?href=['"]([^'"]*)['"][\s\S]*?>([\s\S]*?)<\/a>/gi;
let match;
let i = 1;
while ((match = cardRegex.exec(chunk)) !== null) {
  const href = match[1];
  const inner = match[2];
  const imgMatch = inner.match(/url\(['"]?([^'")]+)['"]?\)/i) || inner.match(/src=['"]([^'"]+)['"]/i);
  console.log('--- CARD ' + i + ' ---');
  console.log('HREF:', href);
  console.log('IMG:', imgMatch ? imgMatch[1] : 'none');
  const textClean = inner.replace(/<[^>]+>/g, '\n').split('\n').map(l => l.trim()).filter(Boolean);
  console.log('TEXT:', textClean);
  i++;
}
