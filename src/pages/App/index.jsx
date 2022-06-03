
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Films } from '../../components/Films'

import{ Container, Content } from './style'
import { AiOutlinePlus } from 'react-icons/ai'

function App() {
  return(
    <Container>
      
      <Header />

      <main>
        <Content> 
          <div>
            <h1>Meus filmes</h1>
            <Button title={'Adicionar filme'} image={ <AiOutlinePlus />} />
          </div>

          <Films />
       
          
        </Content>
      </main>

    </Container>
    
  )
}

export default App
