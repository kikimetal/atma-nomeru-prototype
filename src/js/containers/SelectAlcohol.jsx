import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

// containers
import OrderAlcohol from "./OrderAlcohol"

const SelectAlcohol = props => {

  const orderAlcoholCancel = e => {
    e.preventDefault()
    e.stopPropagation()
    props.orderAlcoholCancel()
  }

  const orderAlcohol = {
    beer: e => {
      e.preventDefault()
      e.stopPropagation()
      props.orderAlcohol("beer")
    },
    high: e => {
      e.preventDefault()
      e.stopPropagation()
      props.orderAlcohol("high")
    },
    nihonshu: e => {
      e.preventDefault()
      e.stopPropagation()
      props.orderAlcohol("nihonshu")
    },
    kakuteru: e => {
      e.preventDefault()
      e.stopPropagation()
      props.orderAlcohol("kakuteru")
    },
  }

  return (
    <div
      className={`SelectAlcohol ${props.isShowSelectAlcohol ? "on" : "off"}`}
      onClick={props.toggleSelectAlcohol}
      >

      <div className="description">お酒を選ぼう！</div>

      <Btn circle large
        onTouchStart={orderAlcohol.beer}
        onMouseDown={orderAlcohol.beer}
        onTouchEnd={orderAlcoholCancel}
        onMouseUp={orderAlcoholCancel}
        >ビル</Btn>
      <Btn circle large
        onTouchStart={orderAlcohol.high}
        onMouseDown={orderAlcohol.high}
        onTouchEnd={orderAlcoholCancel}
        onMouseUp={orderAlcoholCancel}
        >ハボ</Btn>
      <Btn circle large
        onTouchStart={orderAlcohol.nihonshu}
        onMouseDown={orderAlcohol.nihonshu}
        onTouchEnd={orderAlcoholCancel}
        onMouseUp={orderAlcoholCancel}
        >日酒</Btn>
      <Btn circle large
        onTouchStart={orderAlcohol.kakuteru}
        onMouseDown={orderAlcohol.kakuteru}
        onTouchEnd={orderAlcoholCancel}
        onMouseUp={orderAlcoholCancel}
        >カク</Btn>

      <OrderAlcohol />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  assetsPath: state.assetsPath,
  mapMode: state.mapMode,
  isShowSelectAlcohol: state.isShowSelectAlcohol,
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
})

export default connect(mapStateToProps, mapStateToDispatch)(SelectAlcohol)
