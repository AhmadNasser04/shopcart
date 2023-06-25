import { request, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export const getProducts = async () => {
  const query = gql`
    query Products {
      products(first: 100) {
        id
        description
        name
        price
        quantity
        rating
        slug
        featuredImage {
          url
        }
        category {
          id
          name
        }
      }
    }
  `;

  const data = await request(endpoint, query);
  return data.products;
};

export const getCategories = async () => {
  const query = gql`
    query Categories {
      categories {
        name
        image {
          url
        }
        id
      }
    }
  `;

  const data = await request(endpoint, query);
  return data.categories;
};

export const getProduct = async (slug) => {
  const query = gql`
    query Product($slug: String!) {
      product(where: { slug: $slug }) {
        id
        description
        name
        price
        quantity
        rating
        slug
        featuredImage {
          url
        }
        category {
          id
          name
        }
      }
    }
  `;

  const data = await request(endpoint, query, { slug });
  return data.product;
};
