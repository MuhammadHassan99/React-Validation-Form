import React, { Component } from 'react'
import Navebar from './Navebar';
import Home from './Home';
import About from './About';

class Basic extends Component {
    state = {
        password:null,
        name:null,
        age:null,
        show:false

    }

    Name = (e) => {
        this.setState({
            name: e.target.value
        })   
    }    

    passwordChecker = (b) => {
        let pass = b.target.value;
        if(pass.length>0 && pass.length<=10) {
            this.setState({
                password:pass
            })
        } else {
            this.setState ({ password:null }) }
    }
    ageChecker = (c) => {
        let age = c.target.value;
        if(age>20) {
            this.setState({
                age
            })
        } else {
            this.setState ({ age:null })
        }
    }

    showGreet = () => {
        const { password, age } = this.state
        if(password !== null && age !== null) {
            this.setState({
                show:true
            })
        }

    }    

        render() 
        {
            const { name,show } = this.state
            return (
                <div>
                    {show?<h2>Hello {name}</h2>:null}
                    <input className="form-control" placeholder="Enter Name" onChange={this.Name} />
                    <input className="form-control" placeholder="Enter password" onChange={this.passwordChecker}/>
                    <input className="form-control" placeholder="Enter age" onChange={this.ageChecker}/>
                    <button className="btn btn-success" onClick={this.showGreet}>Submit</button>
                </div>
                    
                
            )
        }
}
export default Basic
