import { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [disable, setDisable] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 20}`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 50) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>There is an error: {errorMsg}</div>;
  }

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div className="flex gap-5 flex-col">
        <div className="grid grid-cols-4 gap-2.5">
          {products && products.length
            ? products.map((item) => (
                <div
                  className=" text-center flex flex-col border-solid border-2 gap-2.5 p-5"
                  key={item.id}
                >
                  <img
                    className="w-[200px] h-[200px]"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="flex flex-col py-3 items-center justify-center">
          <button
            className={`bg-blue-800 text-white py-2 px-4 rounded ${
              disable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleCount}
            disabled={disable}
          >
            Load more
          </button>
          {disable ? (
            <p>You have reached the maximum number of products.</p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Loading;
