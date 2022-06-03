import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    
    grid-template-rows: 115px auto;
    grid-template-areas: 
    'header'
    'content';

`

export const Content = styled.div`
    grid-area:'content';
    width:1113px;
    margin: 0 auto;
    overflow-y: auto;
    padding-top: 40px;
    padding-left:24px;
    
    >div{
        display: flex;

        align-items:center;
        margin-top:24px;
        color:whitesmoke;
        font-weight:400;

        img{
            height:16px;

            border-radius:50%;
        }
        

        svg{
            color:${({ theme }) => theme.COLORS.PINK};
            height:20px;
            width:20px;
        }

        h1{
            margin-right:19px;
        }
    }

  
    >div:nth-child(3){
        
        margin-bottom:40px;
        font-size:16px;
        gap:8px;

        color:${({ theme }) => theme.COLORS.GRAY_300};

      
    }

    >p{
        
        color:${({ theme }) => theme.COLORS.GRAY_300};

        margin-top:40px;
        text-align:justify;
    }
    
`