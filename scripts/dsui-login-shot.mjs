// One-off screenshot of the pouk-auth UI /login page to prove the DS renders.
// Placed inside poukai-site so @playwright/test resolves from its node_modules.
import { chromium } from "@playwright/test";

const URL = process.env.SHOT_URL ?? "http://localhost:3020/login";
const OUT = process.env.SHOT_OUT ?? "/tmp/dsui-login.png";

const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    viewport: { width: 1000, height: 820 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });

  // Fill the password field and click the reveal toggle so the shot proves
  // PasswordInput's show/hide behavior works.
  await page.fill('input[name="email"]', "ada@pouk.ai");
  await page.fill('input[name="password"]', "correct horse battery staple");
  const toggle = page.getByRole("button", { name: /show password/i });
  await toggle.click();

  // Confirm the input flipped to type="text" (revealed).
  const revealedType = await page
    .locator('input[name="password"]')
    .getAttribute("type");
  console.log("password input type after reveal:", revealedType);

  await page.screenshot({ path: OUT, fullPage: false });
  console.log("screenshot written:", OUT);
} finally {
  await browser.close();
}
