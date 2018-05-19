import React, { Component } from 'react';
import axios from 'axios';
import './style/Comments.css'

class Comments extends Component{
    constructor(){
        super();
        this.state={
            commt:[],
            messg:'',
            comtext:''
        }
    }
    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/edenishvn4/fakedbjson/comments?postId='+this.props.match.params.id)
        .then((ambilData)=>{
            console.log(ambilData.data)
            this.setState({commt : ambilData.data})
        }).catch(err=>{
            console.log(err)
        })
    }

    change(){
        this.setState({
            comtext:this.refs.comment.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var bd = this.state.comtext;
        var id = this.state.commt.postId
        var url ='https://my-json-server.typicode.com/edenishvn4/fakedbjson/comments?postId='+id
        axios.post(url, { bd })
          .then((result) => {
            this.setState({messg:'comment added'})
            console.log(result);
          });
      }

      delete(id){
        fetch('https://my-json-server.typicode.com/edenishvn4/fakedbjson/comments/'+id,{method:'DELETE'})
          .then((result) => {
            this.setState({messg:'Comment '+id+' Deleted'})
            console.log(result)
          });
      }

    render(){
        const data=this.state.commt.map((item,index)=>{
            var nm =item.name
            var em =item.email
            var msg = item.body
            var posid = item.id
            var url = 'https://www.cloudninefertility.com/wp-content/uploads/2017/12/User-dummy.png'
            return(
                <li className="comment user-comment" key={index}>
                    <div className="info">
                        <a href="">{nm}</a>
                        <span>{em}</span>
                    </div>
                    <a className="avatar" href="">
                        <img src={url} width="35" alt="Profile Avatar" title={nm} />
                    </a>
                        <p>{msg}</p>
                        <button type="button" className="close" onClick={this.delete.bind(this, posid)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </li>
            )
        })
        const { messg } = this.state;
        return(
            <div>
                <ul className="comment-section">
                {data}
                    <li className="write-new">
                        <form onSubmit={this.onSubmit}>
                            <textarea placeholder="Write your comment here" ref="comment" onInput={()=>{this.change();}}></textarea>
                            <div>
                                <img src="https://www.cloudninefertility.com/wp-content/uploads/2017/12/User-dummy.png" width="35" alt="Profile of Bradley Jones" title="Bradley Jones" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </li>
                    <br/>
                    {messg !== '' &&
                    <div className="alert alert-success alert-dismissible">
                        { messg }
                    </div>
                }
		        </ul>
            </div>
        )
    }
}
export default Comments;