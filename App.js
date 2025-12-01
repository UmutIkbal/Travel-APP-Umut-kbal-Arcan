import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

    return (

        <NavigationContainer>
            <StatusBar style="auto" />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Navigation Ready!</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Navigation Ready!</Text>
            </View>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}