import React, { createContext, Dispatch, useContext, useReducer } from 'react';

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

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
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

type SampleDispatch = Dispatch<Action>;

// const SampleStateContext = createContext<State | null>(null);
const SampleStateContext = createContext<State>({
  count: 0,
  text: '',
  color: 'orange',
  isGood: false,
});
// React에서 import된 "Dispatch" 사용
// const SampleDispatchContext = createContext<SampleDispatch | null>(null);
const SampleDispatchContext = createContext<SampleDispatch>(() => null);
// 한 번에 제너릭을 사용해도 문제 X
// const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
  children: React.ReactNode;
};

export function SampleProvider({ children }: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'Hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// useContext를 사용하는 대신 사용할 커스텀 훅 생성
export function useSampleState() {
  // const state = useContext(SampleStateContext);
  // if (!state) {
  //   throw new Error('Cannot find SampleProvider: State');
  // }
  return useContext(SampleStateContext);
}

export function useSampleDispatch() {
  // const dispatch = useContext(SampleDispatchContext);
  // if (!dispatch) {
  //   throw new Error('Cannot find SampleProvider: dispatch');
  // }
  return useContext(SampleDispatchContext);
}
