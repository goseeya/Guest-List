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
        <ul><li><a href="mailto: mrakowskaa@gmail.com ">kontakt</a></li></ul>
      </header>
      <div className ='guests'>  <div className='inside'><h1>Lista gości</h1></div></div><div className='main'>
            <h2><span id='create'>Stwórz swoją listę gości!</span></h2>
            <h3>Oblicz koszt imprezy!</h3>
            <p>
              <br />Aby dodać kolejną osobę, wpisz <span>imię i nazwisko</span> i kliknij przycisk <span>"Dodaj"</span>.<br></br><br></br>Aby usunąć osobę z listy, kliknij na przycisk <span>"Usuń"</span> w liście.
            </p>

            <ul>
              {this.state.tablica.map((el)=>{
                return <li key={el}>{el}  <button onClick={this.handleClick2}>Usuń</button>
                </li>
              })}
          </ul>
          <p style={{textAlign: 'left'}}><br></br>Imię i nazwisko: </p><input id='add' type='text' onChange={this.handleChange2} value={this.state.value2}></input>
          <button onClick={this.handleClick}>Dodaj</button><br></br>
          <p style={{textAlign: 'left'}}>Koszt w zł za osobę: </p><input id='pln' type='text' onChange={this.handleChange} value={this.state.value}></input>
          <p style={{textAlign: 'left'}}>Liczba osób: {this.state.tablica.length}<br></br>Koszt imprezy: {this.state.tablica.length * Number(this.state.value)} zł</p>
          </div>
          <div className='img'></div>
          <footer>&copy; Małgorzata Rakowska <a href="mailto: mrakowskaa@gmail.com "> mrakowskaa@gmail.com </a></footer>
          </div>
  }
  handleClick=()=>{
    let czyjestjuz = this.state.value2;
    let imieinazw = czyjestjuz;
    let tablicaCopy=this.state.tablica;
    if (tablicaCopy.indexOf(czyjestjuz) === -1){
      tablicaCopy.unshift(imieinazw)
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
