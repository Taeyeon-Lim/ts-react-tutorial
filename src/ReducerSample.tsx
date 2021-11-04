// Counter.tsx 보다 좀 더 복잡한 Reducer를 사용하는 예제
import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// 파라미터로 [State, Action]타입을 받아서 반드시 State 타입의 데이터를 반환
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      // 'SET_COUNT' 타입 내의 action 안에 [ count ]가 있으므로 자동 완성됨
      return { ...state, count: action.count };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SET_COLOR':
      return { ...state, color: action.color };
    case 'TOGGLE_GOOD':
      return { ...state, isGood: !state.isGood };
    default:
      throw new Error('unHandled Action Type');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    // 예상된 타입의 값이 아닌 경우, 에러를 표시해준다
    count: 0,
    text: 'Hello',
    color: 'red',
    isGood: true,
  });

  // 아래처럼 선언 시 오류를 표시함
  // const setCount = () => dispatch({ type: 'SET_COUNT'});
  // 자동완성을 누르면, count가 필요함을 알려준다
  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'Bye' });
  const setColor = () =>
    dispatch({ type: 'SET_COLOR', color: 'orange' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>test: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
