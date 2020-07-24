import React, {useContext} from 'react'
import { StyleSheet} from 'react-native'
import {Context, Provider} from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm";


export default function EditScreen({ route }) {
  const { state } = useContext(Context)
  const { id } = route.params; // get info from navigation.navigate
  
  const blogPost = state.find(x => {
  return x.id === id
  })



  

  return (
    <BlogPostForm
      initialValue={{ title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        console.log(title, content);
      }}
    />
  );
}

const styles = StyleSheet.create({})
