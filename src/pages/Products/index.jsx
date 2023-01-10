import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/index";
import { apiProducts } from "../../apis/dashboard/product";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  // const getProducts = async () => {
  //   const response = await apiProducts();
  //   setProducts(response.data.products);
  // };
  async function getProducts(event) {
    try {
      let { clientHeight,scrollTop,  scrollHeight } =
        event.target.scrollingElement;
      if (
        !loading &&
        skip != total &&
        scrollTop + clientHeight >= (scrollHeight * 4) / 5
      ) {
        triggerProducts(skip, limit);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function triggerProducts(skipNumber, limitNumber) {
    setLoading(true);
    const response = await apiProducts(skipNumber, limitNumber);
    setSkip(skipNumber + limitNumber);
    setLoading(false);
    setProducts([...products, ...response.data.products]);
  }
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
       getProducts(event);
    });
     triggerProducts(skip, limit);
  }, []);
  return (
    <>
      <Layout />
      <div className="container mx-auto">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products &&
                products.map((product) => (
                  <div
                  
                    key={product.id}
                    className="w-full justify-center align-center max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                  >
                    <img
                      style={{ height: "250px", width: "100%" }}
                      className="rounded-t-lg"
                      src={product.thumbnail}
                      alt={product.title}
                    />

                    <div className="px-5 py-5">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {product.title}
                      </h5>

                      <div className="flex items-center justify-between">
                        <span className="text-1xl font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </span>
                        <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xs px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          View more
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
