import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './App';
import Header from './comp/Header';
import Listuser from './comp/Listuser';
import Modaluser from './comp/Modaluser';
import Post from './comp/Post';
import Album from './comp/Album';
import Comments from './comp/Comments';
import Photos from './comp/Photos';
import Editpost from './comp/Editpost';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router,Route } from 'react-router-dom'

ReactDOM.render(
<Router>
    <div className="container-fluid">
        <Header/>
        <Route exact path='/' component={App} />
        <Route path='/user' component={Listuser} />
        <Route path='/modal/:id' component={Modaluser} />
        <Route path='/post' component={Post} />
        <Route path='/posit/:id' component={Editpost} />
        <Route path='/comm/:id' component={Comments} />
        <Route path='/album' component={Album} />
        <Route path='/phot/:id' component={Photos} />
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
