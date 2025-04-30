import { useEffect, useRef, useState } from "react";

export default function App() {
  const [limit] = useState(5);
  const [skip, setSkip] = useState(0);
  const [cars, setCars] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch(`https://json-api.uz/api/project/fn37/cars?skip=${skip}&limit=${limit}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);

      setCars((prev) => {
        return [...prev, ...res.data];
      });
    }) 
    .finally(() => {
      setLoader(false);
    });
  }, [skip]);

  function handleClick() {
    setSkip((prev) => prev + limit);
  }

  return (
    <div>
      {cars && cars.map(({ brand, description }, index) => {
        return (
          <div key={index}>
            <h2>{brand}</h2>
            <p>{description}</p>
          </div>
        );
      })}
      {loader && <p>Loading...</p>}
      <button onClick={handleClick}>Ko'proq</button>
    </div>
  );
}