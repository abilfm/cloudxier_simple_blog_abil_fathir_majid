import {
  SET_POSTS_DATA,
  SET_POSTS_LOADING,
  SET_POSTS_ERROR
} from "../postsTypes"
import apiServer from '../../apis/server'

export const setPostsData = (payload) => {
  return {
    type: SET_POSTS_DATA,
    payload: payload
  }
}

export const setLoadingData = (payload) => {
  return {
    type: SET_POSTS_LOADING,
    payload: payload
  }
}

export const setErrorData = (payload) => {
  return {
    type: SET_POSTS_ERROR,
    payload: payload
  }
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(setLoadingData(true))
    try {
      const { data } = await apiServer({
        url: "/posts",
        method: "GET"
      })
      dispatch(setPostsData(data))
    } catch (error) {
      const { response } = error
      let message = ""
      if (response) {
        let { data } = response
        if (Array.isArray(data.message)) {
          message = data.message[0]
        } else {
          message = data.message
        }
      }
      dispatch(setErrorData(message))
    } finally {
      dispatch(setLoadingData(false))
    }
  }
}