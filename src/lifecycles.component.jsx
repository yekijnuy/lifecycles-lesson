import React from 'react';

// React.Component is a class
class Lifecycles extends React.Component {
  constructor() {
    // am I extending from another Component, pull in all their functionality
    super();
    console.log('constructor!');
  }

  // mounting phase is when the component is being placed on the DOM for the first time
  // great place to make API calls, load the base component, then fetch the data
  componentDidMount() {
    console.log('componentDidMount!');
  }

  // you now have the base component with it's UI rendered
  // any changes to props, setState(), or forceUpdate() on component will go to update phase
  // is made AFTER the updates have been made to the DOM
  //
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  // this is where we want to do anything BEFORE React strips off DOM
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  // remember if props, state, or forceUpdate...all children are re-rendered
  // mainly for performance
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  // component tells JS this is what I want you to display
  // after constructor, render gets called, props gets evaluated
  // with render, react THEN is like 'I know what the component should look like with render
  // and I know what state it's in from the constructor, let's put it on the page, let's mount it
  // componentDidMount gets fired
  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
