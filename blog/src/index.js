import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import AllPosts from "./components/allPosts";
import ShowPost from "./components/showPost";



import reducers from './reducers';
import NewPost from "./components/newPost";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={NewPost} />
                <Route path="/posts/:id" component={ShowPost} />
                <Route path="/" component={AllPosts} />

            </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
