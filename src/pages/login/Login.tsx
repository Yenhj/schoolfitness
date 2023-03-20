import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button, InputWrap } from 'styles/LayoutCss';
import { useForm } from 'react-hook-form';
interface ISignIn {
  ID: string;
  pw: string;
}
const Login = () => {
  const { register, handleSubmit, setError } = useForm<ISignIn>();
  const navigate = useNavigate();
  const onSubmit = (data: ISignIn) => {
    console.log(data);
  };
  return (
    <LoginCss>
      <img src='/images/logo.png' alt='logo' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          <FaUser />
          <input {...register('ID')} type='text' placeholder='아이디' />
        </InputWrap>
        <InputWrap>
          <FaLock />
          <input {...register('pw')} type='password' placeholder='비밀번호' />
        </InputWrap>
        <Button>LOGIN</Button>
      </form>
      <p>
        아직 회원이 아니신가요?
        <span onClick={() => navigate('/signup')}> 회원가입하기</span>
      </p>
    </LoginCss>
  );
};
const LoginCss = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    margin: 100px 0;
  }
  p {
    font-size: 13px;
    color: #acacac;
    span {
      font-weight: bold;
      color: #ff8339;
      cursor: pointer;
    }
  }
`;
export default Login;
