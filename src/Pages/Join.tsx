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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InfoInput>
        <Info>
          <Label htmlFor="email">이메일</Label>
          <div>
            <Input
              id="email"
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
      <button type="submit">회원가입</button>
    </Form>
  );
};

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 30px 0px;
`;

const Label = styled.label`
  text-align: left;
  width: 200px;
`;

const Info = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  width: 300px;
  background-color: lightgray;
  border: none;
  padding: 5px;
`;

const InfoInput = styled.div``;

const InputAlert = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
`;

export default Join;
