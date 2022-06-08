
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Films } from '../../components/Films'
import { Link } from 'react-router-dom'
import{ Container, Content } from './style'
import { AiOutlinePlus } from 'react-icons/ai'

export function Home() {
  return(
    <Container>
      
      <Header />

      <main>
        <Content> 
          <div>
            <h1>Meus filmes</h1>

            <Link to="/new">
              <Button title={'Adicionar filme'} image={ <AiOutlinePlus />} />
            </Link>
          </div>

          <Films />
       
          
        </Content>
      </main>

    </Container>
    
  )
}


