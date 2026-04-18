const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Root Variables
const rootTarget = `:root {
      --ivory:       #F7F2E9;
      --ivory-dark:  #EDE6D6;
      --gold:        #B8963E;
      --gold-light:  #D4AF5A;
      --gold-pale:   rgba(184,150,62,0.12);
      --olive:       #4A5240;
      --olive-light: #6B7260;
      --navy:        #1C2744;
      --navy-light:  #2C3A5C;
      --cream:       #EDE6D6;
      --cream-dark:  #D9CFBC;
      --white:       #FFFFFF;
      --text-dark:   #1A1A1A;
      --text-mid:    #3D3D3D;
      --text-muted:  #7A7A6E;
      --like:        #3D7A52;
      --dislike:     #8B3A3A;
      --border:      rgba(184,150,62,0.2);
      --shadow-sm:   0 1px 4px rgba(28,39,68,0.08);
      --shadow-md:   0 4px 16px rgba(28,39,68,0.12);
      --shadow-lg:   0 8px 32px rgba(28,39,68,0.18);
      --radius:      6px;
      --cat-product:  #B8963E;
      --cat-behind:   #4A5240;
      --cat-story:    #1C2744;
      --cat-reel:     #7B5EA7;
      --cat-collab:   #2E6E9E;
      --cat-seasonal: #B85C38;
    }`;

const rootReplace = `:root {
      --ivory:       #FEF5F8;
      --ivory-dark:  #FAEAEE;
      --gold:        #E83E8C;
      --gold-light:  #FF6B9E;
      --gold-pale:   rgba(232, 62, 140, 0.12);
      --olive:       #9C27B0;
      --olive-light: #BA68C8;
      --navy:        #301121;
      --navy-light:  #491E34;
      --cream:       #FAEAEE;
      --cream-dark:  #F0D4DF;
      --white:       #FFFFFF;
      --text-dark:   #2B1B24;
      --text-mid:    #4D3E46;
      --text-muted:  #8E7D86;
      --like:        #E83E8C;
      --dislike:     #9E9E9E;
      --border:      rgba(232, 62, 140, 0.15);
      --shadow-sm:   0 2px 8px rgba(232, 62, 140, 0.06);
      --shadow-md:   0 8px 24px rgba(232, 62, 140, 0.12);
      --shadow-lg:   0 16px 40px rgba(232, 62, 140, 0.2);
      --radius:      12px;
      --cat-product:  #E83E8C;
      --cat-behind:   #9C27B0;
      --cat-story:    #301121;
      --cat-reel:     #7B5EA7;
      --cat-collab:   #F50057;
      --cat-seasonal: #FF9800;
    }`;

// 2. Buttons
const btnTarget = `/* ── BUTTONS ── */
    .btn { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; padding: 7px 14px; cursor: pointer; border-radius: var(--radius); transition: all 0.15s; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; }
    .btn-primary { border: 1px solid var(--navy); background: var(--navy); color: var(--gold-light); }
    .btn-primary:hover { background: var(--navy-light); }
    .btn-outline { border: 1px solid var(--gold); background: transparent; color: var(--gold); }
    .btn-outline:hover { background: var(--gold); color: white; }
    .btn-ghost { border: 1px solid var(--cream-dark); background: transparent; color: var(--text-mid); }
    .btn-ghost:hover { background: var(--cream); }`;

const btnReplace = `/* ── BUTTONS ── */
    .btn { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; padding: 8px 18px; cursor: pointer; border-radius: 20px; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; box-shadow: 0 4px 12px rgba(232, 62, 140, 0.08); }
    .btn:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(232, 62, 140, 0.16); }
    .btn-primary { border: 1px solid var(--gold); background: var(--gold); color: var(--white); }
    .btn-primary:hover { background: var(--gold-light); }
    .btn-outline { border: 1px solid var(--gold); background: transparent; color: var(--gold); }
    .btn-outline:hover { background: var(--gold); color: white; }
    .btn-ghost { border: 1px solid var(--cream-dark); background: transparent; color: var(--text-mid); box-shadow: none; }
    .btn-ghost:hover { background: var(--cream); box-shadow: none; transform: none; }`;

