'use client'

import { useEffect, useMemo, useState } from 'react'
import Cabecalho from './Cabecalho'
import FiltroCategorias from './FiltroCategorias'
import ProdutoCard from './ProdutoCard'
import Carrinho from './Carrinho'
import { produtos, categorias } from '../data/produtos'

// Client Component: precisa de estado e eventos, por isso o "use client"
export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')
  const [itensCarrinho, setItensCarrinho] = useState([])

  const produtosFiltrados = useMemo(() => {
    if (categoriaAtiva === 'Todos') return produtos
    return produtos.filter((produto) => produto.categoria === categoriaAtiva)
  }, [categoriaAtiva])

  const quantidadeItens = itensCarrinho.reduce(
    (soma, item) => soma + item.quantidade,
    0,
  )

  useEffect(() => {
    document.title = quantidadeItens
      ? `Café Aroma (${quantidadeItens})`
      : 'Café Aroma · Cardápio Digital'
  }, [quantidadeItens])

  function adicionarProduto(produto) {
    setItensCarrinho((itens) => {
      const existente = itens.find((item) => item.produto.id === produto.id)
      if (existente) {
        return itens.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        )
      }
      return [...itens, { produto, quantidade: 1 }]
    })
  }

  function removerProduto(idProduto) {
    setItensCarrinho((itens) =>
      itens
        .map((item) =>
          item.produto.id === idProduto
            ? { ...item, quantidade: item.quantidade - 1 }
            : item,
        )
        .filter((item) => item.quantidade > 0),
    )
  }

  return (
    <>
      <Cabecalho quantidadeItens={quantidadeItens} />

      <main className="container">
        <section className="hero">
          <h2>Sabor que combina com o seu dia</h2>
          <p>
            Cafés especiais, salgados quentinhos e doces artesanais. Monte seu
            pedido escolhendo os itens abaixo.
          </p>
        </section>

        <FiltroCategorias
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          aoSelecionar={setCategoriaAtiva}
        />

        <Carrinho itens={itensCarrinho} aoRemover={removerProduto} />

        <div className="lista-produtos">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              aoAdicionar={adicionarProduto}
            />
          ))}
        </div>
      </main>
    </>
  )
}
