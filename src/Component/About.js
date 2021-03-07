import React, { Component } from 'react'

export default class About extends Component {
    render() {
        const {myDetails} = this.props
        let myView = myDetails.map((value,index) => {
            return <div className="col-md-3 p-3 m-3">
                        <div className="card" style={{width: '400px'}}>
                            <img className="card-img-top" src={value.image} alt="Card image" style = {{width: '250px' , height: '200px', justifyContent: 'center', margin: '20px 70px'}} />
                            <div className="card-body p-2">
                                <h4 className="card-title">{value.name}</h4>
                                <p className="card-text">{value.age}</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
        })
        return (
            <div className="container">
                <div className="row m-3">
                    {myView}
                </div>
                
            </div>
        )
    }
}

