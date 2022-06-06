import { Container } from "./style";
import { Input } from "../Input";

export function Header(){
    return(
        <Container >
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título" />

            <div>
                <div>
                    <button> Artur Kappel</button>
                    <button>sair</button>

                </div>
                <img src="https://github.com/arturkappel.png" alt="" />
            </div>

        </Container>
    )
}