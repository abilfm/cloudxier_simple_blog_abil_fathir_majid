import {
  SET_CREATE_POST_SUCCESS,
  SET_CREATE_POST_LOADING,
  SET_CREATE_POST_ERROR
} from "../createPostTypes"

const initialState = {
  success: false,
  loading: false,
  error: null
}

export const createPostReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CREATE_POST_SUCCESS:
      return { ...state, success: action.payload }
    case SET_CREATE_POST_LOADING:
      return { ...state, loading: action.payload }
    case SET_CREATE_POST_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}