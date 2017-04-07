// var React = require('react');
// var Component = require('react').Component;
// var ReactDOM = require('react-dom');

// You could use es6 module syntax instead
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Require the styles for this page.  This will cause the `homepage.bundle.css` file
// to be generated.  Note that you can require multiple .less or .css files here, and
// they will _all_ be bundled together into `homepage.bundle.css` (the name is based
// on the name of this JavaScript file).
// require('../styles/homepage.less');
// require('../styles/homepage.bundle.css');

// Require the sockets.js file if you want to be able to use the socket client to
// do things like `io.socket.get()` inside of this script.
var io = require('../dependencies/sockets.js');

// Using a class to create a component
export default class Homepage extends Component {
  render() {
    return (
      <nav className="navigation navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="loading-spinner">
            <div className="outer">
              <div className="inner fa fa-spinner"></div>
            </div>
          </div>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"><img src="/images/logo_transparent_orange_notext.png" />Brushfire</a>
          <div className="collapse navbar-collapse">
            <ul className="nav-items nav navbar-nav">
              <li><a href="/tutorials/browse">Browse Tutorials</a></li>
              <li><a href="/administration">User Administration</a></li>
            </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><p className="navbar-btn"><a type="button" className="btn btn-text" href="/signin">Sign in</a></p></li>
                <li><p className="navbar-btn"><a type="button" className="btn btn-info" href="/signup">Sign up</a></p></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><p className="navbar-btn"><a type="button" class="add-tutorial-btn btn" href="/tutorials/new">add tutorial</a></p></li>

                <li className="me">
                  <span className="user-dropdown" ng-click="menuVisible = true">
                    <img className="avatar" src=""/>

                  <span className="username"></span>
                    <i className="dropdown-arrow fa fa-angle-down"></i>
                  </span>
                  <div className="user-menu-wrapper" className="{'visible':menuVisible}">
                    <div className="user-menu-veil" ></div>
                    <div className="user-menu">
                      <div className="list-group user-menu-items">
                        <a className="user-menu-item list-group-item" href="">Your Profile</a>
                        <a className="user-menu-item list-group-item" >Sign Out</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

ReactDOM.render(
  <Homepage/>,
  document.querySelector('.container')
);
