import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = React.useState(false);

  return (
    <div>
      <button onClick={() => setHidden((prev) => !prev)}>hide clock</button>
      {!hidden && <Todo />}
    </div>
  );
};

const Counter = () => {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("time is updating...");
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="border border-red-500 p-10">
      <h2>The current date and time is: {date.toLocaleTimeString()}</h2>
    </div>
  );
};

const Todo = () => {
  const [t, setT] = useState<any>({});
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setT(data))
      .catch((Error) => {
        if (Error.name === "AbortError") {
          console.log("aborting data fetching due to unmounting component");
        } else {
          console.log("failed to load data");
        }
      });

    // When the component unmounts, abort the request
    return () => {
      controller.abort();
    };
  }, []);
  console.log(t);

  return <div>{t && t.title}</div>;
};

export default UseEffectExample;
