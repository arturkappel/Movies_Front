import styled from 'styled-components'

export const Container = styled.header`
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
    grid-area: header;

    display:flex;
    align-items: center;
    gap:64px;

    width: 100%;
    height: 115px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    padding: 0 123px;
    >h1{
        color:${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: 700;
        line-height:32px;
    }
    >div{
        display:flex;
        align-items: center;
        gap: 8px;
        
        
    }
    >div>div{
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        width:120px
        
    }
    >div>div>p{
        
        font-size: 14px;
        color:${({ theme }) => theme.COLORS.GRAY};
        
    }
    >div>div>span{
        color:white;
        font-weight: 500;
        font-size: 16px;
        
    }
    >div>img{
        height: 64px;
        width: 64px;
        border-radius: 50%
    }




`