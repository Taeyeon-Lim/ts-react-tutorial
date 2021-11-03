import React from 'react';

type GreetingsProps = {
  name: string;
  mark?: string;
  optional?: string;
  // onClick은 함수이고, 파라미터와 반환값을 갖지 않음
  // onClick: () => void;
  onClick: (name: string) => void;
  // children?: React.ReactNode
};

// ※ React.FC를 사용할 때의 장점 = (type의)props에서 children 지정없이 children 사용
// 단점 = defaultProps 작동 안 함 ( 미리 = '!'와 같이 작성해야 작동 )
// const Greetings : React.FC<GreetingsProps> = ({ name, mark = '!', optional, onClick, children }) => {
//   const handleClick = () => onClick(name);
//   return (
//     <div>
//       Hello, {name} {mark}
//       { optional && <p>{optional}</p> }
//       <div><button onClick={handleClick}>이름 호출하기</button></div>
//     </div>
//   )
// }

// ※ defaultProps가 작동하는 구조
// 단점 = children이 없으므로, 미리 type<GreetingsProps>에 작성해야 사용 가능
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
// function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      { optional && <p>{optional}</p>}
      <div><button onClick={handleClick}>이름 호출하기</button></div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
  optional: '[옵션 없음]'
};

export default Greetings;
