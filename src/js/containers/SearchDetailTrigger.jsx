import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

const SearchDetailTrigger = props => (
  <div className="SearchDetailTrigger" onClick={props.toggleSearchDetail}>
    <Btn circle><i className="fas fa-cog fa-fw"></i></Btn>
  </div>
)

const mapStateToProps = state => ({})

// modules
import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleSearchDetail: () => dispatch(action.toggleSearchDetail()),
})

export default connect(mapStateToProps, mapStateToDispatch)(SearchDetailTrigger)
