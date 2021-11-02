import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

// React.FC의 장점
// 1. 선언 없는 props의 children 사용
function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
