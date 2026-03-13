import puppeteer from "puppeteer";
import { existsSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const dir = "./temporary screenshots";

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter((f) => f.startsWith("screenshot-"));
const nextNum = existing.length + 1;
const filename = label
  ? `screenshot-${nextNum}-${label}.png`
  : `screenshot-${nextNum}.png`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

// Scroll to bottom to trigger all animations, then back to top
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let totalHeight = 0;
    const timer = setInterval(() => {
      window.scrollBy(0, 300);
      totalHeight += 300;
      if (totalHeight >= document.body.scrollHeight) {
        clearInterval(timer);
        window.scrollTo(0, 0);
        resolve();
      }
    }, 50);
  });
});
await new Promise((r) => setTimeout(r, 1000));

await page.screenshot({ path: join(dir, filename), fullPage: true });
console.log(`Saved: ${join(dir, filename)}`);
await browser.close();
