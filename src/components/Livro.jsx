function Livro({ livro, marcarComoLido, selecionarLivro }) {
  return (
    <div className={`livro-card ${livro.lido ? "lido" : ""}`}>
      <h3>{livro.titulo}</h3>
      <p><strong>Autor:</strong> {livro.autor}</p>
      <p><strong>Categoria:</strong> {livro.categoria}</p>
      <p className="status">
        <strong>Status:</strong> {livro.lido ? "✅ Lido" : "📖 Quero Ler"}
      </p>
      <div className="livro-acoes">
        {!livro.lido && (
          <button className="btn btn-sucesso" onClick={() => marcarComoLido(livro.id)}>
            Marcar como Lido
          </button>
        )}
        <button className="btn btn-info" onClick={() => selecionarLivro(livro.id)}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default Livro;