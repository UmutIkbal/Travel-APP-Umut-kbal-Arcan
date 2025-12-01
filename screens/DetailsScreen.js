import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />

            <Button title="Go to Paris"
                onPress={() => navigation.navigate('Details',
                    { place: 'Paris', rating: 5 })} />
            <Button title="Go to London"
                onPress={() => navigation.navigate('Details',
                    { place: 'London', rating: 4 })} />
        </View>
    )
}

export default HomeScreen