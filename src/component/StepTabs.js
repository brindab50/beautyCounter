import React, { Component } from 'react';
import StepTab from './StepTab';

class StepTabs extends Component {


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