import { combineReducers } from "redux"
import { postsReducer } from "./postsReducer"
import { singlePostReducer } from "./singlePostReducer"
import { createPostReducer } from "./createPostReducer"

export default reducers = combineReducers({
  posts: postsReducer,
  singlePost: singlePostReducer,
  createPost: createPostReducer
})