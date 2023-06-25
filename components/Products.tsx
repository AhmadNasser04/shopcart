"use client";
import React, { useState, useEffect } from "react";
import { ProductCard } from "@/components";
import { getProducts, getCategories } from "@/services";

type Props = {};

type product = {
  id: string;
  description: string;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  slug: string;
  featuredImage: {
    url: string;
  };
  category: {
    id: string;
  };
};

function Products({}: Props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts = await getProducts();
      setProducts(newProducts);
    };

    const fetchCategories = async () => {
      const newCategories = await getCategories();
      setCategories(newCategories);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const getFilteredCategory = (category: { id: string }): boolean => {
    if (categoryFilter === "all") return false;
    else if (category.id === categoryFilter) return false;
    else return true;
  };

  const handleCategoryChange = (e: any) => {
    setCategoryFilter(e.target.value);
  };

  const handleSortChange = (e: any) => {
    if (e.target.value === "pricedown") {
      const sortedProducts = [...products].sort(
        (a: product, b: product) => a.price - b.price
      );
      setProducts(sortedProducts);
    } else if (e.target.value === "priceup") {
      const sortedProducts = [...products].sort(
        (a: product, b: product) => b.price - a.price
      );
      setProducts(sortedProducts);
    } else if (e.target.value === "az") {
      const sortedProducts = [...products].sort((a: product, b: product) =>
        a.name.localeCompare(b.name)
      );
      setProducts(sortedProducts);
    } else if (e.target.value === "rating") {
      const sortedProducts = [...products].sort(
        (a: product, b: product) => b.rating - a.rating
      );
      setProducts(sortedProducts);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen">
      <div className="container space-y-10">
        <div className="flex items-center justify-center gap-5 md:justify-start">
          <div>
            <select
              name="categories"
              id="categories"
              onChange={handleCategoryChange}
              className="px-5 py-2 text-center rounded-full"
            >
              <option value="all">All Categories</option>
              {categories.map((category: any) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="sort"
              id="sort"
              onChange={handleSortChange}
              className="px-5 py-2 text-center rounded-full"
            >
              <option value="price">Sort by</option>
              <option value="priceup">Price &#8593;</option>
              <option value="pricedown">Price &#8595;</option>
              <option value="az">A-Z</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center md:text-left">
            Todays Best Deals For You!
          </h1>
        </div>
        <div
          id="products"
          className="flex flex-col items-center justify-center gap-5 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {products.map((product: product) => (
            <div
              key={product.id}
              className={`${
                getFilteredCategory(product.category) && "hidden"
              } transition-all`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
