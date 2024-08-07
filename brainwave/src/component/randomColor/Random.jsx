import { useEffect, useState } from "react";

function Random() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const handleColorRandom = (multiple) => {
    return Math.floor(Math.random() * multiple);
  };

  const handleRgbColor = () => {
    let r = handleColorRandom(256),
      g = handleColorRandom(256),
      b = handleColorRandom(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const handleHexColor = () => {
    const hexChars = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexChars[handleColorRandom(16)];
    }
    setColor(hexColor);
  };

  const generateColor = (type) => {
    if (type === "rgb") {
      setTypeOfColor("rgb");
      handleRgbColor();
    } else if (type === "hex") {
      setTypeOfColor("hex");
      handleHexColor();
    }
  };

  /* useEffect(() => {
    typeOfColor === "rgb" ? handleRgbColor() : handleHexColor();
  }, [typeOfColor]); */

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: color }}>
      <div className="flex justify-center items-center gap-9">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setTypeOfColor("rgb")}
        >
          Rgb Generate
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => generateColor("hex")}
        >
          Hex Generate
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() =>
            typeOfColor === "hex" ? handleHexColor() : handleRgbColor()
          }
        >
          Generate color
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h3 className="text-xl mb-2">
          {typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}
        </h3>
        <h2 className="text-3xl">{color}</h2>
      </div>
    </div>
  );
}

export default Random;
