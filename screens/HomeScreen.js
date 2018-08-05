import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false }
        this.openJournal = this.openJournal.bind(this);
        this.createJournal = this.createJournal.bind(this);
    }

    openJournal() {

    }

    createJournal() {
        this.setState({ modalVisible: true });
    }

    render() {
        return (
            <View style={styles.parent}>   
                <Modal isVisible={this.state.modalVisible}
                    onBackButtonPress={() => {
                        this.setState({ modalVisible: false });
                    }}
                    onBackdropPress={() => {
                        this.setState({ modalVisible: false });
                    }}>
                    <View style={styles.modal}>
                        <Text>Your journal will be encrypted. Please choose a strong password.</Text>
                        <TextInput secureTextEntry={true} placeholder='Enter password' />
                        <TextInput secureTextEntry={true} placeholder='Re-enter password' />
                        <Button title='OK' onPress={() => {console.log('pressed')}} />
                        <Button title='Cancel' onPress={() => {console.log('pressed')}} />
                    </View>
                </Modal>
                <View style={styles.view}>
                    <Text style={styles.header}>Welcome</Text>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={styles.listItem}>
                        <TouchableOpacity style={styles.opacityStyle} onPress={this.openJournal}>
                            <Text style={styles.listText}>Open an existing journal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listItem}>
                        <TouchableOpacity style={styles.opacityStyle} onPress={this.createJournal}>
                            <Text style={styles.listText}>Create a new journal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.footerText}>JournalBear for Android v1.0</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    header: {
        marginTop: 20,
        fontFamily: 'sans-serif-thin',
        color: 'purple',
        fontSize: 36
    },
    view: {
        marginRight: 15,
        marginLeft: 15
    },
    button: {
        color: 'rgb(42, 101, 132)',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    listItem: {
        height: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    listText: {
        fontSize: 16,
        marginLeft: 20
    },
    opacityStyle: {
        backgroundColor: '#DDD',
        paddingVertical: 16  // (50 - 16) / 2 - 1
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        minHeight: 50,
        height: 50,
        width: '100%',
        backgroundColor: 'rgb(42, 101, 132)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    parent: {
        position: 'relative',
        height: '100%'
    },
    footerText: {
        color: 'white',
        fontWeight: '300'
    },
    modal: {
        backgroundColor: 'white'
    }
};

export default HomeScreen;