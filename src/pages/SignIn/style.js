import styled from "styled-components";
import bgImg from '../../assets/bg.png'

export const Container = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns: 637px auto;
    grid-template-areas: 'content' 'photo';
`

export const InputArea = styled.form`
    grid-area: 'content';

    display:flex;
    flex-direction:column;
   

    width:100%;
    height:100vh;

    padding: 0px 163px 0 134px;

    

    >div{
        margin-bottom:8px;
    }

    >h1{
        font-size: 48px;
        line-height: 63px;
        color:${({ theme })=> theme.COLORS.PINK}
    }

    >p{
        font-size: 14px;
        line-height: 18px;
        color:${({ theme })=> theme.COLORS.GRAY_300};

        margin-bottom: 48px;
    }

    >h2{
        font-size: 24px;
        font-weight: 500;
        line-height: 31px;
        color:white;

        margin-bottom: 48px;
    }

    >button:last-child{
        margin-top:42px;
    }


`
export const Photo = styled.div`
    grid-area:'photo';
    
    width:100%;
    height:100vh;

    background:url(${bgImg}) no-repeat center center;
    background-size:cover;
`