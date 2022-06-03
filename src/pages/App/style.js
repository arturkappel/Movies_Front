import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 100vh;
    display: grid;
    
    grid-template-rows: 115px auto;
    grid-template-areas: 
    'header'
    'content';

    >main{
        grid-area: content;
        overflow-y:auto;
    }
`
export const Content = styled.div`
   max-width: 1120px;
   margin: 0 auto;

   >div:first-child{
       display:grid;
       grid-template-columns: 920px auto;
      
       align-items:center;
       margin-bottom:35px;
       margin-top:47px;

       >h1{
        color:white;
        font-weight:400;
        font-size:32px;
        line-height:42px;
       }
    }
   
`