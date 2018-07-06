import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

const SearchDetail = props => (
  <div className={`SearchDetail ${props.isShowSearchDetail ? "on" : "off"}`}>
    <h1>詳細検索 絞り込み</h1>
    <div className="icons">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="icons">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <Btn onClick={props.toggleSearchDetail}>この条件で！</Btn>
  </div>
)

const mapStateToProps = state => ({
  isShowSearchDetail: state.isShowSearchDetail,
})

// modules
import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleSearchDetail: () => dispatch(action.toggleSearchDetail()),
})

export default connect(mapStateToProps, mapStateToDispatch)(SearchDetail)
