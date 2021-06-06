
function App() {
    return (
      // <CheckList items={["Item 1", "Item 2", "Item 3"]} />
      <TaskList />
    );
  }
  
  // Cria um Componente TaskList que:
  
  // deve ser possível adicionar elementos à lista
  // deve ser possível remover elementos da lista
  // BUG: perda de foco quando é alterado o valor
  
  class Task {
    #concluida
    #descricao
    constructor(descricao, concluida) {
      this.#descricao = descricao;
      this.#concluida = concluida;
    }
    get concluida() { return this.#concluida }
    get descricao() { return this.#descricao }
  
    changeConcluida(concluida) {
      return new Task(this.descricao, concluida);
    }
  
    changeDescricao(descricao) {
      return new Task(descricao, this.concluida);
    }
  }
  
  class TaskList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [new Task("Tarefa 1", false), new Task("Tarefa 2", false)]
      }
    }
  
    handleCheckboxChange(event, task) {
      this.setState((state) => ({
        tasks: state.tasks.map(t =>
          task === t
            ? task.changeConcluida(event.target.checked)
            : t)
      }))
    }
    handleTextChange(event, task) {
      this.setState((state) => ({
        tasks: state.tasks.map(t =>
          task === t
            ? task.changeDescricao(event.target.value)
            : t)
      }))
    }
  
    render() {
      return (
        <div>
          <ul>
            {this.state.tasks.map(task => (
              <li
                className={task.concluida ? "concluido" : ""}
                key={task.descricao}>
                <input
                  type="checkbox"
                  checked={task.concluida}
                  onChange={(event) => this.handleCheckboxChange(event, task)} />
                {
                  !task.concluida
                  ? <input
                    type="text"
                    value={task.descricao}
                    onChange={(event) => this.handleTextChange(event, task)} />
                  : task.descricao
                }
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
  