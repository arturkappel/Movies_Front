import styled from 'styled-components'

export const Container = styled.span`
    font-size:12px;
    padding:5px 16px;
    margin-right:6px;
    margin-top: 6px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    color: whitesmoke;
`