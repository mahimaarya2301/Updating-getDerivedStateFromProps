//Import Area
import React from 'react';
import ReactDOM from 'react-dom';

//Let's create a Class Component
class A extends React.Component{
    //1.Property
    state = {};
    //2.Constructor
    constructor(props){
        //Call the parent constructor
        super(props);
        //The role of constructor is to initialize the property i.e. state
        this.state = {favouritecolor:"Black"};
    }
    //3.Methods
    //Every Class Component must have a render method which returns HTML(JSX)
    //Normal Function
    mahima(){
        alert('Its working');
    }

    //Fat Arrow Function i.e.ES6 Feature
    mahi = ()=>{
        alert('Its working again');
    }
    static getDerivedStateFromProps(props,state){
        return { favouritecolor: props.favcol};
    }
    render(){
        return(
            <React.Fragment>
                <h1>Hello React</h1>
                <p>My favourite colour is {this.state.favouritecolor}</p>
                <button type="button" onClick={ this.mahima } >Click Me!</button>
                <button type="button" onClick={ this.mahi } >Click Me Again!</button>

            </React.Fragment>
        );
    }
}

ReactDOM.render(<A favcol="White"/>,document.getElementById('root'));