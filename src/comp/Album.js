import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Album extends Component{
    constructor(){
        super();
        this.state={
            idp:'',
            album:[]
        }
    }

    klik(){
        this.setState({ida: this.refs.postid.value});
      }
      klik2(){
        var x=this.state.ida;
        axios.get('https://jsonplaceholder.typicode.com/albums?userId='+x)
        .then((ambilData)=>{
            console.log(ambilData.data)
            this.setState({album : ambilData.data})
        })
    }
    render(){
        const data=this.state.album.map((item,index)=>{
            var ttl = item.title;
            var posid =item.id
            var y = "heading"+index;
            var col ="#collapse"+index;
            var col1 ="collapse"+index;
            console.log(col1)
            return (
                <div id="accordion">
                <div class="card" key={index}>
                <div class="card-header" id={y}>
                    <button class="btn btn-link" data-toggle="collapse" data-target={col} aria-expanded="true" aria-controls={col1}>
                      {ttl}
                    </button>
                </div>          
                <div id={col1} class="collapse show" aria-labelledby={y} data-parent="#accordion">
                  <div class="card-body">
                    {ttl}
                  </div>
                  <div class="card-footer">
                    <div className="text-right">
                    <Link to={`/phot/${posid}`}><button class="btn btn-outline-success my-2 my-sm-0">See Photos</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            )
        })
        return(
            <div className="container">
            <center>
            <h1>Search Album</h1>
            <div className="row">
                <div className="col-md-8">
                    <input className="form-control" ref="postid" type="text" placeholder="masukkan id user" onInput={()=>{this.klik();}}/>
                </div>
                <div className="col-md-4">
                 <button type="submit" className="btn btn-success btn-block" onClick={()=>{this.klik2();}}>Lihat Album</button>
                </div>
            </div>
            </center>
            <br/>
            {data}
        </div>
        )
    }
}
export default Album