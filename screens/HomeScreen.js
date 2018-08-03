import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
    constructor() {
        super();
        this.openJournal = this.openJournal.bind(this);
    }

    openJournal() {

    }

    render() {
        return (
            <View>
                <View style={styles.view}>
                    <Text style={styles.header}>Let's start by opening your journal.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.openJournal}>
                        <Text style={styles.button}>OPEN JOURNAL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    header: {
        marginTop: '20%',
        marginBottom: '30%',
        fontFamily: 'sans-serif-thin',
        color: 'purple',
        fontSize: 36
    },
    view: {
        marginRight: 15,
        marginLeft: 15
    },
    buttonContainer: {
        marginLeft: '25%',
        marginRight: '25%'
    },
    button: {
        color: 'rgb(42, 101, 132)',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    }
};

export default HomeScreen;