import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header.jsx";
import FormularioLivro from "./components/FormularioLivro.jsx";
import Filtros from "./components/Filtros.jsx";
import ListaLivros from "./components/ListaLivros.jsx";
 import DetalhesLivro from "./components/DetalhesLivro.jsx";
import "./App.css";

const CHAVE_LIVROS = "projeto-livros-toastify-v2";

const LIVROS_PADRAO = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance", lido: true },
  { id: 2, titulo: "1984", autor: "George Orwell", categoria: "Ficção Científica", lido: false },
  { id: 3, titulo: "O Hobbit", autor: "J.R.R. Tolkien", categoria: "Fantasia", lido: true },
  { id: 4, titulo: "Sapiens", autor: "Yuval Noah Harari", categoria: "História", lido: false },
  { id: 5, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Infantil", lido: true }
];

function carregarLivros() {
  const livrosSalvos = localStorage.getItem(CHAVE_LIVROS);
  if (!livrosSalvos) return LIVROS_PADRAO;
  try {
    const dadosConvertidos = JSON.parse(livrosSalvos);
    return Array.isArray(dadosConvertidos) ? dadosConvertidos : LIVROS_PADRAO;
  } catch (erro) {
    return LIVROS_PADRAO;
  }
}

function App() {
  const [livros, setLivros] = useState(carregarLivros);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  useEffect(() => {
    localStorage.setItem(CHAVE_LIVROS, JSON.stringify(livros));
  }, [livros]);

  function adicionarLivro(event) {
    event.preventDefault();

    if (!titulo.trim() || !autor.trim() || !categoria.trim()) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const novoLivro = {
      id: Date.now(),
      titulo: titulo.trim(),
      autor: autor.trim(),
      categoria: categoria.trim(),
      lido: false
    };

    setLivros([...livros, novoLivro]);
    setTitulo("");
    setAutor("");
    setCategoria("");

    toast.success("Livro adicionado com sucesso!");
  }

  function selecionarLivro(id) {
    setLivroSelecionado(id);
  }

  function fecharDetalhes() {
    setLivroSelecionado(null);
  }

  function marcarComoLido(id) {
    const livrosAtualizados = livros.map((livro) => {
      if (livro.id === id) return { ...livro, lido: true };
      return livro;
    });
    setLivros(livrosAtualizados);
    toast.success("Livro marcado como lido!");
  }

  const livrosFiltrados = livros.filter((livro) => {
    if (filtro === "lidos") return livro.lido;
    if (filtro === "quero-ler") return !livro.lido;
    return true;
  });

  const livroEncontrado = livros.find((livro) => livro.id === livroSelecionado);

  return (
    <main className="app">
      <ToastContainer position="top-right" autoClose={2500} theme="dark" />
      <Header />

      <div className="Container">
        <FormularioLivro
          titulo={titulo}
          setTitulo={setTitulo}
          autor={autor}
          setAutor={setAutor}
          categoria={categoria}
          setCategoria={setCategoria}
          adicionarLivro={adicionarLivro}
        />

        <Filtros filtro={filtro} setFiltro={setFiltro} />

        <ListaLivros
          livros={livrosFiltrados}
          marcarComoLido={marcarComoLido}
          selecionarLivro={selecionarLivro}
        />

        {livroEncontrado && (
          <DetalhesLivro
            livro={livroEncontrado}
            fecharDetalhes={fecharDetalhes}
          />
        )}
      </div>
    </main>
  );
}

export default App;
