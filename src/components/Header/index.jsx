import { Container } from "./style";
import { Input } from "../Input";

export function Header(){
    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título" />

            <div>
                <div>
                    <span> Artur Kappel</span>
                    <p>sair</p>

                </div>
                <img src="https://github.com/arturkappel.png" alt="" />
            </div>

        </Container>
    )
}