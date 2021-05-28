import { render, screen } from "@testing-library/react";
import Product from "./Product";

const mockProduct = {
  name: "product1",
  description: "description1",
  price: 100,
};

test("render a normal product", () => {
  render(<Product product={{ ...mockProduct, image: "productImageUrl" }} />);
  expect(screen.getByText("product1")).toBeInTheDocument();
  expect(screen.getByText("description1")).toBeInTheDocument();
  expect(screen.getByText("$100")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "productImageUrl");
  expect(screen.getByAltText("product1")).toBeInTheDocument();
});

test("render a product without image", () => {
  render(<Product product={mockProduct} />);
  expect(screen.getByRole("img")).toHaveAttribute("src", "empty.jpeg");
});
