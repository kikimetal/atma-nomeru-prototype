import React from "react"
import { connect } from "react-redux"
import urljoin from "url-join"

// components
import Btn from "../components/Btn"

// containers
import Footer from "./Footer"
import SelectAlcohol from "./SelectAlcohol"
import SuccessCard from "./SuccessCard"

const Page02 = props => {
  const { routes } = props
  return (
    <div className={`Page02 page ${props.mapMode ? "mode-map" : "mode-list"} ${props.isShowSelectAlcohol ? "light-down" : ""}`}>

      <SelectAlcohol />
      <SuccessCard />

      {/*<div className="filter-container">*/}
        <div
          className="google-map effectTarget"
          style={{backgroundImage: `url(${urljoin(props.assetsPath, "img/map.png")})`}}
          onClick={props.toggleMapMode}
          ></div>

        <div className="shop-detail-container effectTarget">
          <h1>店舗詳細</h1>
          <ul>
            <li>店舗写真</li>
            <li>店舗写真1マイ</li>
            <li><img style={{width: "100%", height: "auto"}} src={urljoin(props.assetsPath, "img/shop.jpg")}/></li>
            <li>料理写真1マイ</li>
            <li><b>店舗名称</b></li>
            <li>提供酒種別(反映は次の日・午前八時)</li>
            <li>PR内容</li>
            <li>予算</li>
            <li>1000円区切りで最小最大選択</li>
            <li>座席数</li>
            <li>数値</li>
            <li>電話番号</li>

            <li><b>アクセス</b></li>
            <li>住所</li>
            <li>営業開始・終了時間・LO(1</li>
            <li>月~日で営業開始時間・終了時間を選択</li>
            <li>不定休かどうかも選択</li>
            <li>分煙状況</li>
            <li>その他</li>
          </ul>
        </div>

        <Btn
          className="use-nomeru effectTarget"
          style={{lineHeight: 1.7, background: "orange", fontSize: "25px"}}
          onClick={props.toggleSelectAlcohol}
          >nomeru 使う</Btn>

        <Footer className="effectTarget" />
      {/*</div>*/}

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
  toggleMapMode: () => dispatch(action.toggleMapMode()),
  toggleSelectAlcohol: () => dispatch(action.toggleSelectAlcohol()),
})

export default connect(mapStateToProps, mapStateToDispatch)(Page02)
