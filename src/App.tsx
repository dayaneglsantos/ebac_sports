import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // function adicionarAoCarrinho(produto: Produto) {
  //   if (carrinho.find((p) => p.id === produto.id)) {
  //     alert('Item já adicionado')
  //   } else {
  //     setCarrinho([...carrinho, produto])
  //   }
  // }

  // function favoritar(produto: Produto) {
  //   if (favoritos.find((p) => p.id === produto.id)) {
  //     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
  //     setFavoritos(favoritosSemProduto)
  //   } else {
  //     setFavoritos([...favoritos, produto])
  //   }
  // }

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div className="container">
          <Header />
          <Produtos />
        </div>
      </Provider>
    </>
  )
}

export default App
