// Renderiza os botões de filtro e avisa o componente pai qual foi selecionado
function FiltroCategorias({ categorias, categoriaAtiva, aoSelecionar }) {
  return (
    <div className="filtros">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={`filtro-btn ${categoria === categoriaAtiva ? 'ativo' : ''}`}
          onClick={() => aoSelecionar(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategorias
