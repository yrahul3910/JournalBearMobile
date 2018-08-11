import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import EntriesScreen from '../screens/EntriesScreen';

const Navigator = createStackNavigator({
    Home: HomeScreen,
    Entries: EntriesScreen
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'rgb(42, 101, 132)',
            shadowOpacity: 0,
            shadowColor: 'rgb(42, 101, 132)',
            shadowOffset: {
                height: 0
            },
            shadowRadius: 0,
            elevation: 0
        },
        headerTitle: 'JournalBear',
        headerTintColor: 'white'
    },
    initialRouteName: 'Home'
});

export default Navigator;