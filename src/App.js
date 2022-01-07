import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  console.log("render");
  // 콘솔 로그를 찍어보면 useState를 사용하면 state의 변경값이 있을때마다 리렌더 된다.
  // 그러나 우리는 가끔 component가 처음 렌더 될때만 코드가 실행되길 원할 수 도있다.
  // 예를들어서 api를 호출한다고 했을때, 처음만 불러오고 싶지, 계속 api 데이터를 불러오고 싶진 않을것이다.
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭해주세요</button>
    </div>
  );
}

export default App;
