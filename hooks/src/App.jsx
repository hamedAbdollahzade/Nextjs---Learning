import { useDeferredValue, useEffect, useMemo, useState } from "react";

const List = ({ value }) => {
  const deferredValue = useDeferredValue(value);
  useEffect(() => {
    console.log("value =", value);
    console.log("deferredValue =", deferredValue);
  });
  const list = useMemo(() => {
    const numberList = [];
    let count = 0;
    while (count <= 20000) {
      numberList.push(<div key={count}> مقدار برابر است با : {value}</div>);
      count++;
    }
    return numberList;
  }, [deferredValue]);

  return list;
};

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>
        Input :
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <List value={value} />
    </div>
  );
}

export default App;
