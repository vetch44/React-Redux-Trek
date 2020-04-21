import React, {Component} from 'react';
import { connect } from 'react-redux';

class  Inca extends Component {
  state = { pogoda : []}
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Pisac&appid='+/*Use own API key from openweathermap.org*/+'&mode=json&units=metric')
  .then(res => res.json())
  .then(data => this.setState({pogoda: data.main.temp}))
  }  
  render() { 
        let przycisk
        if (this.props.pojaw){
            przycisk = <button onClick={this.props.dod}>Dodaj</button>
        }
        else {
            przycisk = <button onClick={this.props.od}>Odejmij</button>}
        return ( 
            <div className="Dwa">
               
                <h1>Inca trail</h1>
                <div className="stats">
                Długość szlaku: <span className="wyn"> 50 km </span>
                 Szacowany czas przejścia: <span className="wyn"> 15 godzin </span>
                </div>
                <div className='stats'>Pogoda dzisiaj: <span className='wyn'> {this.state.pogoda + " C  "} </span></div>   {przycisk}
                <div className='fl'>
                <article>
                Szlak prowadzący stara drogą Inków. Po drodze można podziwiać ruiny starożytnej cywilizacji.
                Jeden ze szlaków znajduje się w Ekwadorze, drugi w Peru i prowadzi do słynnego Machu Picchu. Wysokość maksymalna
                to 4500 m.n.p.m i schodzi powoli aby zakończyć w dżungli.
                </article>
                <div className='zdc'>
              <img src={require('./Images/per.JPG')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/per2.JPG')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/per3.JPG')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/ekw.jpg')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/ekw2.jpg')}alt='' height='100px' width='100px'></img>
                </div>
               
               </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      pojaw:state.pojaw2
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dod: () => dispatch({type:'Add2'}),
      od: () => dispatch({type:'Substract2'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Inca);