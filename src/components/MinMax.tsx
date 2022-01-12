import { useEffect, useState } from "react";

function MinMax() {
  const arr = [-1, 0, 8, 10, 100, -20, -5];

  const [minVal, setMin] = useState(0);
  const [maxVal, setMax] = useState(0);

  const getMinMax = () => {
    let minTemp: number = arr[0];
    let maxTemp: number = arr[0];

    if (minTemp === undefined || maxTemp === undefined) return;
    arr.map((num, idx) => {
      if (idx === arr.length - 1) return;
      for (let i = idx + 1; i < arr.length; i++) {
        minTemp = minTemp <= arr[i] ? minTemp : arr[i];
        maxTemp = maxTemp >= arr[i] ? maxTemp : arr[i];
      }
    });
    if (minTemp && maxTemp) {
      setMin(minTemp);
      setMax(maxTemp);
    }
  };

  useEffect(() => {
    getMinMax();
  });

  return (
    <div>
      <p>{`${arr}`}</p>
      <p>min : {minVal} </p>
      <p>max : {maxVal} </p>
    </div>
  );
}

export default MinMax;
