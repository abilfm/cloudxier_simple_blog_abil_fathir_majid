import React from "react";
import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  Button
} from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../store/actions/postsAction"

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const { posts, error, loading } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {error}</Text>

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text style={{ fontSize: 30, fontWeight: "bold"}}>
          Recent Articles
        </Text>
        <Button
          title="Create New Post"
          onPress={() => 
            navigation.navigate("CreatePost")
          }
        />
        <ScrollView>
          {
            posts.map((post) => (
              <View
                key={post.id}
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: post.image_url }}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>{post.title}</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold", fontStyle:"italic"}}>{post.author_name}</Text>
                <Button
                  title="View More"
                  onPress={() => 
                    navigation.navigate("DetailPost", { id: post.id })
                  }
                />
              </View>
            ))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
