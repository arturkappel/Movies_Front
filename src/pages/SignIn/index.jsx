import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { LetterButton } from '../../components/LetterButton'
import { Container, InputArea, Photo } from './style'
import { AiOutlineMail, AiOutlineUser, AiFillLock, AiOutlineCamera, AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from 'react'

export function SignIn(){
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn(){
        console.log(user)
    }

    return(
        <Container>
            <InputArea>
                <h1>
                    RocketMovies
                </h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="email" icon={AiOutlineMail} onChange={e => setUser(e.target.value)}/>
                
                <Input placeholder="Senha" type="password" icon={AiFillLock}/>

                <Button title={'Salvar'} onClick={handleSignIn()}/>

                <Link to="/register">
                    < LetterButton title={'Criar conta'}  />     
                </Link>

            </InputArea>

            <Photo />
        </Container>
    )
}