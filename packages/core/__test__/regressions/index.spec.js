// @ts-check

const { promisify } = require("util");
const { join } = require("path");
const { readFileSync } = require("fs");
const sass = require("node-sass");

//

const cwd = join(__dirname, "../..");

const includePaths = [
  join(cwd, "src"),
  join(cwd, "node_modules"),
  join(cwd, "../../node_modules")
];
const sassOptions = {
  importer: require("node-sass-yaml-importer"),
  includePaths
};

const defaultFiles = [
  "bootstrap/scss/functions",
  "colors",
  "variables",
  "bootstrap/scss/mixins"
];
const importContext = defaultFiles.reduce(
  (memo, file) => `${memo}\n@import "${file}";`,
  ""
);
const mainFile = join(cwd, "src/socialgouv-bootstrap.scss");
const importedFiles = readFileSync(mainFile, { encoding: "utf8" })
  .match(/@import\s+"([^"]+)";/g)
  .map(importLine => {
    const [, file] = importLine.match(/@import\s+"([^"]+)";/);
    return file;
  })
  .filter(file => !defaultFiles.includes(file));

//

test.each(importedFiles)("%s should match snapshot", async name => {
  const result = await promisify(sass.render)({
    ...sassOptions,
    data: `
      ${importContext}
      @import "${name}";
    `
  });
  expect(result.css.toString()).toMatchSnapshot(name);
});
