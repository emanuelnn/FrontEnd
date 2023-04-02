import { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  function addTarefa(event) {
    event.preventDefault();

    if (titulo.length < 5) {
      alert("Título muito pequeno, insira mais caracteres.");
      return;
    }

    if (data === "") {
      alert("Defina a data da Tarefa.");
      return;
    }

    console.log(data);

    if (descricao.length < 10) {
      alert("Descrição não atende aos requisitos.");
      return;
    }

    if (id) {
      const copiaListaTarefas = [...listaTarefas];
      const index = copiaListaTarefas.findIndex((tarefa) => tarefa.id === id);

      copiaListaTarefas[index].titulo = titulo;
      copiaListaTarefas[index].data = data;
      copiaListaTarefas[index].descricao = descricao;
    } else {
      setListaTarefas([
        ...listaTarefas,
        {
          id: Date.now(),
          titulo: titulo,
          data: data.split("-").reverse().join("/"),
          descricao: descricao,
        },
      ]);
    }
    setId("");
    setTitulo("");
    setData("");
    setDescricao("");
  }

  
  function excluirTarefa(id) {
    if (window.confirm("Esta tarefa não poderá ser recuperada, deseja continuar?")) {
      const result = listaTarefas.filter((tarefa) => tarefa.id !== id);
      setListaTarefas(result);
    }
  }

  function editarDados(tarefa) {
    setId(tarefa.id);
    setTitulo(tarefa.titulo);
    setData(tarefa.data.split("-").reverse().join("/"));
    setDescricao(tarefa.descricao);
  }

  return (
    <div className="container">
      <div className="left">
        <form className="form" onSubmit={addTarefa}>
          <h4>Cadastrar Tarefa</h4>

          <input
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Título"
            className="titulo"
          />

          <input
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
            placeholder="Data"
            className="data"
          />

          <textarea
            name="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            className="descricao"
          ></textarea>

          <input
            className="salvar"
            type="submit"
            value={id ? "Salvar Mudanças" : "Nova Tarefa"}
          />
        </form>
      </div>

      <div className="right">
        <div className="bottom">
          <h1>Minhas Tarefas</h1>
          <h3 className="total">Tarefas: {listaTarefas.length} </h3>
        </div>

        {listaTarefas.length > 0 ? (
          <ul id="lista">
            {listaTarefas.map((tarefa) => (
              <li className="item" key={tarefa.id}>
                <h3 id="titulo">{tarefa.titulo}</h3>
                <p id="descricao">{tarefa.descricao}</p>
                <h3 id="data">{tarefa.data.split("-").reverse().join("/")}</h3>

                <img
                  id="excluir"
                  onClick={() => excluirTarefa(tarefa.id)}
                  src="https://cdn-icons-png.flaticon.com/512/669/669010.png"
                />

                <img
                  id="editar"
                  onClick={() => editarDados(tarefa)}
                  src="https://pt.seaicons.com/wp-content/uploads/2015/06/Edit-validated-icon.png"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="noTask">Sem Tarefas Cadastradas.</p>
        )}
      </div>
    </div>
  );
}

export default App;
