import React, { Component } from 'react';
import './App.css';
class AppClass extends Component {
  render() {
    const imgData = this.props.img
    return (
      <div className="box">
        <h2>Kalvium Gallery</h2>
        <div className="container">
          {imgData.map(el => (
            <img key={el.id} src={el.img} alt={`Image ${el.id}`} />
          ))}
        </div>
      </div>
    );
  }
}
export default AppClass
