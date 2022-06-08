import styled from "styled-components"

export const Container = styled.div`
  

`
export const Header = styled.div`
    height:144px;
    background-color:${ ({ theme }) => theme.COLORS.BACKGROUND_PINK};
    display:flex;
    padding-left:64px;
    align-items: center;
    justify-content:flex-start;


`
export const Form = styled.form`
    grid-area:"content";
    display:flex;
    flex-direction:column;
    align-items:center;

    width: 340px;

    
    margin: 64px auto 0 ;
    >div{
        margin-bottom:8px;
    }
    >div:nth-child(2){
        margin-bottom: 24px;
    }
    
`
export const Avatar = styled.div`
    grid-area:"content";
    position: relative;

    margin: -80px auto 0;
    height: 186px;
    width: 186px;
    >img{
        height: 186px;
        margin-bottom:64px;
        border-radius:50%;
    }
    >label {
        height: 48px;
        width: 48px;

        border-radius: 50%;

        display:flex;
        align-items:center;
        justify-content:center;

        position:absolute;
        bottom:7px;
        right:7px;

        background-color:${ ({ theme }) => theme.COLORS.PINK};   

        cursor: pointer;
        input{
            display:none;
        }

        svg{
            height: 20px;
            width: 20px;

        }
    }
`