import { copyFile } from "node:fs/promises";

const distDir = new URL("../dist/", import.meta.url);

await copyFile(new URL("index.html", distDir), new URL("404.html", distDir));
