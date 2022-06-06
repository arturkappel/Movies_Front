import { Container, Content, InputArea, TextArea, TagArea, ButtonArea, ButtonDelete } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { AddTag } from "../../components/AddTag";
import { Button } from "../../components/Button";


import { LetterButton } from "../../components/LetterButton";
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle, AiOutlineCamera, AiOutlineArrowLeft } from 'react-icons/ai'

export function CreateMovie(){ 

    return(
        <Container>
            
            <Header />

            <Content>
                < LetterButton title={'Voltar'} image={ <AiOutlineArrowLeft /> }/>

                <h1> Novo Filme</h1>

                <InputArea>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </InputArea>

                <TextArea placeholder="Observações"/>

                <h3>Marcadores</h3>

                <TagArea>
                    <AddTag  title={"React"}/>
                    <AddTag isNew placeholder="Novo Marcador"/>
                   
                </TagArea>

                <ButtonArea>
                    <ButtonDelete type="button">
                        Excluir Filme
                    </ButtonDelete>
                    <Button title={'Salvar alterações'}/>
                </ButtonArea>
            </Content>

        </Container>
    )
}