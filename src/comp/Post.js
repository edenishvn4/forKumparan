import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './style/Post.css'

class Post extends Component{
    constructor(){
        super();
        this.state={
            idp:'',
            post:[],
            messg:'',
            useid:'',
            ttl:'',
            bd:''
        }
    }

    klik(){
        this.setState({
            idp: this.refs.postid.value,
            useid: this.refs.userid.value,
            ttl: this.refs.title.value,
            bd: this.refs.body.value,
        });
    }

    klik2(){
        var x=this.state.idp;
        axios.get('https://my-json-server.typicode.com/edenishvn4/fakedbjson/posts?userId='+x).then((ambilData)=>{
          console.log(ambilData.data);
          this.setState({
            post:ambilData.data,
          })
        })
    }

    delete(id){
        fetch('https://my-json-server.typicode.com/edenishvn4/fakedbjson/posts/'+id,{method:'DELETE'})
          .then((result) => {
            this.setState({messg:'Post '+id+' Deleted'})
            console.log(result)
          });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var userId = this.state.useid;
        var title = this.state.ttl;
        var body = this.state.bd
        var url ='https://my-json-server.typicode.com/edenishvn4/fakedbjson/posts'
        axios.post(url, {userId, title, body })
          .then((result) => {
            this.setState({messg:'Success add new post'})
            console.log(result);
            // this.props.history.push("/post")
          });
      }
    render(){
        const data=this.state.post.map((item,index)=>{
            var ttl = item.title;
            var posid =item.id
            var bd = item.body;
            var y = "heading"+index;
            var col ="#collapse"+index;
            var col1 ="collapse"+index;
            return (
                <div id="accordion">
                <div className="card" key={index}>
                <div className="card-header" id={y}>
                    <button className="btn btn-link" data-toggle="collapse" data-target={col} aria-expanded="true" aria-controls={col1}>
                      {ttl}
                    </button>
                </div>          
                <div id={col1} className="collapse show" aria-labelledby={y} data-parent="#accordion">
                  <div className="card-body">
                    {bd}
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                    <button style={{marginRight:10}} onClick={this.delete.bind(this, posid)} className="btn btn-danger">Delete</button>
                    <Link to={`/posit/${posid}`}><button style={{marginRight:10}} className="btn btn-outline-success my-2 my-sm-0">Edit Post</button></Link>
                    <Link to={`/comm/${posid}`}><button className="btn btn-outline-success my-2 my-sm-0">Comments</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )
        })
        const { messg } = this.state;
        return(    
            <div className="container">
                <center>
                <h1>Search Post</h1>
                <div className="row">
                    <div className="col-md-8">
                        <input className="form-control" ref="postid" type="text" placeholder="masukkan id user" onInput={()=>{this.klik();}}/>
                    </div>
                    <div className="col-md-4">
                     <button type="submit" className="btn btn-success btn-block" onClick={()=>{this.klik2();}}>Lihat Post</button>
                    </div>
                </div>
                </center>
                <br/>
                {messg !== '' &&
                    <div className="alert alert-danger alert-dismissible">
                        { messg }
                    </div>
                }
                <br/>
                {data}
                <br/>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="userid">User ID</label>
                        <input type="number" class="form-control" ref="userid" aria-describedby="userid" onInput={()=>{this.klik();}} placeholder="Enter user ID"/>
                        <small id="userid" class="form-text text-muted">input your user id</small>
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" ref="title" onInput={()=>{this.klik();}} placeholder="Input Title"/>
                    </div>
                    <div class="form-group">
                        <label for="body">Stories</label>
                        <textarea class="form-control" ref="body" onInput={()=>{this.klik();}} placeholder="write your stories here"></textarea>
                    </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}
export default Post