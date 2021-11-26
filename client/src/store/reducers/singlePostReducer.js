import {
  SET_SINGLE_POST_DATA,
  SET_SINGLE_POST_LOADING,
  SET_SINGLE_POST_ERROR
} from "../singlePostTypes"

const initialState = {
  singlePost: null,
  loading: false,
  error: null
}

export const singlePostReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SINGLE_POST_DATA:
      return { ...state, singlePost: action.payload }
    case SET_SINGLE_POST_LOADING:
      return { ...state, loading: action.payload }
    case SET_SINGLE_POST_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}