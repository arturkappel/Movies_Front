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
    width:1115px;
    margin: 0 auto;
    overflow-y: auto;
    padding-top: 40px;
    bottom:24px;
    padding-left:6px;

    >h1{
        font-size: 36px;
        color:whitesmoke;
        margin: 24px 0 40px 0;
    }

    >h3{
        font-size: 20px;
        color:${({ theme }) => theme.COLORS.GRAY_300};
        margin: 0 0 24px 0;
    }
`

export const InputArea = styled.div`
    width: 99%;
    display: flex;
    gap: 40px;
`

export const TextArea = styled.textarea`
    width: 99%;
    height:274px;
    font-size:16px;

    margin:40px 0;
    padding:19px 16px;

    border:none;
    border-radius:10px;

    background-color:${({ theme }) => theme.COLORS.GRAY_900};
    color:${({ theme }) => theme.COLORS.GRAY_300};
`
export const TagArea = styled.div`
    width: 99%;
    
    display: flex;
    gap:12px;
    flex-wrap:wrap;

    margin:24px 0 36px 0;
    padding: 16px;

    border:none;
    border-radius:8px;

    background-color:black;
    
`

export const ButtonArea = styled.div`
    width: 99%;
    display: flex;
    gap: 40px;

    margin-bottom: 50px;
`
export const ButtonDelete = styled.button`
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color:black;
   

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


    &:disabled{
        opacity:0.5;
    }

`