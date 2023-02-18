import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  margin-left: 20px;
  width: 80px;
  height: 24px;
  border: 2px solid darkgray;
  border-radius: 4px;
  cursor: pointer;
  /* background-color: rgb(204, 235, 204); */
  font-weight: bold;    

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      color: white;
      background-color: green;
      border: 2px solid transparent;
  }
`;