# react에서 typescript 사용하는 튜토리얼
<br>
```javascript
// 타입스크립트로 CRA
npx create-react-app [프로젝트 명] --template typescript
```
<br>

## React.FC 
<br>

- 장점
props에서 children "지정없이", children 사용 가능
``` javascript
// 예시
const Greetings : React.FC<GreetingsProps> = ({ name, mark = '!', optional, onClick, children }) => {  /* ...code */ }
```
- 단점
defaultProps 작동 안 함 ( { props = '!' }와 같은 할당으로 사용 가능 )
``` javascript
// defulatProps 작성 시, 오류!
Greetings.defaultProps = {
  mark: '!',
  optional: '[옵션 없음]'
}; // ( 작동 X... 위 예시에서 [mark = '!'] 작동 O )
```
<br>

## React.FC 없이, 작성하기
<br>

- 장점
defaultProps 사용 가능
- 단점
children 사용 시, 따로 타입 내에 선언 필요
```javascript
const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => { /* ...code */ }
// 또는
function Greetings({ name, mark, optional, onClick }: GreetingsProps) { /* ...code */ }
```
```javascript 
type GreetingsProps = {
    // ...props
    children?: React.ReactNode
};
function Greetings({ children }): GreetingsProps) { /* use children [OK!] */ }
```