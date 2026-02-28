import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
await page.goto('http://localhost:8080', { waitUntil: 'networkidle' });

const result = await page.evaluate(() => {
  const summary = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    htmlClientWidth: document.documentElement.clientWidth,
    bodyClientWidth: document.body.clientWidth,
    rootClientWidth: document.getElementById('root')?.clientWidth ?? null,
    htmlScrollHeight: document.documentElement.scrollHeight,
    bodyScrollHeight: document.body.scrollHeight,
    htmlOverflowY: getComputedStyle(document.documentElement).overflowY,
    bodyOverflowY: getComputedStyle(document.body).overflowY,
  };

  const entries = [];
  const nodes = [document.documentElement, document.body, ...(document.getElementById('root') ? [document.getElementById('root')] : []), ...Array.from(document.querySelectorAll('*'))];
  const seen = new Set();

  for (const el of nodes) {
    if (!el || seen.has(el)) continue;
    seen.add(el);

    const cs = getComputedStyle(el);
    const oy = cs.overflowY;
    const ox = cs.overflowX;
    const sh = el.scrollHeight;
    const ch = el.clientHeight;
    const ow = el.offsetWidth;
    const cw = el.clientWidth;
    const hasYScrollPotential = sh > ch + 1 && /(auto|scroll|overlay)/.test(oy);
    const hasYGutter = ow - cw > 0;

    if (hasYScrollPotential || hasYGutter || el === document.documentElement || el === document.body || (el instanceof HTMLElement && el.id === 'root')) {
      const r = el.getBoundingClientRect();
      entries.push({
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        className: (el.className && String(el.className).slice(0, 120)) || null,
        oy,
        ox,
        sh,
        ch,
        ow,
        cw,
        scrollTop: el.scrollTop,
        rect: {
          left: Math.round(r.left),
          top: Math.round(r.top),
          width: Math.round(r.width),
          height: Math.round(r.height),
          right: Math.round(r.right),
          bottom: Math.round(r.bottom),
        },
      });
    }
  }

  const likelyRightEdgeScrollContainers = entries.filter((e) => e.rect.right >= window.innerWidth - 2 && e.rect.height > window.innerHeight * 0.8 && /(auto|scroll|overlay)/.test(e.oy));

  return { summary, entries, likelyRightEdgeScrollContainers };
});

console.log(JSON.stringify(result, null, 2));
await page.screenshot({ path: 'debug-scroll.png' });
await browser.close();
