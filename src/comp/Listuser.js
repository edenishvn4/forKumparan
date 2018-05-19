import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './style/Listuser.css'
class Listuser extends Component{
constructor(){
    super();
    this.state={
        user:[]
    }
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((ambilData)=>{
        console.log(ambilData.data)
        this.setState({user : ambilData.data})
    })
}

render(){
    const data = this.state.user.map((item,index)=>{
        var nm = item.name;
        var um = item.username
        var em = item.email;
        var id = item.id
        return(
                <tr key={index}>
                    <td>
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt=""/>
                        <a href="" class="user-link">{nm}</a>
                        <span class="user-subhead">{um}</span>
                    </td>
                    <td>{id}</td>
                    <td>2013/08/12</td>
                    <td>
                        <a href="">{em}</a>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#MyModal">
                          <Link to={`/modal/${id}`}><i class="fa fa-search-plus fa-inverse"></i></Link>
                        </button>
                    </td>
                </tr>              
        )
    })
    return(
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-box no-header clearfix">
                        <div class="main-box-body clearfix">
                            <div class="table-responsive">
                                <table class="table user-list">
                                    <thead>
                                        <tr>
                                        <th><span>User</span></th>
                                        <th><span>ID</span></th>
                                        <th><span>Created</span></th>
                                        <th><span>Email</span></th>
                                        <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

}
export default Listuser