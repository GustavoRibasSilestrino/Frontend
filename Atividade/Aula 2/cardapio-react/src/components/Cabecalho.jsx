// Componente de apresentação: recebe a quantidade de itens via props
function Cabecalho({ quantidadeItens }) {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="logo">
          <span>☕</span>
          <div>
            Café Aroma
            <small>Cardápio Digital · React</small>
          </div>
        </div>
        <div className="badge-carrinho">
          🛒 {quantidadeItens} {quantidadeItens === 1 ? 'item' : 'itens'}
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
