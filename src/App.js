import { useState, useEffect } from "react";
// useEffect는 두개의 인수를 가지는 함수이다.
// 첫번째 인수는 우리가 한번만 실행하고 싶은 코드가 들어간다.
// useEffect는 우리 코드가 한번만 실행 되도록 보호해주는 역할을 한다.

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("나는 계속 리렌더 될때마다 실행됨");

  useEffect(() => {
    console.log("나는 리렌더 되어도 한번만 실행될거야");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭해주세요</button>
    </div>
  );
}

export default App;
