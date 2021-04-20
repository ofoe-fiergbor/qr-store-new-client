import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View>
            <Text>HOME</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Auth")}>
                <Text>HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
