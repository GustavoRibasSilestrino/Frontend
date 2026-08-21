import Cardapio from '../components/Cardapio'
import Rodape from '../components/Rodape'

// Server Component: renderizado no servidor, sem JavaScript enviado ao cliente
export default function Home() {
  return (
    <>
      <Cardapio />
      <Rodape />
    </>
  )
}
