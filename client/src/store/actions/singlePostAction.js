import {
  SET_SINGLE_POST_DATA,
  SET_SINGLE_POST_LOADING,
  SET_SINGLE_POST_ERROR
} from "../singlePostTypes"
import apiServer from "../../apis/server"

export const setSinglePostData =  (payload) => {
  return {
    type: SET_SINGLE_POST_DATA,
    payload: payload
  }
}

export const setSinglePostError = (payload) => {
  return {
    type: SET_SINGLE_POST_ERROR,
    payload: payload
  }
}

export const setSinglePostLoading = (payload) => {
  return {
    type: SET_SINGLE_POST_LOADING,
    payload: payload
  }
}

export const fetchSinglePost = (id) => {
  return async (dispatch) => {
    dispatch(setSinglePostLoading(true))
    try {
      const { data } = await apiServer({
        url: "/posts/" + id,
        method: "GET"
      })
      dispatch(setSinglePostData(data))
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
      dispatch(setSinglePostError(message))
    } finally {
      dispatch(setSinglePostLoading(false))
    }
  }
}