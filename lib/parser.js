const fs = require("fs");

const basePath = "../";

require("markdown-blog-content-parser").parseMarkdownTree(
  basePath,
  ["build", "lib", "ui", ".git"],
  (res) => {
    fs.writeFileSync("../build/tree.json", JSON.stringify(res), "utf8");
  }
);
