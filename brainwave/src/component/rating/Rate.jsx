import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rate = ({ noOfIndex = 10 }) => {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRate(getCurrentIndex);
   
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setRate(getCurrentIndex);
  };

  const handleMouseLeave = (getc) => {
    setRate(getc);
  };

  return (
    <>
      <div className="flex justify-center">
        {[...Array(noOfIndex)].map((_, index) => {
          index += 1;
                    return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              color={index <= (hover || rate) ? "orange" : "gray"}
              size={70}
            />
          );
        })}
      </div>
    </>
  );
};

export default Rate;
