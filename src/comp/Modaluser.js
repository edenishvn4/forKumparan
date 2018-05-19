import React, { Component } from 'react';
import axios from 'axios';

class Modaluser extends Component{
    constructor(){
        super();
        this.state={
            user:{}
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
        .then((ambildata) => {
            this.setState({ user: ambildata.data });
            console.log(ambildata.data);
          }).catch(err=>{
              console.log(err)
          })
    }
    render(){
        return(
            <div class="card-deck">
                <div class="card">
                <img class="card-img-top" src="https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg" alt="Card cap"/>
                <div class="card-body">
                    <h5 class="card-title">{this.state.user.name}</h5>
                    <p class="card-text"><i>{this.state.user.username}</i></p>
                    <address>
                        <i class="fas fa-phone fa-lg"></i> {this.state.user.phone}<br/>
                        <i class="fas fa-envelope fa-lg"></i> {this.state.user.email}
                    </address>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
        )
    }
}
export default Modaluser