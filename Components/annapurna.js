import React, {Component} from 'react';
import { connect } from 'react-redux';
import './pier.css'

class  Annapurna extends Component {
   
state = {
  pogo : []
}
  componentDidMount() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Pokhara&appid='+/*Use own API key from openweathermap.org*/+'&mode=json&units=metric')
.then(res => res.json())
.then(data => this.setState({pogo: data.main.temp}))
}


    render() { 
        
     
        let button
        if (this.props.pojaw){
            button = <button onClick={this.props.dod}>Dodaj</button>
        }
        else {
            button = <button onClick={this.props.od}>Odejmij</button>
        }
        return ( 
            <div className="pier">
                <h1>Annapurna Circuit</h1>
                <div className="stats">Długość szlaku: <span className='wyn'> 250 km </span>
                 Szacowany czas przejścia: <span className='wyn'> 72 godzin</span>
                </div>
                <div className='stats'>Pogoda dzisiaj: <span className='wyn'> {this.state.pogo + " C  "} </span> </div>
                {button}
        
               
              <div className="fl">
              <article>

Himalaje to najwyższy łańcuch górski świata. Szlak wokół Annapurny pozwala na
zobaczenie wielu stref klimatycznych, zapoznanie się z tybetańską kulturą, podziwianie najwyższych gór świata
Najwyższy punkt na trasie to przełęcz Thorong La na wysokości 5400 m.n.p.m.

</article>
               <div className="zdc">
               <img src={require('./Images/him.JPG')} alt='' height='100px' width='100px'></img>
              <img src={require('./Images/him2.JPG')} alt='' height='100px' width='100px'></img>
              <img src={require('./Images/him4.JPG')} alt='' height='100px' width='100px'></img>
              <img src={require('./Images/him5.JPG')} alt='' height='100px' width='100px'></img>
              <img src={require('./Images/him6.JPG')} alt='' height='100px' width='100px'></img>
               </div>
               
                </div>
                
               
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      pogoda:state.pogoda,
      age:state.age,
      pojaw:state.pojaw
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dod: () => dispatch({type:'Add'}),
      od: () => dispatch({type:'Substract'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Annapurna);