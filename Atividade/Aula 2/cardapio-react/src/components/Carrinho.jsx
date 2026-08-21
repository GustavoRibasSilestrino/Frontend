import { formatarPreco } from '../utils/formatarPreco'

// Mostra os itens escolhidos e o total do pedido
function Carrinho({ itens, aoRemover }) {
  const total = itens.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0,
  )

  return (
    <section className="carrinho">
      <h3>🧾 Seu pedido</h3>

      {itens.length === 0 ? (
        <p className="carrinho-vazio">
          Nenhum item adicionado ainda. Escolha algo saboroso no cardápio!
        </p>
      ) : (
        <>
          <ul className="carrinho-lista">
            {itens.map((item) => (
              <li key={item.produto.id} className="carrinho-item">
                <span>
                  {item.quantidade}x {item.produto.emoji} {item.produto.nome}
                </span>
                <span>
                  {formatarPreco(item.produto.preco * item.quantidade)}
                  <button
                    className="btn-remover"
                    onClick={() => aoRemover(item.produto.id)}
                    aria-label={`Remover ${item.produto.nome}`}
                  >
                    −
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <div className="carrinho-total">
            <span>Total</span>
            <span>{formatarPreco(total)}</span>
          </div>
        </>
      )}
    </section>
  )
}

export default Carrinho
