import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

const SuccessCard = props => (
  <div
    className={`SuccessCard ${props.successCardContext.context ? "on" : "off"}`}
    onClick={props.hideSuccessCard}
    >
    注文が完了しました<br/>
    <q>{props.successCardContext.alcohol}</q><br/>
    楽しいのみを！
  </div>
)

const mapStateToProps = state => ({
  successCardContext: state.successCardContext,

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
  hideSuccessCard: () => dispatch(action.hideSuccessCard()),
})

export default connect(mapStateToProps, mapStateToDispatch)(SuccessCard)
