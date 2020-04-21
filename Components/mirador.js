import React, {Component} from 'react';
import { connect } from 'react-redux';

class  Mirador extends Component {
  state = { pogoda : []}
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Flores&appid='+/*Use own API key from openweathermap.org*/+'&mode=json&units=metric')
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
            <div className="Tri">
                <h1>El Mirador</h1>
                <div className="stats">
                Długość szlaku: <span className="wyn"> 100 km </span>
                 Szacowany czas przejścia: <span className="wyn"> 29 godzin </span>
                </div>
                <div className='stats'>Pogoda dzisiaj: <span className='wyn'> {this.state.pogoda + " C  "} </span></div>{button}
                    <div className='fl'>
                    <article>
                Szlak prowadzący do największej piramidy Majów znajdującej  się w środku dżungli w Gwatemali. Cała trasa przebiega w lesie deszczowym bez znaczących wzniesień. Podczas długiej drogi spotkać małpy i przy odrobinie szczęścia jaguary.
            </article>
                <div className='zdc'>
                <img src={require('./Images/gwa.jpg')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/gwa2.jpg')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/gwa3.jpg')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/gwa4.jpg')}alt='' height='100px' width='100px'></img>
                </div>
               </div>
              
               
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      ilo:state.ilo,
      pojaw:state.pojaw3
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dod: () => dispatch({type:'Add3'}),
      od: () => dispatch({type:'Substract3'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Mirador);