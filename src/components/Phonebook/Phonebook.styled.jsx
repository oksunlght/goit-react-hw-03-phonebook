import styled from '@emotion/styled';

export const Container = styled.div`
  width: 700px;
  padding: 30px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 25px;

  color: #001133;
  font-size: 32px;
  font-weight: 700;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
`;

export const Input = styled.input`
  margin-top: 10px;

  width: 350px;

  padding: 8px 15px;

  color: #001133;
  font-size: 18px;

  border-radius: 5px;
  border: 2px solid #000;

  &:hover,
  &:focus {
    border: 2px solid #0077b3;
  }
`;

export const SubmitBtn = styled.button`
  margin-bottom: 30px;

  width: 125px;
  height: 35px;

  color: #001133;
  font-size: 16px;

  background-color: #cceeff;

  border-radius: 5px;

  box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -webkit-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -moz-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #0077b3;
  }
`;

export const ContactsTitle = styled.h2`
  margin-bottom: 25px;

  color: #001133;
  font-size: 32px;
  font-weight: 700;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  color: #001133;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 25px;

  width: 90px;
  height: 30px;

  color: #001133;
  font-size: 16px;

  background-color: #cceeff;

  border-radius: 5px;

  box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -webkit-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -moz-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #0077b3;
  }
`;
