import { useState, useEffect } from "react";
import Product from "./Product";
import { Container } from "./styled";
import axios from "axios";

// const getImage = (assets, item) => {
//   if (item.fields.image) {
//     return assets.filter(
//       (asset) => asset.sys.id === item.fields.image.sys.id
//     )[0].fields.file.url;
//   }
//   return "";
// };

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // edge cases

    // async:
    // 1. callback -> old_async_function(callback_function)
    // 2. promise -> promise_async_function().then(response=>{}).catch(error=>{}).finally(()=>{})
    // 3. async -> async function async_function({  await async_call(); })
    // 4. generator functions -> function*

    // Contentful REST API
    // axios
    //   .get(
    //     "https://cdn.contentful.com/spaces/9n2fjo2f8clh/environments/master/entries",
    //     {
    //       params: {
    //         content_type: "product",
    //         access_token: "S5-0jWr40c6N2oBYFe-cLQSnWExciLp4Ma3CaJ4nbyk",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     if (result.status === 200) {
    //       console.log(result.data);
    //       const assets = result.data.includes.Asset;

    //       setProducts(
    //         result.data.items.map((item) => ({
    //           id: item.sys.id,
    //           name: item.fields.name,
    //           price: item.fields.price,
    //           description: item.fields.description,
    //           image: getImage(assets, item),
    //         }))
    //       );
    //     } else {
    //       console.log("Error in products request");
    //     }
    //   });

    const callContentful = async () => {
      const result = await axios.post(
        process.env.REACT_APP_CONTENTFUL_GRAPHQL_URL +
          "?access_token=" +
          process.env.REACT_APP_ACCESS_TOKEN,
        {
          query: `query {
              productCollection {
                total
                items {
                  name
                  description
                  sys {
                    id
                  }
                  image {
                      url
                  }
                  price
                }
              }
            }`,
        }
      );

      if (result.status === 200) {
        // result.data.data.productCollection.total
        setProducts(
          result.data.data.productCollection.items.map((item) => ({
            id: item.sys.id,
            name: item.name,
            price: item.price,
            description: item.description,
            image: item.image ? item.image.url : "",
          }))
        );
      } else {
        console.log("Error in products request");
      }
    };
    callContentful();
  }, []);

  const productsComponent = products.map((product) => (
    <Product key={product.id} addToCart={addToCart} product={product} />
  ));
  return <Container>{productsComponent}</Container>;
};

export default Products;
