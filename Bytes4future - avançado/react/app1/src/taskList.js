import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Formik, Field, FieldArray } from 'formik'
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    // <CheckList items={["Item 1", "Item 2", "Item 3"]} />
    <TaskList />
  );
}

// Cria um Componente TaskList que:

// deve ser possível remover elementos da lista

class Task {
  #concluida
  #descricao
  #id
  constructor(descricao, concluida, id) {
    this.#descricao = descricao;
    this.#concluida = concluida;
    if (!id) {
      this.#id = uuidv4();
    } else {
      this.#id = id;
    }
  }
  get concluida() { return this.#concluida }
  get descricao() { return this.#descricao }
  get id() { return this.#id }

  changeConcluida(concluida) {
    return new Task(this.descricao, concluida, this.id);
  }

  changeDescricao(descricao) {
    return new Task(descricao, this.concluida, this.id);
  }
}

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [new Task("Tarefa 1", false), new Task("Tarefa 2", false)],
      newTask: ""
    }

    this.adicionar = this.adicionar.bind(this)
    this.handleNewTaskChange = this.handleNewTaskChange.bind(this)
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

  adicionar() {
    this.setState((state) => {
      const novaTarefa = new Task(state.newTask, false);

      return {
        tasks: state.tasks.concat(novaTarefa),
        newTask: ""
      }
    })  
  }

  handleNewTaskChange(event) {
    const {value} = event.target;
    this.setState({
      newTask: value
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task) => (
            <li
              className={task.concluida ? "concluido" : ""}
              key={task.id}>
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
        <input 
          type="text"
          value={this.state.newTask}
          onChange={this.handleNewTaskChange}
          />
        <button onClick={this.adicionar}>Adicionar</button>
      </div>
    )
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event)
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : (target.type === 'number'
        ? target.valueAsNumber
        : target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form onSubmit={(e) => {
        console.log(this.state)
        e.preventDefault()
      }}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <button type="submit">Submeter</button>
      </form>
    );
  }
}

export const FriendList = () => (
  <div>
    <h1>Friend List</h1>
    <Formik
      initialValues={{ friends: ['jared', 'ian', 'brent'] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray
            name="friends"
            render={arrayHelpers => (
              <div>
                { values.friends && values.friends.length > 0
                  ? values.friends.map((friend, index) => (
                    <div key={index}>
                      <Field name={`friends.${index}`} />
                      <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                      <button type="button" onClick={() => arrayHelpers.insert(index, '')}>+</button>
                      {friend}
                    </div>
                  ))
                  : (<button type="button" onClick={() => arrayHelpers.push('')}> Add a friend </button>)}
                <div><button type="submit">Submit</button></div>
              </div>
            )}
          />
        </form>
      )}
    />
  </div>
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(this.state, event.target.value)
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Foi submetido um nome: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submeter" />
      </form>
    );
  }
}

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concluidas: []
    }
  }

  marca(item) {
    this.setState((state) => {
      if (state.concluidas.includes(item)) {
        return { concluidas: state.concluidas.filter(e => e !== item) }
      }
      return { concluidas: state.concluidas.concat(item) }
    })
  }

  render() {
    return (
      <div>
        <h2>CheckList</h2>
        <ul>
          {
            this.props.items.map(item => (
              <li key={item}
                className={
                  this.state.concluidas.includes(item)
                    ? 'concluido'
                    : ''
                }
                onClick={() => this.marca(item)}>
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function Titulo({ children }) {
  return <h1>{children}</h1>
}
function TituloEmTexto({ texto }) {
  return <h1>{texto}</h1>
}

function UserAvatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} />
}

const Welcome = ({ name, age }) => {
  return (
    <p>
      {name} {age}
    </p>
  )
}

class Contadores extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ visible: false })
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  render() {
    return <div>
      {this.state.visible && <Contador />}
      <Contador />
    </div>
  }
}

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      direcao: 1,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.incrementa, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  incrementa = () => {
    this.setState(state => ({ contador: state.contador + state.direcao }))
    this.setState(state => {
      if (state.contador >= 10) {
        return { direcao: -1 }
      } else if (state.contador <= 0) {
        return { direcao: 1 }
      }
    })
    // this.setState(({contador}) => ({contador: contador + 1}))

    // const {contador} = this.state
    // this.setState({contador: contador + 1})
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        {/* <button onClick={this.incrementa}>Incrementar</button> */}
      </div>
    )
  }
}

export default App;
