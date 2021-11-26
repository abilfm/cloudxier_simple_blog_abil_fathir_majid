import React from "react"
import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux"
import { createPost } from "../store/actions/createPostAction"

export default function CreatePost() {
  const dispatch = useDispatch()
  const { success, loading, error } = useSelector((state) => state.createPost)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image_url, setImageUrl] = useState("")
  const [author_name, setAuthorName] = useState("")

  const handleCreatePost = () => {
    const payload = {
      title,
      content,
      image_url,
      author_name
    }
    dispatch(createPost(payload))
  }

  const cleanForm = () => {
    setTitle("")
    setContent("")
    setImageUrl("")
    setAuthorName("")
  }

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Create New Post</Text>
      </View>
      <View>
        <View>
          <Text>Title:</Text>
          <TextInput
            placeholder="Title"
            onChangeText={setTitle}
          />
        </View>
        <View>
          <Text>Content:</Text>
          <TextInput
            placeholder="Content"
            onChangeText={setContent}
          />
        </View>
        <View>
          <Text>Image URL:</Text>
          <TextInput
            placeholder="Image URL"
            onChangeText={setImageUrl}
          />
        </View>
        <View>
          <Text>Author Name:</Text>
          <TextInput
            placeholder="Author Name"
            onChangeText={setAuthorName}
          />
        </View>
        <View>
          <Button
            title="Cancel"
            onPress={cleanForm}
          />
          <Button
            title="Save and Publish"
            onPress={handleCreatePost}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});