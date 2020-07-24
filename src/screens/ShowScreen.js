import React, {useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Context} from '../context/BlogContext'
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";



const ShowScreen = ({ route }) => {
    const navigation = useNavigation();

  const { state } = useContext(Context);
  const { id } = route.params; // get info from navigation.navigate

  const blogPost = state.find(blogPost => {
  return blogPost.id === id
});

   navigation.setOptions({
     headerRight: () => (
       <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: id})}>
         <EvilIcons name="pencil" size={30} />
       </TouchableOpacity>
     ),
   });
  
  
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};


export default ShowScreen

const styles = StyleSheet.create({})
