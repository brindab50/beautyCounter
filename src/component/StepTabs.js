import React, { Component } from 'react';
import StepTab from './StepTab';

class StepTabs extends Component {


// recieving props from main container 
// using constructor to recieve the props and 
// creating a click handler and passing it the argument of a tab 
// creating this click handler to pass it down in to an event so each 
// time a tab is clicked it sets the active tab state to the tab that was clicked 
// setting the state of active tab to the props that were recieved 
// iterating through the array of numbered tabs 
// iterate through the array of the props lable tabs 
// on each tab iterate through the lable childeren props and 
// return the childern props of the lable





  constructor(props) {
    super(props);

console.log("jk bkjnj", this.props.children[0].props.children)
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {


    return (
      <div className="tabs">
        <ol className="tab-list">
          {this.props.children.map((child) => {
            const { label } = child.props;

            return (
              <StepTab
               activeTab={this.state.activeTab}
                key={label}
                label={label}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {this.props.children.map((child) => {
            if (child.props.label !== this.state.activeTab) return undefined;
            return child.props.children; 
          })}
        </div>
      </div>
    );
  }
}

export default StepTabs;