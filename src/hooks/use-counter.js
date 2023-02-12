import { useState } from "react";

export const useCounter = ({ initialCount = 0 }) => {  
  const [count, setCount] = useState(initialCount);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  return { count, inc, dec };
};
