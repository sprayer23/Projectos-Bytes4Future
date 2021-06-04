function App() {
    return (
      <CheckList items={["Item 1", "Item 2", "Item 3"]} />
    );
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
          return {concluidas: state.concluidas.filter(e => e !== item)}
        }
        return {concluidas: state.concluidas.concat(item)}
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
  