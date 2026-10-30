import Livro from "./Livro.jsx";

function ListaLivros({ livros, marcarComoLido, selecionarLivro }) {
  if (livros.length === 0) {
    return <p className="sem-livros">Nenhum livro encontrado para o filtro.</p>;
  }

  return (
    <div className="lista-livros">
      {livros.map((livro) => (
        <Livro
          key={livro.id}
          livro={livro}
          marcarComoLido={marcarComoLido}
          selecionarLivro={selecionarLivro}
        />
      ))}
    </div>
  );
}

export default ListaLivros;