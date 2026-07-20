const fs = require('fs');
let content = fs.readFileSync('src/constants/etnisData.js', 'utf8');

// Add imports
if (!content.includes('iconTopeng')) {
  content = content.replace(
    'import iconSejarah from \'@/assets/icons/sejarah.svg\';',
    'import iconSejarah from \'@/assets/icons/sejarah.svg\';\nimport iconTopeng from \'@/assets/icons/topeng.svg\';\nimport iconAlatMakan from \'@/assets/icons/alat-makan.svg\';'
  );
}

// Add icon: iconTopeng to tari
content = content.replace(/tari:\s*\{\s*title:\s*'([^']*)',\s*description:\s*'([^']*)'\s*\}/g, 'tari: {\n        title: \'$1\',\n        description: \'$2\',\n        icon: iconTopeng\n      }');

// Add icon: iconAlatMakan to menus
content = content.replace(/\{ name: '([^']+)', desc: '([^']+)' \}/g, '{ name: \'$1\', desc: \'$2\', icon: iconAlatMakan }');

fs.writeFileSync('src/constants/etnisData.js', content);
console.log('Done modifying etnisData.js');