// 3. Navigation
const navTarget = `.nav-tab {
      font-size: 11px; font-weight: 500; letter-spacing: 0.8px; text-transform: uppercase;
      padding: 6px 13px; border: none; background: transparent; color: rgba(255,255,255,0.4);
      cursor: pointer; border-radius: 4px; transition: all 0.15s;
      display: flex; align-items: center; gap: 5px; white-space: nowrap;
    }
    .nav-tab:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.75); }
    .nav-tab.active { background: rgba(184,150,62,0.18); color: var(--gold-light); }`;

const navReplace = `.nav-tab {
      font-size: 11px; font-weight: 500; letter-spacing: 0.8px; text-transform: uppercase;
      padding: 6px 13px; border: none; background: transparent; color: rgba(255,255,255,0.4);
      cursor: pointer; border-radius: 20px; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex; align-items: center; gap: 5px; white-space: nowrap;
    }
    .nav-tab:hover { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.9); transform: translateY(-1px); }
    .nav-tab.active { background: rgba(232, 62, 140, 0.25); color: var(--gold-light); }`;

// 4. Header
const headerTarget = `/* ── HEADER ── */
    .header {
      background: var(--navy);
      padding: 0 20px;
      height: 56px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 2px solid var(--gold);
      position: sticky; top: 0; z-index: 100;
    }`;

const headerReplace = `/* ── HEADER ── */
    .header {
      background: var(--navy);
      padding: 0 20px;
      height: 56px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      position: sticky; top: 0; z-index: 100;
    }`;

// 5. JavaScript variables
const catMetaTarget = `var catMeta = {
  all:      { label: 'All Ideas',           color: '#B8963E' },
  product:  { label: 'Product / Display',   color: '#B8963E' },
  behind:   { label: 'Behind the Scenes',   color: '#4A5240' },
  story:    { label: 'Story / Narrative',   color: '#1C2744' },
  reel:     { label: 'Reel / Video',        color: '#7B5EA7' },
  collab:   { label: 'Collaboration',       color: '#2E6E9E' },
  seasonal: { label: 'Seasonal / Holidays', color: '#B85C38' },
};`;

const catMetaReplace = `var catMeta = {
  all:      { label: 'All Ideas',           color: '#E83E8C' },
  product:  { label: 'Product / Display',   color: '#E83E8C' },
  behind:   { label: 'Behind the Scenes',   color: '#9C27B0' },
  story:    { label: 'Story / Narrative',   color: '#301121' },
  reel:     { label: 'Reel / Video',        color: '#7B5EA7' },
  collab:   { label: 'Collaboration',       color: '#F50057' },
  seasonal: { label: 'Seasonal / Holidays', color: '#FF9800' },
};`;

const catBgTarget = `var catBg = {
  product:  'linear-gradient(135deg,#2a1a00,#4a3010)',
  behind:   'linear-gradient(135deg,#0f1a0f,#2a3a20)',
  story:    'linear-gradient(135deg,#0a0f1e,#1a2540)',
  reel:     'linear-gradient(135deg,#1a0f2e,#3a2060)',
  collab:   'linear-gradient(135deg,#0a1a2a,#1a3050)',
  seasonal: 'linear-gradient(135deg,#2a0f08,#4a2010)',
};`;

const catBgReplace = `var catBg = {
  product:  'linear-gradient(135deg,#501030,#8a205a)',
  behind:   'linear-gradient(135deg,#301040,#602080)',
  story:    'linear-gradient(135deg,#200a1a,#401830)',
  reel:     'linear-gradient(135deg,#301A4F,#502a80)',
  collab:   'linear-gradient(135deg,#600A2C,#90184A)',
  seasonal: 'linear-gradient(135deg,#6A3800,#994000)',
};`;

