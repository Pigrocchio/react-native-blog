import React, { useContext}from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'

import {Context} from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);
    return (
      <View>
            <Text>CIAO</Text>
            <Button title="Add Post" onPress={() => addBlogPost()}/>
            <FlatList data={state} keyExtractor={(blogPost) => blogPost.title
            }
                renderItem={({ item }) => {
                    return (
                        <Text>{item.title}</Text>
                    )

                }}/>
      </View>
    );
}

export default IndexScreen

const styles = StyleSheet.create({})
