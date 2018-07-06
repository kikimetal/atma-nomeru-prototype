import urljoin from "url-join"

export const setWindowSize = () => {
  return (dispatch) => {

    const width = window.innerWidth
    const height = window.outerHeight
    ? window.innerHeight
    : window.orientation
    ? screen.width
    : screen.height
    // 肝心な部分。iOS:safari では outerHeight == 0

    dispatch({
      type: "SET_WINDOW_WIDTH",
      width,
    })

    dispatch({
      type: "SET_WINDOW_HEIGHT",
      height,
    })

    let size
    if (width < 768) {
      size = "sm"
    } else if (width < 1240) {
      size = "md"
    } else if (width < 1900) {
      size = "lg"
    } else {
      size = "xl"
    }

    dispatch({
      type: "SET_WINDOW_SIZE",
      size,
    })
  }
}

const ROUTES = window.__ROUTES__
// 引数の path が 存在するか確認。route情報を返す。
const checkRoute = path => {
  const keyArr = Object.keys(ROUTES) // key の配列を生成 // ["page00", "page01", ...]
  const matchRoute = keyArr.find(key => ROUTES[key].uri === path) || false
  return matchRoute ? ROUTES[matchRoute] : ROUTES["page00"]
}

export const pageMoveToPathname = (nextPath) => {

  if (window.location.pathname === nextPath) return false

  return (dispatch) => {
    dispatch({
      type: "SET_MOVE_TO_PATHNAME",
      nextPath,
    })

    dispatch({
      type: "PAGE_MOVING",
    })

    setTimeout(() => dispatch({ type: "PAGE_MOVED" }), 2200)
  }
}

// mobile menu show / hide
export const toggleMobileMenu = (context) => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_MOBILE_MENU_CONTEXT",
      context: !getState().mobileMenuContext,
    })
  }
}

export const toggleMapMode = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_MAP_MODE",
      context: !getState().mapMode,
    })
  }
}

export const toggleSearchDetail = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_SEARCH_DEATIL",
      context: !getState().isShowSearchDetail,
    })
  }
}

export const toggleSelectAlcohol = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "SET_SELECT_ALCOHOL",
      context: !getState().isShowSelectAlcohol,
    })
  }
}


export const orderAlcohol = alcohol => {
  return (dispatch) => {
    console.log("order!", alcohol)
    dispatch({
      type: "SET_ORDER_ALCOHOL",
      context: true,
      alcohol,
    })
  }
}

export const orderAlcoholCancel = alcohol => {
  return (dispatch) => {
    console.log("cancel!", alcohol)
    dispatch({
      type: "SET_ORDER_ALCOHOL",
      context: false,
      alcohol: null,
    })
  }
}

export const orderSuccess = () => {
  return (dispatch, getState) => {
    const state = getState()
    if (!state.orderAlcoholContext.context) return
    console.log("SUCCESS!", state.orderAlcoholContext.alcohol)
    dispatch({
      type: "SET_SUCCESS_CARD",
      context: true,
      alcohol: state.orderAlcoholContext.alcohol,
    })
  }
}

export const hideSuccessCard = () => ({
  type: "SET_SUCCESS_CARD",
  context: false,
  alcohol: null,
})
