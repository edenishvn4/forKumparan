import React, { Component } from 'react';
import axios from 'axios';

class Photos extends Component{
    constructor(){
        super();
        this.state={
            phot:[]
        }
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/photos?albumId='+this.props.match.params.id)
        .then((ambilData)=>{
            console.log(ambilData.data)
            this.setState({phot : ambilData.data})
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        const data=this.state.phot.map((item,index)=>{
            var ttl =item.title
            var url = item.thumbnailUrl
            var urlm = item.url
            var tgt = '#MyModal'+index
            var id = 'MyModal'+index
            var ar='MyModalLabel'+index
            return(
                    <div className="col-lg-3 col-md-4 col-xs-6" key={index}>
                        <a data-toggle="modal" data-target={tgt} className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src={url} alt=""/>
                        </a>
                        <div class="modal fade" id={id}tabindex="-1" role="dialog" aria-labelledby={ar} aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id={ar}>{ttl}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                <div class="modal-body">
                                    <figure class="figure">
                                        <img src={urlm} class="figure-img img-fluid rounded" alt="cope"/>
                                        <figcaption class="figure-caption text-right">{ttl}</figcaption>
                                    </figure>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
        return(
            <div className="container">
            <h1 className="my-4 text-center text-lg-left">Thumbnail Gallery</h1>
            <div className="row text-center text-lg-left">
                {data}
            </div>
            </div>
        )
    }
}
export default Photos;