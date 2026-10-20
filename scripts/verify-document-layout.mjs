import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outputDirectory = join(process.cwd(), "out");
let documents = 0;
let chineseDocuments = 0;

function verifyDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      verifyDirectory(path);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;

    const route = relative(outputDirectory, path).split(sep).join("/");
    const html = readFileSync(path, "utf8");
    const expectedLanguage = route.startsWith("zh/") ? "zh-CN" : "en";
    for (const tag of ["html", "body"]) {
      const openingTags = html.match(new RegExp(`<${tag}(?=\\s|>)`, "gi")) ?? [];
      const closingTags = html.match(new RegExp(`</${tag}\\s*>`, "gi")) ?? [];
      assert.equal(openingTags.length, 1, `${route}: expected one opening ${tag} tag`);
      assert.equal(closingTags.length, 1, `${route}: expected one closing ${tag} tag`);
    }
    const language = html.match(/<html\b[^>]*\blang="([^"]+)"/i)?.[1];
    // Next.js emits its own global error documents outside either locale root.
    // Check their structure above, but require locale language on site pages.
    const isFrameworkError = ["404.html", "404/index.html", "_not-found/index.html"].includes(route);
    if (!isFrameworkError) {
      assert.equal(language, expectedLanguage, `${route}: incorrect document language`);
    }
    documents += 1;
    if (expectedLanguage === "zh-CN") chineseDocuments += 1;
  }
}

verifyDirectory(outputDirectory);
assert.ok(chineseDocuments > 0, "Expected exported Chinese HTML documents");
console.log(`Verified ${documents} HTML document structures and site-page languages (${chineseDocuments} Chinese).`);
