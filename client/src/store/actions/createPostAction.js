import {
  SET_CREATE_POST_SUCCESS,
  SET_CREATE_POST_LOADING,
  SET_CREATE_POST_ERROR
} from "../createPostTypes"
import apiServer from "../../apis/server"

export const setCreatePostSuccess = (payload) => {
  return {
    type: SET_CREATE_POST_SUCCESS,
    payload: payload
  }
}

export const setCreatePostLoading = (payload) => {
  return {
    type: SET_CREATE_POST_LOADING,
    payload: payload
  }
}

export const setCreatePostError = (payload) => {
  return {
    type: SET_CREATE_POST_ERROR,
    payload: payload
  }
}

export const createPost = (payload) => {
  return async (dispatch) => {
    dispatch(setCreatePostLoading(true))
    try {
      const { data } = await apiServer({
        url: "/posts",
        method: "POST",
        data: payload
      })
      dispatch(setCreatePostSuccess(true))
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
      dispatch(setCreatePostError(message))
    } finally {
      dispatch(setCreatePostLoading(false))
    }
  }
}