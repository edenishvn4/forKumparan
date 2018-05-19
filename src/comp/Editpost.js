import React, { Component } from 'react';
import axios from 'axios';

class Editpost extends Component {

  constructor() {
    super();
    this.state = {
        post: {},
        title:'',
        body:'',
        messg:''
    };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/edenishvn4/fakedbjson/posts/'+this.props.match.params.id)
      .then(res => {
        this.setState({post: res.data});
        console.log(this.state.post);
      })
  }

  klik(){
    this.setState({
        title: this.refs.title.value,
        body:this.refs.body.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    var ttl = this.state.title;
    var bd = this.state.body;
    var id = this.state.post.id
    var url ='https://my-json-server.typicode.com/edenishvn4/fakedbjson/posts/'+this.props.match.params.id
    axios.put(url, {id, ttl, bd })
      .then((result) => {
        this.setState({messg:'Post Edited'})
        console.log(result);
        // this.props.history.push("/post")
      });
  }
  render(){
    const { messg } = this.state;
      return(
          <div className="container">
            <h1>Edit Post</h1>
            <br/>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control"  ref="title" onInput={()=>{this.klik();}} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Body:</label>
                <input type="text" className="form-control"  ref="body" onInput={()=>{this.klik();}} placeholder="Body" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <br/>
            {messg !== '' &&
            <div className="alert alert-success alert-dismissible">
              { messg }
            </div>
          }
          </div>
      )
  }
}
export default Editpost;