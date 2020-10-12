import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { buyCake } from '../redux';

function CakeContainer(props) {
  return (
    <>
      <h2>Number of cakes <br /> {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </>
  )
}
// Access redux state
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}
// Dispatch the actions
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
// Connects ReactComponent to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)

