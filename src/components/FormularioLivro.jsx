function FormularioLivro({
  titulo,
  setTitulo,
  autor,
  setAutor,
  categoria,
  setCategoria,
  adicionarLivro
}) {
  return (
    <form className="formulario-livro" onSubmit={adicionarLivro}>
      <div className="form-grid">
        <div className="form-group">
          <label>Título *</label>
          <input
            type="text"
            placeholder="Ex: Dom Casmurro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Autor *</label>
          <input
            type="text"
            placeholder="Ex: Machado de Assis"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Categoria *</label>
          <input
            type="text"
            placeholder="Ex: Romance"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Cadastrar Livro
      </button>
    </form>
  );
}

export default FormularioLivro;