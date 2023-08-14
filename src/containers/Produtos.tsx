import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetItensQuery } from '../services/api'

import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   adicionarAoCarrinho: (produto: ProdutoType) => void
//   favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () => {
  const { data: itens } = useGetItensQuery()

  return (
    <>
      <S.Produtos>
        {itens?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
