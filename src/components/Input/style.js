import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    align-items: center;

    background-color:${({ theme }) => theme.COLORS.GRAY_900};
    color:${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 10px;
    >svg{
        margin-left: 12px;
    }
    >input{
        height: 56px;
        width: 100%;
        font-size:16px;
        padding:8px 24px;

        color:${({ theme }) => theme.COLORS.GRAY_300};
        background:transparent;
        border: none;
        
        &::placeholder{
            color:${({ theme }) => theme.COLORS.GRAY_300};
        }

    }
    
`