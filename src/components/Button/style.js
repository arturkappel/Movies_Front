import styled from "styled-components"

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color:${({ theme }) => theme.COLORS.GRAY_500};
   

    width: 100%;
    height: 56px;

    border: 0;
    border-radius:10px;

    padding: 0 16px;
    margin-top: 16px;

    font-weight:500;
    font-size: 16px;

    display:flex;
    align-items:center;
    justify-content:center;
    gap: 8px;

   
    


    >svg{
        height:16px;
    }

    &:disabled{
        opacity:0.1;
    } 

`