import styled from "styled-components"

export const Container = styled.button`
    border: none;
    
    display:flex; 
    align-items: center;
    justify-content:center;
    gap: 8px;
    background:transparent;

    font-size:16px;
    line-height:22px;

    color: ${({ theme }) => theme.COLORS.PINK}


`