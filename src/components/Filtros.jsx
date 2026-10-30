function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros">
      <button
        className={`btn-filtro ${filtro === "todos" ? "ativo" : ""}`}
        onClick={() => setFiltro("todos")}
      >
        Todos
      </button>
      <button
        className={`btn-filtro ${filtro === "lidos" ? "ativo" : ""}`}
        onClick={() => setFiltro("lidos")}
      >
        Lidos
      </button>
      <button
        className={`btn-filtro ${filtro === "quero-ler" ? "ativo" : ""}`}
        onClick={() => setFiltro("quero-ler")}
      >
        Quero Ler
      </button>
    </div>
  );
}

export default Filtros;