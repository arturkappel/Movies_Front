import { Tag } from "../Tag"
import { Container } from "./style"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"


export function Films(){
    return(
        <Container>
            <h1> Interstellar </h1>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se </p>

            <Tag title={'Ficção Científica'} />
            <Tag title={'Drama'} />
            <Tag title={'Família'} />
        </Container>
    )
}