// 6. Cards styling
const cardTarget = `.card {
      background: var(--white); border: 1px solid rgba(0,0,0,0.07); border-radius: var(--radius);
      box-shadow: var(--shadow-sm); overflow: hidden;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .card.in-shooting { border: 2px solid var(--gold); }
    .card-stripe { height: 3px; width: 100%; }`;

const cardReplace = `.card {
      background: var(--white); border: 1px solid rgba(232, 62, 140, 0.08); border-radius: var(--radius);
      box-shadow: var(--shadow-sm); overflow: hidden;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: rgba(232, 62, 140, 0.3); }
    .card.in-shooting { border: 2px solid var(--gold); transform: scale(1.02); box-shadow: var(--shadow-lg); }
    .card-stripe { height: 4px; width: 100%; }`;

// Replace content parts
content = content.replace(rootTarget, rootReplace);
content = content.replace(btnTarget, btnReplace);
content = content.replace(navTarget, navReplace);
content = content.replace(headerTarget, headerReplace);
content = content.replace(catMetaTarget, catMetaReplace);
content = content.replace(catBgTarget, catBgReplace);
content = content.replace(cardTarget, cardReplace);

// Additional small string replacements safely
content = content.replace(
  '<span class="cat-dot" style="background:#B8963E;"></span>',
  '<span class="cat-dot" style="background:#E83E8C;"></span>'
);

content = content.replace(
  '.cat-item {\\n      display: flex; align-items: center; gap: 8px; padding: 10px 13px;\\n      cursor: pointer; border: none; background: transparent; width: 100%;\\n      font-family: \\'Inter\\', sans-serif; font-size: 12px; color: var(--text-mid);\\n      border-bottom: 1px solid rgba(0,0,0,0.04); transition: background 0.15s;\\n    }\\n    .cat-item:hover { background: rgba(184,150,62,0.07); }\\n    .cat-item.active { background: var(--navy); color: var(--gold-light); }',
  '.cat-item {\\n      display: flex; align-items: center; gap: 8px; padding: 10px 13px;\\n      cursor: pointer; border: none; background: transparent; width: 100%;\\n      font-family: \\'Inter\\', sans-serif; font-size: 12px; color: var(--text-mid);\\n      border-bottom: 1px solid rgba(0,0,0,0.04); transition: all 0.2s;\\n    }\\n    .cat-item:hover { background: rgba(232, 62, 140, 0.07); color: var(--gold); padding-left: 16px; }\\n    .cat-item.active { background: var(--navy); color: var(--gold-light); padding-left: 16px; border-left: 3px solid var(--gold); }'
);

content = content.replace(
  '.cat-item.active .cat-badge { background: rgba(184,150,62,0.3); }',
  '.cat-item.active .cat-badge { background: rgba(232, 62, 140, 0.3); }'
);

content = content.replace(
  '.shoot-item { background: var(--white); border: 1px solid rgba(0,0,0,0.07); border-radius: var(--radius); padding: 14px 14px 14px 16px; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm); transition: all 0.2s; }\\n    .shoot-item.done { background: var(--ivory-dark); border-color: var(--cream-dark); opacity: 0.5; }',
  '.shoot-item { background: var(--white); border: 1px solid rgba(232, 62, 140, 0.08); border-radius: var(--radius); padding: 14px 14px 14px 16px; display: flex; align-items: flex-start; gap: 12px; box-shadow: var(--shadow-sm); transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\\n    .shoot-item:hover { transform: translateX(3px); box-shadow: var(--shadow-md); border-color: rgba(232, 62, 140, 0.3); }\\n    .shoot-item.done { background: var(--ivory-dark); border-color: var(--cream-dark); opacity: 0.5; }'
);

