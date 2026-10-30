function DetalhesLivro({ livro, fecharDetalhes }) {
  if (!livro) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Detalhes do Livro</h2>
        <p><strong>Título:</strong> {livro.titulo}</p>
        <p><strong>Autor:</strong> {livro.autor}</p>
        <p><strong>Categoria:</strong> {livro.categoria}</p>
        <p><strong>Status:</strong> {livro.lido ? "Lido" : "Quero Ler"}</p>
        <button className="btn btn-fechar" onClick={fecharDetalhes}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default DetalhesLivro;