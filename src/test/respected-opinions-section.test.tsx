import { render, screen } from "@testing-library/react";
import RespectedOpinionsSection from "@/components/sections/RespectedOpinionsSection";

const getCardGrid = (name: string) => {
  const image = screen.getByAltText(name);
  const article = image.closest("article");

  expect(article).not.toBeNull();
  expect(article?.firstElementChild).not.toBeNull();

  return article!.firstElementChild as HTMLElement;
};

describe("RespectedOpinionsSection", () => {
  it("uses the same 280px image column width for the featured and supporting opinion cards", () => {
    render(<RespectedOpinionsSection />);

    expect(getCardGrid("Сергей Лавров").className).toContain("280px_minmax(0,1fr)");
    expect(getCardGrid("Юрий Федотов").className).toContain("280px_minmax(0,1fr)");
    expect(getCardGrid("Фёдор Емельяненко").className).toContain("280px_minmax(0,1fr)");
    expect(getCardGrid("Леонид Слуцкий").className).toContain("280px_minmax(0,1fr)");
  });
});
