import { Container } from "./style";

export function LetterButton({ title, image }){
    return(
    <Container type="button">
        { image } 
        { title }
    </Container>
    )
}