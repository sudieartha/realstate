import React from 'react';
import ReactFireMixin from 'reactfire';

const UserGadgetLogged = React.createClass({
  mixins: [ReactFireMixin],
  propTypes: {
    userId: React.PropTypes.string
  },
  getInitialState: function(){
    return {
      currentUser: {}
    }
  },
  componentWillMount: function(){
    this.bindAsObject(firebase.database().ref(`users/${this.props.userId}`), 'currentUser');
  },
  render: function(){
    return (
      <div>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <img src="dist/images/avatar1.png" alt="User Photo"/>
          <span className="userName">{this.state.currentUser.fname}</span>
          <span className="drop-arow"/>
        </a>
        <ul className="dropdown-menu user-drop">
          <li><a href="#"><i className="fa fa-user"/>My Profile</a></li>
          <li><a href="#"><i className="fa fa-list"/>My Properties</a></li>
          <li><a href="#"><i className="fa fa-sign-out"/>Logout</a></li>
        </ul>
      </div>
    )
  }
});

export default UserGadgetLogged;