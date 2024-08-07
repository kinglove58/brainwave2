import { useState } from "react";
import { accordionData } from "./data";

const Accord = () => {
  const [selected, setSelected] = useState(null);
  const [enaSubmission, setEnaSubmissiosn] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSubmission = (getCurrentId) => {
    let copyMutiple = [...multiple];

    const findIndex = copyMutiple.indexOf(getCurrentId);
    if (findIndex === -1) {
      copyMutiple.push(getCurrentId);
    } else {
      copyMutiple.splice(findIndex, 1);
    }
    setMultiple(copyMutiple);
  };

  const handleSigle = (getCurrent) => {
    setSelected(getCurrent === selected ? null : getCurrent);
  };

  console.log(selected, multiple);
  return (
    <div className="items-center text-wrap">
      <button
        onClick={() => setEnaSubmissiosn(!enaSubmission)}
        className="bg-blue-600"
      >
        Enable single selection
      </button>
      <div>
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((dataItem) => (
            <div className="bg-blue-700" key={dataItem.id}>
              <div
                onClick={
                  enaSubmission
                    ? () => handleSubmission(dataItem.id)
                    : () => handleSigle(dataItem.id)
                }
              >
                <h3 className="text-black">{dataItem.question}</h3>
                <span className="text-black">+</span>
              </div>
              {enaSubmission
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="text-wrap max-w-sm ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="text-wrap max-w-sm ">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No Data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accord;
