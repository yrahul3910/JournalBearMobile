import React from 'react';
import { View } from 'react-native';
import FAB from 'react-native-fab';

class EntriesScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null,  // remove back button
        title: 'Entries'
    };

    constructor(props) {
        super(props);
        this.journalData = this.props.navigation.getParam('journalData');
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                
                <FAB />
            </View>
        );
    }
}

export default EntriesScreen;