import { describe, expect, it } from "vitest";
import { getAssetPath } from "@/lib/assetPath";

describe("getAssetPath", () => {
  it("returns root-relative asset paths for the site root", () => {
    expect(getAssetPath("/nikita-lushnikov-official.png", "/")).toBe("/nikita-lushnikov-official.png");
  });

  it("prefixes asset paths with the GitHub Pages base path", () => {
    expect(getAssetPath("/nikita-lushnikov-official.png", "/the-lushnikov-way/")).toBe(
      "/the-lushnikov-way/nikita-lushnikov-official.png",
    );
    expect(getAssetPath("/homepage/lavrov.png", "/the-lushnikov-way/")).toBe(
      "/the-lushnikov-way/homepage/lavrov.png",
    );
  });
});
