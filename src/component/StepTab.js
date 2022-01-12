import React, { Component } from 'react';



// create a function onclick function 
// 


class StepTab extends Component {
  onClick = () => {
    // const { label, onClick } = this.props;
    this.props.onClick(this.props.label);
  }

  render() {
    const { onClick, props: { activeTab, label}, } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
       
        {label}
      </li>
    );
  }
}

export default StepTab;