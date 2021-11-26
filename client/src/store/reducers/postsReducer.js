import {
  SET_POSTS_ERROR,
  SET_POSTS_LOADING,
  SET_POSTS_DATA
} from "../postsTypes"

const initialState = {
  posts: [],
  loading: false,
  error: null
}

export const postsReducer = (state =  initialState, action) => {
  switch(action.type) {
    case SET_POSTS_DATA:
      return { ...state, posts: action.payload }
    case SET_POSTS_LOADING:
      return { ...state, loading: action.payload }
    case SET_POSTS_ERROR:
      return { ...state, error: action.payload}
    default:
      return state
  }
}