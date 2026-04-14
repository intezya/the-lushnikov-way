import { describe, expect, it } from "vitest";
import { getRouterBase } from "@/lib/routerBase";

describe("getRouterBase", () => {
  it("omits basename for the site root", () => {
    expect(getRouterBase("/")).toBeUndefined();
    expect(getRouterBase()).toBeUndefined();
  });

  it("trims the trailing slash for GitHub Pages project paths", () => {
    expect(getRouterBase("/the-lushnikov-way/")).toBe("/the-lushnikov-way");
  });

  it("keeps already normalized base paths unchanged", () => {
    expect(getRouterBase("/the-lushnikov-way")).toBe("/the-lushnikov-way");
  });
});
