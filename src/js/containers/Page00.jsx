import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"

// containers
import Footer from "./Footer"
import ConnectedLink from "./ConnectedLink"

const Page00 = props => {
  const { routes } = props

  return (
    <div className="Page00 page">
      <h1 className="page-title">{routes.page00.heading}</h1>

      <ConnectedLink to={routes.page00.uri}><Btn>登録/ログイン</Btn></ConnectedLink>
      <ConnectedLink to={routes.page00.uri}><Btn>マイページ</Btn></ConnectedLink>

      <br/><br/><br/>

      <ConnectedLink to={routes.page01.uri}><Btn large>駅検索</Btn></ConnectedLink>
      <ConnectedLink to={routes.page01.uri}><Btn large>GPS検索</Btn></ConnectedLink>

      <br/><br/><br/>

      <ConnectedLink to={routes.page00.uri}><Btn>お得ニュース</Btn></ConnectedLink>
      <ConnectedLink to={routes.page00.uri}><Btn>ピンした店舗</Btn></ConnectedLink>
      <ConnectedLink to={routes.page00.uri}><Btn>利用した店舗</Btn></ConnectedLink>
      <ConnectedLink to={routes.page00.uri}><Btn>アプリをシェア！</Btn></ConnectedLink>

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
})

export default connect(mapStateToProps)(Page00)
