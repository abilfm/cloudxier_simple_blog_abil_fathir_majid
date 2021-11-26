import React from "react"
import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image 
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchSinglePost } from "../store/actions/singlePostAction"

export default function DetailPost({ route }) {
  const dispatch =  useDispatch()
  const { id } = route.params
  const { singlePost, loading, error } = useSelector((state) => state.singlePost)

  useEffect(() => {
    dispatch(fetchSinglePost(id))
  }, [id])

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection:  "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          <Image
            style={{ width: 300, height: 200 }}
            source={{ uri: singlePost.image_url}}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold"}}>{singlePost.title}</Text>
          <Text>{singlePost.content}</Text>
        </View>
      </ScrollView>
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