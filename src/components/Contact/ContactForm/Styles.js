import styled from "styled-components";

export default styled.div`
  form {
    display: table;
    margin: 40px auto;

    input,
    textarea {
      font: 18px "Nunito", sans-serif;
      box-sizing: border-box;
      display: block;
      border: none;
      padding: 20px;
      width: 500px;
      margin-bottom: 20px;
      outline: none;
      transition: all 0.3s ease-in-out;
      &:placeholder {
        transition: all 0.2s ease-in-out;
        color: #999;
        font: 18px "Nunito", sans-serif;
      }
      &:focus,
      &.populated {
        padding-top: 28px;
        padding-bottom: 12px;

        &:placeholder {
          color: transparent;
        }
      }
    }

    textarea {
      height: 300px;
    }

    button {
      transition: all 0.3s ease-in-out;
      font: 18px "Nunito", sans-serif;
      border: none;
      background: #cf5c36;
      color: #f4e3b2;
      padding: 20px;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 5px;
      &:hover {
        background: #f4e3b2;
        color: #cf5c36;
        cursor: pointer;
      }
    }
  }
`;
