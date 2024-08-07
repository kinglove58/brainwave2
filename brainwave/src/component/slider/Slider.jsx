import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading, please wait...</div>;
  }

  if (errorMessage !== null) {
    return <div>There is an error: {errorMessage}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <>
      <div className="flex justify-center items-center relative w-[600px] h-[400px] m-8">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="bg-blue-500 text-white rounded-full drop-shadow-sm absolute h-8 w-8 left-2 z-20"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? "rounded-xl w-full h-full shadow-lg" : "rounded-xl w-full h-full shadow-lg hidden"}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="bg-blue-500 text-white rounded-full drop-shadow-sm absolute h-8 w-8 right-4"
        />
        <span className="absolute bottom-4 flex">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={currentSlide === index ? "bg-white h-4 w-4 mx-2 rounded-[50%] border-none outline-none cursor-pointer" : " h-4 w-4 mx-2 rounded-[50%] border-none outline-none cursor-pointer bg-gray-500"}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default Slider;
