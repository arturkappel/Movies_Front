import { Container, Header, Form, Avatar } from "./style"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LetterButton } from "../../components/LetterButton"
import { Link } from "react-router-dom"
import { AiOutlineMail, AiOutlineUser, AiFillLock, AiOutlineCamera, AiOutlineArrowLeft } from 'react-icons/ai'

export function Profile(){
    return(
        <Container>
           <Header>
           
           <Link to='/'>
               < LetterButton title={'Voltar'} image={ <AiOutlineArrowLeft /> }/>
            </Link>
           

           </Header>
          
      
           <Avatar >
            
                <img src="https://github.com/arturkappel.png" alt="foto usuário" />

                <label htmlFor="avatar">
                    <AiOutlineCamera />
                    <input id='avatar' type="file" />
                </label>
           </Avatar>
           <Form>
               
                <Input placeholder="User" type="text" icon={AiOutlineUser}/>
                <Input placeholder="E-mail" type="email" icon={AiOutlineMail}/>
                <Input placeholder="Senha atual" type="password" icon={AiFillLock}/>
                <Input placeholder="Nova senha" type="password" icon={AiFillLock}/>
                <Button title={'Salvar'}/>
           </Form>     


        </Container>

    )
} 