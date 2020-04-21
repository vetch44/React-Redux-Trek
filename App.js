import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Annapurna from './Components/annapurna'
import Inca from './Components/inca'
import Mirador from './Components/mirador'
import Kungsleden from './Components/kungsleden'
import Robson from './Components/robson'
import Total from './Components/total'

class App extends Component {
 
   render()
   {
     let content;
     if(this.props.pie===true){
      content = <Annapurna/>
     }
     if(this.props.dru===true){
       content = <Inca/>
     }
     if(this.props.trze===true){
      content = <Mirador/>
    }
    if(this.props.czwar===true){
      content = <Kungsleden/>
    }
    if(this.props.pia===true){
      content = <Robson/>
    }
    
    
      return (
        <div className = "App">
            
            <header className = "App-header">
      <div>
        <h2>Porównaj interesujące szlaki</h2>
        </div>
      </header>
      <div className="ap">
      <ul>
<li onClick={this.props.Anna}>Annapurna Circuit</li>
<li onClick={this.props.Inca}>Inca Trail</li>
<li onClick={this.props.Mira}>El Mirador</li>
<li onClick={this.props.Kongs}>Kongsleden</li>
<li onClick={this.props.Robs}>Mt Robson</li>

      </ul>
      <div className = "calosc">{content}</div>
     <div className="ws"> <Total/>
     <footer><p>Created by Adam Wyka in 2020</p></footer> </div>
              
       </div> 
          
       </div>  
      );
   }
}

const mapStateToProps = (state) => {
  return{
    pie:state.pie,
    policzone:state.policzone,
    ilo: state.ilo,
    dru: state.dru,
    trze: state.trze,
    czwar: state.czwar,
    pia: state.pia,
    wszy:state.wszy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Anna: () => dispatch({type:'Annapurna'}),
    Inca: () => dispatch({type:'Inca'}),
    Mira: () => dispatch({type:'Mirador'}),
    Kongs: () => dispatch({type:'Kongsleden'}),
    Robs: () => dispatch({type:'Robson'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);