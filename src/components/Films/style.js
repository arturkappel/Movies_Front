import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:223px;
    padding: 32px;
    margin-bottom:24px;

    background-color:${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius:16px;

    .movie{
        font-size: 24px;
        font-weight: 700;
        color:white;
    }

    >p{
        font-size:16px;
        line-height: 19px;
        text-align:justify;
        margin-top:15px;
        margin-bottom:15px;

        color:${({ theme }) => theme.COLORS.GRAY_300};
    }
    
    >svg{
        color:${({ theme }) => theme.COLORS.PINK};
        height:14px;
        width:14px;
        margin-top:12px;
    }
`