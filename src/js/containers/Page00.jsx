import React from "react"
import { connect } from "react-redux"

// containers
import Footer from "./Footer"

class Page00 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: "Touch item plz :)",
    }
    this.exchangeValue = this.exchangeValue.bind(this)
  }
  exchangeValue(nextValue){
    this.setState({
      value: nextValue,
    })
  }
  render(){
    const { props } = this
    return (
      <div className="Page00 page" style={{position: "fixed", top: 0, left: 0, right: 0}}>
        <h2>{props.routes.page00.heading}</h2>
        <h1 style={{
            background: "thistle",
            fontSize: "50px",
            padding: "100px",
        }}>{this.state.value}</h1>
        <div>
          <ul>
            <Item exchangeValue={this.exchangeValue}>hello1</Item>
            <Item exchangeValue={this.exchangeValue}>hello2</Item>
            <Item exchangeValue={this.exchangeValue}>hello3</Item>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}


const Item = props => {
  const onTouch = e => {
    props.exchangeValue(props.children)
  }
  return (
    <li style={{background: "pink", display: "block", margin: "10px", padding: "20px"}}
      onTouchMove={onTouch}
      onMouseOver={onTouch}
      >{props.children}</li>
  )
}


const mapStateToProps = state => ({
  routes: state.routes,
})

export default connect(mapStateToProps)(Page00)
