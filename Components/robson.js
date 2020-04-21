import React, {Component} from 'react';
import { connect } from 'react-redux';

class  Robson extends Component {
  state = { pogoda : []}
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Prince George&appid='+/*Use own API key from openweathermap.org*/+'&mode=json&units=metric')
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
            <div className="Pia">
                <h1>Mount Robson</h1>
                <div className="stats">
                Długość szlaku: <span className="wyn"> 42 km </span>
                 Szacowany czas przejścia: <span className="wyn"> 12 godzin</span>
                </div>
                <div className='stats'>Pogoda dzisiaj: <span className='wyn'> {this.state.pogoda + " C  "} </span></div>   {button}
                    <div className='fl'>
                    <article>
                Szlak w kanadyjskich Górach Skalistych, w okolicy parku narodowego Jasper po stronie Kolumbii Brytyjskiej. Trasa prowadzi do jeziora 
                w pobliżu lodowca Mt Robson, najwyższego szczytu kanadyjskich Gór Skalistych. Po drodze spotkać można świstaki, niedźwiedzie i przy odrobinie szczęścia pumę. </article>
                <div className='zdc'>
              <img src={require('./Images/kan.JPG')}alt='' height="100px" width='100px'></img>
              <img src={require('./Images/kan2.JPG')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/kan3.JPG')}alt='' height='100px' width='100px'></img>
              <img src={require('./Images/kan4.JPG')}alt='' height='100px' width='100px'></img>
                </div>
                
               </div>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      pojaw:state.pojaw5
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dod: () => dispatch({type:'Add5'}),
      od: () => dispatch({type:'Substract5'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Robson);