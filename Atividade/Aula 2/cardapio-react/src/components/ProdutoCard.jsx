import { formatarPreco } from '../utils/formatarPreco'

// Card reutilizável de produto
function ProdutoCard({ produto, aoAdicionar }) {
  return (
    <article className="card">
      <div className="card-emoji">{produto.emoji}</div>
      <span className="tag-categoria">{produto.categoria}</span>
      <h3>{produto.nome}</h3>
      <p className="card-descricao">{produto.descricao}</p>
      <div className="card-rodape">
        <span className="preco">{formatarPreco(produto.preco)}</span>
        <button className="btn-adicionar" onClick={() => aoAdicionar(produto)}>
          Adicionar
        </button>
      </div>
    </article>
  )
}

export default ProdutoCard
