import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    font-size:16px;
    padding:16px;

    border-radius: 8px;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_500};
    color: whitesmoke;

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.GRAY_300 } `  : "none"};

    >button{ 
        border: none;
        background: none;
        >svg{
            width:24px;
            height:24px;
            color: ${({ theme }) => theme.COLORS.PINK};     
        }
    }
    >input{
        display:flex;
        padding:8px;
       
        max-width:129px;
        font-size:16px;

        color: whitesmoke;

        border: none;
        background: transparent;


    }
`