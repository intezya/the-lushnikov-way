import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

describe("route-based navigation", () => {
  it("renders header links as standalone page routes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "О себе" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Деятельность" })).toHaveAttribute("href", "/activities");
    expect(screen.getByRole("link", { name: "Центры помощи" })).toHaveAttribute("href", "/rehabs");
    expect(screen.getByRole("link", { name: "Новости" })).toHaveAttribute("href", "/news");
    expect(screen.getByRole("link", { name: "Контент" })).toHaveAttribute("href", "/content");
    expect(screen.getByRole("link", { name: "Отзывы" })).toHaveAttribute("href", "/testimonials");
    expect(screen.getByRole("link", { name: "Контакты" })).toHaveAttribute("href", "/contacts");
  });

  it("renders footer links as standalone page routes", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "О себе" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Деятельность" })).toHaveAttribute("href", "/activities");
    expect(screen.getByRole("link", { name: "Центры помощи" })).toHaveAttribute("href", "/rehabs");
    expect(screen.getByRole("link", { name: "Контакты" })).toHaveAttribute("href", "/contacts");
  });

  it("highlights the active route in header navigation", () => {
    render(
      <MemoryRouter initialEntries={["/news"]}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Новости" })).toHaveClass("bg-primary/10");
    expect(screen.getByRole("link", { name: "Новости" })).toHaveClass("text-primary");
  });

  it("renders the about page on its dedicated route", async () => {
    window.history.pushState({}, "", "/about");

    render(<App />);

    expect(await screen.findByRole("heading", { name: /о никите лушникове/i })).toBeInTheDocument();
    expect(screen.getByText("2004")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
  });

  it("renders the contacts page on its dedicated route", async () => {
    window.history.pushState({}, "", "/contacts");

    render(<App />);

    expect(await screen.findByRole("heading", { name: /свяжитесь с нами/i })).toBeInTheDocument();
    expect(screen.getAllByText("+7 916 031 35 55")[0]).toBeInTheDocument();
  });

  it("renders the centers help page with neutral copy on its dedicated route", async () => {
    window.history.pushState({}, "", "/rehabs");

    render(<App />);

    expect(await screen.findByRole("heading", { name: /проверенные центры помощи/i })).toBeInTheDocument();
    expect(screen.getByText(/все центры помощи прошли проверку/i)).toBeInTheDocument();
    expect(screen.queryByText(/рехабы/i)).not.toBeInTheDocument();
  });

  it("shows the official portrait and updated positioning on the homepage", async () => {
    window.history.pushState({}, "", "/");

    render(<App />);

    expect(await screen.findByAltText(/официальный портрет никиты лушникова/i)).toBeInTheDocument();
    expect(screen.getByText(/председатель экспертного совета национального антинаркотического союза/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /духовная опора программы/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /публичное доверие к делу/i })).toBeInTheDocument();
    expect(screen.getByAltText(/письмо благословение с официального сайта никиты лушникова/i)).toBeInTheDocument();
    expect(screen.queryByText(/навигация по сайту/i)).not.toBeInTheDocument();
  });
});
