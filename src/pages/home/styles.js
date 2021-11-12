import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Roboto';
`;

export const Container = styled.div`
    display: flex;
    flex-direction: col;
    width: 90%;
`;

export const Card = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    position: relative;
    width: 60%;
    height: 70vh;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
    width: 50%;
    font-family: 'Roboto';
    height: 30px;
    backgroud-color: #000000;
    margin-bottom: 15px;
    font-size: 20px;
    text-align: center;
    border-radius: 20px;

    ::placeholder{
        text-align: center;
    }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  min-height: 20px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  margin-bottom: 10px;

    &:hover {
         color: #fff;
         background-color: #1A1A1A;
         box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
         transform: translateY(-2px);
    }

    &:active {
        box-shadow: none;
        transform: translateY(0);   
    }
`;

export const A = styled.a`
    margin-top: 5px;
    margin-bottom: 10px;
`;