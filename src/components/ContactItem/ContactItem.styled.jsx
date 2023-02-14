import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.8;
`;

export const Button = styled.button`
    margin-left: 20px;
    width: 80px;
    height: 20px;
    border: 2px solid darkgray;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;    

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: deepskyblue;
    }
`;