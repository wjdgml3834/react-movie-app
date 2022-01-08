import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  const Hello = () => {
    useEffect(() => {
      console.log("Created! :) ");
      return () => console.log("Destroyed :(");
      // 이것은 Clean up 함수인데, 컴포넌트가 파괴될때 함수를 실행시켜줄 수 있다.
      // 그럴려면 새로운 함수를 return 해야한다.(return 하면 저 함수 실행)
      // 예를 들어 컴포넌트가 없어질때 분석결과를 보내고 싶거나 그럴 때 쓴다.
      // 중요한건 이걸로 컴포넌트가 언제 생성되었고 언제 파괴 되었는지를 알 수 있다는 점이다.
    }, []);
    // 컴포넌트가 처음 생성될때 작동
    return <h1>Hello</h1>;
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      {/* 컴포넌트 자체가 생성되었다가 파괴되었다가 반복 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
