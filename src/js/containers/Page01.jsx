import React from "react"
import { connect } from "react-redux"
import urljoin from "url-join"

// containers
import Footer from "./Footer"
import ConnectedLink from "./ConnectedLink"
import SearchDetail from "./SearchDetail"
import SearchDetailTrigger from "./SearchDetailTrigger"

const Page01 = props => {

  const { routes } = props

  const joinAssetsPath = imgsrc => {
    return urljoin(props.assetsPath, imgsrc)
  }

  return (
    <div className={`page Page01 ${props.mapMode ? "mode-map" : "mode-list"}`}>

      <div
        className="google-map"
        style={{backgroundImage: `url(${urljoin(props.assetsPath, "img/map.png")})`}}
        onClick={props.toggleMapMode}
      ></div>

    <div className="search-detail-trigger-container"><SearchDetailTrigger /></div>

      <div className="result-list-container">
        <h1>{routes.page01.heading}</h1>
        <p>100件ヒットしました！</p>

        {
          Array(10).fill(null).map((val, i) => (
            <ShopCard imgsrc={joinAssetsPath("img/shop.jpg")} key={"ShopCard-" + i} />
          ))
        }

        <Footer />
      </div>

      <SearchDetail />

    </div>
  )
}

let ShopCard = props => {
  const { routes } = props
  return (
    <ConnectedLink to={routes.page02.uri}>
      <div className="ShopCard" onTouchStart={() => {}}>
        <h1 className="name">店舗のお名前 どこどこ支店</h1>
        <div className="img" style={{backgroundImage: `url(${props.imgsrc})`}}></div>
        <div className="price">
          17:00 〜 26:00 (LO: 25:00)<br/>
          $2,000 〜 $9,000
        </div>
      </div>
    </ConnectedLink>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  assetsPath: state.assetsPath,
  mapMode: state.mapMode,
})

// modules
import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleMapMode: () => dispatch(action.toggleMapMode()),
})

ShopCard = connect(mapStateToProps)(ShopCard)

export default connect(mapStateToProps, mapStateToDispatch)(Page01)
