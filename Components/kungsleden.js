import React, {Component} from 'react';
import { connect } from 'react-redux';

class  Kungsleden extends Component {
    
  state = { pogoda : []}
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Jokkmokk&appid='+/*Use own API key from openweathermap.org*/+'&mode=json&units=metric')
  .then(res => res.json())
  .then(data => this.setState({pogoda: data.main.temp}))
  }
  
  render() { 
    
    
        let button
        if (this.props.pojaw){
            button = <button onClick={this.props.dod}>Dodaj</button>
        }
        else {
            button = <button onClick={this.props.od}>Odejmij</button>}
        return ( 
            <div className="Czwar">
                <h1>Kongsleden</h1>
                <div className="stats">
                Długość szlaku: <span className="wyn"> 30 km </span>
                 Szacowany czas przejścia: <span className="wyn"> 9 godzin </span>
                </div>
               <div className='stats'>Pogoda dzisiaj: <span className='wyn'> {this.state.pogoda + " C  "} </span> </div> {button}
                <div className='fl'> 
                <article>
                Szlak znajduje się w Górach Skandynawskich w pobliżu granicy z Norwegią. Trasa przebiega przez tajgę  gdzie można spotkać renifery przez większość czasu. Po drodze można podziwiac piękne i czyste jeziora. Widok z góry jest niesamowity.
              
                </article>
                <div className='zdc'>
                <img src={require('./Images/skan.jpg')}alt='' height='100px' width='100px'></img>
                <img src={require('./Images/skan2.jpg')}alt='' height='100px' width='100px'></img>
                <img src={require('./Images/skan3.jpg')}alt='' height='100px' width='100px'></img>
                </div>
                
               
               </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      pojaw:state.pojaw4
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dod: () => dispatch({type:'Add4'}),
      od: () => dispatch({type:'Substract4'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Kungsleden);