content = content.replace(
  '.vision-panel { width: 300px; flex-shrink: 0; background: #141D35; border-right: 1px solid rgba(184,150,62,0.15); display: none; flex-direction: column; overflow: hidden; }',
  '.vision-panel { width: 300px; flex-shrink: 0; background: #1F0A15; border-right: 1px solid rgba(232, 62, 140, 0.15); display: none; flex-direction: column; overflow: hidden; }'
).replace(
  '.vision-head { padding: 12px 14px; border-bottom: 1px solid rgba(184,150,62,0.15); display: flex; align-items: center; justify-content: space-between; }',
  '.vision-head { padding: 12px 14px; border-bottom: 1px solid rgba(232, 62, 140, 0.15); display: flex; align-items: center; justify-content: space-between; }'
).replace(
  '.vision-tabs { display: flex; border-bottom: 1px solid rgba(184,150,62,0.12); }',
  '.vision-tabs { display: flex; border-bottom: 1px solid rgba(232, 62, 140, 0.12); }'
).replace(
  '.vision-tab.active { color: var(--gold-light); background: rgba(184,150,62,0.08); }',
  '.vision-tab.active { color: var(--gold-light); background: rgba(232, 62, 140, 0.08); }'
).replace(
  '.toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--navy); color: var(--gold-light); padding: 9px 20px; border-radius: 4px; border: 1px solid rgba(184,150,62,0.4); font-size: 12px; letter-spacing: 0.8px; z-index: 999; display: none; white-space: nowrap; box-shadow: var(--shadow-lg); }',
  '.toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: var(--navy); color: var(--gold-light); padding: 12px 24px; border-radius: 24px; border: 1px solid rgba(232, 62, 140, 0.4); font-size: 12px; font-weight: 500; letter-spacing: 1px; z-index: 999; display: none; white-space: nowrap; box-shadow: 0 10px 40px rgba(232, 62, 140, 0.25); text-transform: uppercase; }'
);

content = content.replace(
  '.ig-grid-hint { padding: 7px 10px; font-size: 9px; letter-spacing: 1.5px; color: rgba(212,175,90,0.4); text-transform: uppercase; }',
  '.ig-grid-hint { padding: 7px 10px; font-size: 9px; letter-spacing: 1.5px; color: rgba(255, 107, 158, 0.5); text-transform: uppercase; }'
);

content = content.replace(
  '.feed-card { border: 1px solid rgba(184,150,62,0.15); background: rgba(255,255,255,0.04); border-radius: 4px; overflow: hidden; }',
  '.feed-card { border: 1px solid rgba(232, 62, 140, 0.15); background: rgba(255,255,255,0.04); border-radius: 8px; overflow: hidden; }'
).replace(
  '.feed-plat { padding: 6px 10px; font-size: 9px; letter-spacing: 2px; color: var(--gold); text-transform: uppercase; border-bottom: 1px solid rgba(184,150,62,0.1); }',
  '.feed-plat { padding: 6px 10px; font-size: 9px; letter-spacing: 2px; color: var(--gold); text-transform: uppercase; border-bottom: 1px solid rgba(232, 62, 140, 0.1); }'
).replace(
  '.feed-visual-label { font-family: \\'Cormorant Garamond\\', serif; font-size: 12px; color: rgba(212,175,90,0.7); line-height: 1.4; }',
  '.feed-visual-label { font-family: \\'Cormorant Garamond\\', serif; font-size: 12px; color: rgba(255, 107, 158, 0.8); line-height: 1.4; }'
).replace(
  '.feed-caption { padding: 7px 10px; font-size: 10px; color: rgba(255,255,255,0.35); font-style: italic; font-family: \\'Cormorant Garamond\\', serif; line-height: 1.5; }',
  '.feed-caption { padding: 7px 10px; font-size: 10px; color: rgba(255,255,255,0.45); font-style: italic; font-family: \\'Cormorant Garamond\\', serif; line-height: 1.5; }'
);

fs.writeFileSync(targetFile, content);
console.log('Theme replaced successfully');
