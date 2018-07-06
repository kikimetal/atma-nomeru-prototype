export const assetsPath = (state = null) => state

export const routes = (state = null) => state

export const windowSize = (state = "sm", action) => {
  if (action.type === "SET_WINDOW_SIZE") {
    return action.size
  }
  return state
}

export const windowWidth = (state = window.innerWidth, action) => {
  if (action.type === "SET_WINDOW_WIDTH") {
    return action.width
  }
  return state
}

export const windowHeight = (state = window.innerHeight, action) => {
  if (action.type === "SET_WINDOW_HEIGHT") {
    return action.height
  }
  return state
}

export const isPageMoving = (state = false, action) => {
  if (action.type === "PAGE_MOVING") {
    return true
  }
  if (action.type === "PAGE_MOVED") {
    return false
  }
  return state
}

export const moveToPathname = (state = "", action) => {
  if (action.type === "SET_MOVE_TO_PATHNAME") {
    return action.nextPath
  }
  return state
}

export const shortMessage = (state = "", action) => {
  if (action.type === "SET_NEXT_PAGE_SHORT_MESSAGE") {
    return action.shortMessage
  }
  return state
}

export const mobileMenuContext = (state = false, action) => {
  if (action.type === "SET_MOBILE_MENU_CONTEXT") {
    return action.context
  }
  return state
}

export const mapMode = (state = true, action) => {
  if (action.type === "SET_MAP_MODE") {
    return action.context
  }
  return state
}

export const isShowSearchDetail = (state = false, action) => {
  if (action.type === "SET_SEARCH_DEATIL") {
    return action.context
  }
  return state
}

export const isShowSelectAlcohol = (state = false, action) => {
  if (action.type === "SET_SELECT_ALCOHOL") {
    return action.context
  }
  return state
}

export const orderAlcoholContext = (state = {context: false, alcohol: null}, action) => {
  if (action.type === "SET_ORDER_ALCOHOL") {
    return ({
      context: action.context,
      alcohol: action.alcohol || null,
    })
  }
  return state
}

export const successCardContext = (state = {context: false, alcohol: null}, action) => {
  if (action.type === "SET_SUCCESS_CARD") {
    return ({
      context: action.context,
      alcohol: action.alcohol,
    })
  }
  return state
}
