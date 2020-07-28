import React, {useContext} from 'react'
import { StyleSheet} from 'react-native'
import {Context, Provider} from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm";
import { useNavigation } from "@react-navigation/native";


export default function EditScreen({ route }) {
    const navigation = useNavigation();

  const { state, editBlogPost } = useContext(Context)
  const { id } = route.params; // get info from navigation.navigate

  const blogPost = state.find(x => {
  return x.id === id
  })



  

  return (
    <BlogPostForm
      initialValue={{ title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id,title, content, ()=> navigation.pop());
      }}
    />
  );
}

const styles = StyleSheet.create({})
