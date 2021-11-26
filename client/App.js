import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./src/screens/Home.js"
import DetailPostScreen from "./src/screens/DetailPost.js"
import CreatePostScreen from "./src/screens/CreatePost.js"

const Stack = createNativeStackNavigator()

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomeScreen }
          options={{ title: "Recent Articles" }}
        />
        <Stack.Screen
          name="DetailPost"
          component={ DetailPostScreen }
          options={{ title: "Detail Post" }}
        />
        <Stack.Screen
          name="CreatePost"
          component={ CreatePostScreen }
          options={{ title: "Create New Post" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
