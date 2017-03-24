import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';


class ListaGosci extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tablica: [],
      value: 0,
      value2: ''
    }
  }

  render(){
    return <div>
      <header>
        <img src="./logo.png" />
        <ul><li><a href="mailto: mrakowskaa@gmail.com ">contact</a></li></ul>
      </header>
      <div className ='guests'>  <div className='inside'><h1>Guest list</h1></div></div><div className='main'>
            <h2><span id='create'>Create your own guest list!</span></h2>
            <h3>Calculate the cost of the party!</h3>
            <p>
              <br />Enter the <span>first and last name</span> and click <span>"Add"</span>.<br></br><br></br>To remove a person click <span>"Delete"</span>.
            </p>

            <ul>
              {this.state.tablica.map((el)=>{
                return <li key={el}>{el}  <button onClick={this.handleClick2}>Delete</button>
                </li>
              })}
          </ul>
          <p style={{textAlign: 'left'}}><br></br>First name and last name: </p><input id='add' type='text' onChange={this.handleChange2} value={this.state.value2}></input>
          <button onClick={this.handleClick}>Add</button><br></br>
          <p style={{textAlign: 'left'}}>Cost per person ($): </p><input id='pln' type='text' onChange={this.handleChange} value={this.state.value}></input>
          <p style={{textAlign: 'left'}}>How many people: {this.state.tablica.length}<br></br>Total cost of the party: {this.state.tablica.length * Number(this.state.value)} $</p>
          </div>
          <div className='img'></div>
          <footer>&copy; Małgorzata Rakowska <a href="mailto: mrakowskaa@gmail.com "> mrakowskaa@gmail.com </a></footer>
          </div>
  }
  handleClick=()=>{
    let isIn = this.state.value2;
    let nameLast = isIn;
    let tablicaCopy=this.state.tablica;
    if (tablicaCopy.indexOf(isIn) === -1){
      tablicaCopy.unshift(nameLast)
    };
    this.setState({tablica: tablicaCopy, value2: ''});
  }
  handleClick2=(e,idx)=>{
    this.handleClick2.bind(this);
    let tablicaCopy=this.state.tablica;
    tablicaCopy.splice(idx,1);
    this.setState({tablica: tablicaCopy});
  }
  handleChange=(event)=>{
    this.setState({
      value: event.target.value
    })
  }
  handleChange2=(event)=>{
    this.setState({
      value2: event.target.value
    })
  }
}
class App extends React.Component{
  render(){
    return <ListaGosci/>
  }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
