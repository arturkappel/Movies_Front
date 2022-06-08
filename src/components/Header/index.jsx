import { Container } from "./style";
import { Input } from "../Input";

import { Link } from 'react-router-dom'

export function Header(){
    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título" />

            <div>
                <div>
                    <Link to='/profile'>
                        <button className="name"> Artur Kappel</button>
                    </Link>
                    <button>sair</button>

                </div>
                <img src="https://github.com/arturkappel.png" alt="" />
            </div>

        </Container>
    )
}