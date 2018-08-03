import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const App = createStackNavigator({
    Home: { screen: HomeScreen }
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
    }
});

export default App;