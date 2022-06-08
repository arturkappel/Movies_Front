import { Container } from "./style";

export function LetterButton({ title, image, ...rest }){
    return(
    <Container type="button"  {...rest}>
        { image } 
        { title }
    </Container>
    )
}