import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

// containers

const OrderAlcohol = props => (
  <div className={`OrderAlcohol ${props.isOrder ? "on" : "off"}`}>
    <div className="touch-point"
      onMouseOver={props.orderSuccess}
      onTouchStart={props.orderSuccess}
      >
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
)


const mapStateToProps = state => ({
  routes: state.routes,
  isOrder: state.orderAlcoholContext.context,
})

// modules
import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleSelectAlcohol: () => {
    dispatch(action.toggleSelectAlcohol())
    dispatch(action.orderAlcoholCancel())
  },
  orderAlcohol: alcohol => dispatch(action.orderAlcohol(alcohol)),
  orderAlcoholCancel: () => dispatch(action.orderAlcoholCancel()),
  orderSuccess: () => {
    dispatch(action.orderSuccess())
    dispatch(action.orderAlcoholCancel())
    dispatch(action.toggleSelectAlcohol())
  },
})

export default connect(mapStateToProps, mapStateToDispatch)(OrderAlcohol)
