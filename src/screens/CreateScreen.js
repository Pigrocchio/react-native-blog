import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
import { useNavigation } from "@react-navigation/native";


export default function CreateScreen() {
  const navigation = useNavigation();

  const { addBlogPost } = useContext(Context)

  return (
    <BlogPostForm onSubmit={(title, content) => {
      addBlogPost(title, content, () => navigation.navigate("Index")
      )
    }} />
  )
}
const styles = StyleSheet.create({

})
