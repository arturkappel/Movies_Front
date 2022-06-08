import { Container } from "./style";

export function Button({ title, image }){
    return(
        <Container type="button">
            { image } 
            { title }
        </Container>
    )
}