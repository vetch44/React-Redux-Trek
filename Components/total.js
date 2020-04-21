import React, {Component} from 'react';
import { connect } from 'react-redux';

class  Total extends Component {
    render() {
        
        let first;
        let second;
        let third;
        let fourth;
        let fifth;
        if (this.props.pojaw===false){
            first = <div className="zdje"><p>Annapurna <button onClick={this.props.od}> x</button></p>
             <img src={require('./Images/him2.JPG')} alt='' height='100px' width='100px'></img></div>
        }
        if (this.props.pojaw2===false){
            second = <div className="zdje"><p>Inca Trail <button onClick={this.props.od2}> x</button> </p><img src={require('./Images/ekw2.jpg')}alt='' height='100px' width='100px'></img></div>
        }
        if (this.props.pojaw3===false){
            third = <div className="zdje"><p>El Mirador <button onClick={this.props.od3}> x</button></p><img src={require('./Images/gwa2.jpg')}alt='' height='100px' width='100px'></img></div>
        }
        if (this.props.pojaw4===false){
            fourth = <div className="zdje"><p>Kongsleden <button onClick={this.props.od4}> x</button></p><img src={require('./Images/skan.jpg')}alt='' height='100px' width='100px'></img></div>
        }
        if (this.props.pojaw5===false){
            fifth = <div className="zdje"><p>Mt Robson <button onClick={this.props.od5}> x</button></p><img src={require('./Images/kan3.JPG')}alt='' height='100px' width='100px'></img></div>
        }
          let count = Math.ceil(this.props.policzone/3.5)
        return ( 
            <div className="Wsio">
                <h6>Podsumowanie</h6>
                <p>
                Łączna długość: <span className='wyn'>{this.props.policzone + " km "}</span>
                Łączny czas: <span className='wyn'>{count + " godzin"}</span>
                </p>
                <div className="zdjecia">
                {first}
                {second}
                {third}
                {fourth}
                {fifth}
                </div>
               
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return{
      ilo:state.ilo,
      policzone:state.policzone,
      pojaw:state.pojaw,
      pojaw2:state.pojaw2,
      pojaw3:state.pojaw3,
      pojaw4:state.pojaw4,
      pojaw5:state.pojaw5,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      od: () => dispatch({type: 'Substract'}),
      od2: () => dispatch({type:'Substract2'}),
      od3: () => dispatch({type:'Substract3'}),
      od4: () => dispatch({type:'Substract4'}),
      od5: () => dispatch({type:'Substract5'}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Total);