import React from "react";
import PropTypes from "prop-types";
import ContactList from "./ContactList";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false
    };
  }
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="" />
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div
            className="status"
            onClick={(event) => {
              const newOnline = !this.state.online;
              this.setState({ online: newOnline });
            }}>
            <span 
            className={this.state.online ? "status-online" : "status-offline"}>{this.state.online ? "online" : "offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
