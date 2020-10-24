import styled from 'styled-components';

const FormStyles = styled.form`
  width: 75%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .label-pair {
    width: 100%;
    label {
    }
  }
  input {
    width: 100%;
    background-color: ${(props) => props.theme.offwhite};
    outline: none !important;
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.lavender};
    &:focus {
      outline: none !important;
      border: 2px solid ${(props) => props.theme.teal};
    }
  }
  textarea {
    width: 100%;
    height: 15rem;
    background-color: ${(props) => props.theme.offwhite};
    border: 1px solid ${(props) => props.theme.lavender};
    border-radius: 2px;
    &:focus {
      outline: none !important;
      border: 2px solid ${(props) => props.theme.teal};
    }
  }
`;

export default FormStyles;