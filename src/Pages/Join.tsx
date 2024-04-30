import { axiosInstance } from '../Hook/AxiosHook';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IsJoined } from '../Atom/IsJoined';
import { IsLogined } from '../Atom/IsLogined';
import { useSetAtom } from 'jotai';
import { UserInfo } from '../Atom/UserInfo';
import { UserDataType } from '../util/UserDataType';

declare global {
  interface Window {
    daum: any;
  }
}

interface IAddr {
  [x: string]: string;
  address: string;
  zonecode: string;
}

const Join = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserDataType>({ mode: 'onChange' });

  const setIsJoined = useSetAtom(IsJoined);
  const setIsLogined = useSetAtom(IsLogined);
  const setUserInfo = useSetAtom(UserInfo);

  const password = watch('password');
  const addressRef = watch('address');
  const zipCode = watch('zipCode');

  const onSubmit = async (data: UserDataType) => {
    try {
      const joinResult = await axiosInstance.post(`/users/join`, data);
      if (joinResult.status === 200) {
        navigate('/');
        setIsJoined(true);
        setIsLogined(true);
        setUserInfo(joinResult.data);
      }
    } catch (error) {
      alert('회원가입에 실패했어요.');
      reset();
    }
  };

  function handleAddressInput(data: IAddr) {
    let addr = '';
    if (data.userSelectedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }
    (document.getElementById('sample6_postcode') as HTMLInputElement).value = data.zonecode;
    (document.getElementById('address') as HTMLInputElement).value = addr;
    document.getElementById('sample6_detailAddress')?.focus();

    const detailAddress = (document.getElementById('sample6_detailAddress') as HTMLInputElement)
      .value;

    const zipCode = (document.getElementById('sample6_postcode') as HTMLInputElement).value;

    setValue('address', addr);
    setValue('detailAddress', detailAddress);
    setValue('zipCode', zipCode);
  }

  const sample6_execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: handleAddressInput,
    }).open();
  };

  return (
    <JoinContainer>
      <JoinForm>
        <h3>Join</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InfoInput>
            <Info>
              <Label htmlFor="email">이메일</Label>
              <div>
                <Email>
                  <EmailInput
                    id="email"
                    type="email"
                    placeholder="이메일 형식으로 입력해주세요."
                    {...register('email', {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <EmailConfirmBtn>확인</EmailConfirmBtn>
                </Email>

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
              <Label htmlFor="phoneNumber">휴대전화번호</Label>
              <div>
                <PhoneNumber>
                  <PhoneNumberInput
                    id="phoneNumber"
                    type="text"
                    placeholder="000-0000-0000 형식으로 입력해주세요."
                    {...register('phoneNumber', {
                      required: true,
                      pattern: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/,
                    })}
                  />
                  <PhoneNumberConfirmBtn>확인</PhoneNumberConfirmBtn>
                </PhoneNumber>
                {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                {errors.phoneNumber && errors.phoneNumber.type === 'pattern' && (
                  <InputAlert>형식이 올바르지 않습니다.</InputAlert>
                )}
              </div>
            </Info>
            <Info>
              <Label htmlFor="address">주소</Label>
              <AddressInfo>
                <Input
                  type="text"
                  id="address"
                  placeholder="주소"
                  {...register('address', {
                    required: true,
                  })}
                />
                {errors.address && errors.address.type === 'required' && !addressRef && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                <div />
                <AddressInput
                  type="text"
                  id="sample6_detailAddress"
                  placeholder="상세주소"
                  {...register('detailAddress')}
                />
                <AddressInput
                  type="text"
                  id="sample6_postcode"
                  placeholder="우편번호"
                  {...register('zipCode', {
                    required: true,
                  })}
                />
                {errors.zipCode && errors.zipCode.type === 'required' && !zipCode && (
                  <InputAlert>이 칸을 입력해주세요.</InputAlert>
                )}
                <AddressBtn type="button" onClick={sample6_execDaumPostcode} value="우편번호 찾기">
                  우편번호 찾기
                </AddressBtn>
              </AddressInfo>
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

const Email = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 300px;
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

const EmailInput = styled(Input)`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

const EmailConfirmBtn = styled.button`
  border: none;
  background-color: orange;
  padding: 0px 10px;
  color: white;
  width: 100px;

  &:hover {
    background-color: darkorange;
  }
`;

const PhoneNumber = styled(Email)``;

const PhoneNumberInput = styled(EmailInput)``;

const PhoneNumberConfirmBtn = styled(EmailConfirmBtn)``;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressInput = styled(Input)``;

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

const AddressBtn = styled(JoinBtn)`
  margin: 10px 0px;
`;

const InputAlert = styled.div`
  color: red;
  font-size: 12px;
  padding: 5px 0px;
  text-align: left;
`;

export default Join;
