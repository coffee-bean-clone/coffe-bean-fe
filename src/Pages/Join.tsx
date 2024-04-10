import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Join = () => {
  type Data = {
    email: string;
    confirmPassword: string;
    password: string;
    name: string;
    phoneNum: string;
    address: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Data>();

  const onSubmit = (data: Data) => console.log(data);

  const password = watch('password');

  return (
    <JoinContainer>
      <JoinForm>
        <h3>Join</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InfoInput>
            <Info>
              <Label htmlFor="email">이메일</Label>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일 형식으로 입력해주세요."
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="password">비밀번호</Label>
              <div>
                <Input
                  id="password"
                  type="password"
                  autoComplete="true"
                  placeholder="영문+숫자+특수문자 조합의 6~20자로 입력해주세요."
                  {...register('password', {
                    required: true,
                    pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/i,
                  })}
                />
                {errors.password && errors.password.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.password && errors.password.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <div>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                  {...register('confirmPassword', {
                    required: true,
                    validate: value => value === password,
                  })}
                />
                {errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                  <InputAlert>비밀번호가 일치하지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="name">이름</Label>
              <div>
                <Input
                  id="name"
                  type="text"
                  placeholder="공백 없이 한글 또는 영어로 입력해주세요."
                  {...register('name', {
                    required: true,
                    pattern: /^[a-zA-Z가-힣]+$/,
                  })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.name && errors.name.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="address">주소</Label>
              <div>
                <Input
                  id="address"
                  type="text"
                  placeholder="주소를 정확히 입력해주세요."
                  {...register('address', {
                    required: true,
                    pattern: /^[가-힣0-9- ]+$/,
                  })}
                />
                {errors.address && errors.address.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.address && errors.address.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="phoneNum">휴대전화번호</Label>
              <div>
                <Input
                  id="phoneNum"
                  type="text"
                  placeholder="000-0000-0000 형식으로 입력해주세요."
                  {...register('phoneNum', {
                    required: true,
                    pattern: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/,
                  })}
                />
                {errors.phoneNum && errors.phoneNum.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.phoneNum && errors.phoneNum.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
          </InfoInput>
          <JoinBtn type="submit">회원가입</JoinBtn>
        </Form>
      </JoinForm>
    </JoinContainer>
  );
};

const JoinContainer = styled.div`
  text-align: center;
`;

const JoinForm = styled.div`
  padding-top: 50px;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 450px;
  padding: 30px 0px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 20px;
  }

  @media only screen and (min-width: 768px) {
    width: 70%;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const Label = styled.label`
  text-align: left;
  width: 120px;

  @media only screen and (max-width: 767px) {
    width: 100px;
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 5px 0px;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

const InfoInput = styled.div`
  padding-bottom: 20px;
`;

const JoinBtn = styled.button`
  border: none;
  background-color: orange;
  padding: 10px;
  color: white;

  &:hover {
    background-color: darkorange;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

const InputAlert = styled.div`
  color: red;
  font-size: 12px;
  padding: 5px 0px;
  text-align: left;
`;

export default Join;
