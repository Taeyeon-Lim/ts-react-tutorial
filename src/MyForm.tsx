import React, { useState } from 'react';

// type Params = {
//     name: string;
//     description: string;
// }

// onSubmit: (form: Parmas) 동일
type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  // useState 위에 커서를 올리면, 타입이 자동 유추된다는 것을 알 수 있음.
  const [form, setForm] = useState({ name: '', description: '' });
  const { name, description } = form;

  // e가 뭔지 구글에 검색할 필요 없음...아래 input태그의 onChange에 마우스 커서를 올리면 알 수 있다!
  // onChange?: React.ChangeEventHandler<HTMInputElement> 라고 뜬 부분을 '이벤트 객체e'의 타입으로 지정!
  //   const onChange = (e: any) => {
  //       // 이벤트 객체가 자동 완성이 안됨
  //       // e.?
  //   };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange} />
      <input
        name='description'
        value={description}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
}

export default MyForm;
