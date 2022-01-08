import { useState, useEffect } from "react";
// useEffect는 두개의 인수를 가지는 함수이다.
// 첫번째 인수는 우리가 한번만 실행하고 싶은 코드가 들어간다.
// useEffect는 우리 코드가 한번만 실행 되도록 보호해주는 역할을 한다.

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("나는 계속 리렌더 될때마다 실행됨");

  useEffect(() => {
    console.log("나는 리렌더 되어도 한번만 실행될거야");
  }, []);

  // console.log("Search for", keyword);
  // 문제가 뭐냐면 지금 키워드 검색할때만 나타나고 싶은데,
  // 리액트는 state가 변화되면 모든 리렌더 하기에, 클릭 버튼 눌러도 콘솔에 찍힌다
  // 나는 특정 state만 변할때를 감지하고 싶은 것이다.

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);

  // 이제 []안에 들어가는 키워드만 변화할때 코드가 실행될 것이다.
  // 그래서 빈 array []를 해주었을때 한번 만 실행되는 이유이다. ->지켜볼것이 없기에 한번만 실행된다.
  // 위에 코드 같은 경우는 처음이랑, 글자 5가 넘을때만 검색하게 해줌
  // 두번째 들어가는 인수를 dependencies라고 하고 이는 리액트 js가 상태변화를 지켜보고있는 것이다.
  // 그리고 그 상태가 변하면 앞에 첫번째 인수에 들어있는 코드를 실행시킨다.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭해주세요</button>
    </div>
  );
}

export default App;
