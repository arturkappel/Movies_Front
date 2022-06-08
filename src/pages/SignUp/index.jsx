import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LetterButton } from '../../components/LetterButton'
import { Container, InputArea, Photo } from './style'
import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlineUser, AiFillLock, AiOutlineCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from 'react'

export function SignUp(){
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    function handleSignUp(){
        console.log(name, email, password)
    }

    return(
        <Container>
            <InputArea>
                <h1>
                    RocketMovies
                </h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                 placeholder="Nome"
                 type="text" 
                 icon={AiOutlineUser}
                 onChange={e => setName(e.target.value)}
                 />

                <Input 
                placeholder="E-mail" 
                type="email" 
                icon={AiOutlineMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha" 
                    type="text" 
                    icon={AiFillLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title={"Cadastrar"}
                    onClick = {handleSignUp}
                />

            </InputArea>
         {/*    <Link to='/'>
                < LetterButton title={'Voltar para o login'} image={ <AiOutlineArrowLeft /> }/>
            </Link> */}
            <Photo />
        </Container>
    )
}