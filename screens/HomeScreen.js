import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from 'apsl-react-native-button';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native';
import owasp from 'owasp-password-strength-test';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false, error: '' }
        this.openJournal = this.openJournal.bind(this);
        this.createJournal = this.createJournal.bind(this);
        this.confirmNewJournal = this.confirmNewJournal.bind(this);

        this.journalData = {
            pwd: '',
            entries: { en: [] },
            currentEntryCount: 0
        };

        this.pwdRef = React.createRef();
        this.rePwdRef = React.createRef();
    }

    openJournal() {

    }

    createJournal() {
        this.setState({ modalVisible: true });
    }

    checkPwdStrength(pwd) {
        owasp.config({
            minLength: 8
        });
        let result = owasp.test(pwd);
        if (result.errors)
            return result.errors;
        else
            return null;
    }

    confirmNewJournal() {
        let pwd = this.pwdRef.current._lastNativeText;
        let conf = this.rePwdRef.current._lastNativeText;

        if (/^\s*$/.test(pwd) || !pwd) {
            this.setState({ error: 'Password cannot be empty.' });
            return;
        }
        if (pwd !== conf) {
            this.setState({ error: 'Passwords do not match.' });
            return;
        }
        
        let pwdStrength = this.checkPwdStrength(pwd);
        if (pwdStrength) {
            // Not secure enough
            this.setState({ error: pwdStrength[0] });
            return;
        }

        this.journalData.pwd = pwd;

        // Journal created. Show success message and move to entries screen.
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
                        <Text style={{marginBottom: 10, color: 'red'}}>
                            {this.state.error}
                        </Text>
                        <Text style={{ marginBottom: 20 }}>
                            Your journal will be encrypted. Please choose a strong password.
                        </Text>
                        <TextInput ref={this.pwdRef}
                            secureTextEntry={true} 
                            placeholder='Enter password'
                            style={styles.textInput} />
                        <TextInput ref={this.rePwdRef}
                            secureTextEntry={true} 
                            placeholder='Re-enter password'
                            style={styles.textInput} />
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Button title='OK' 
                                onPress={this.confirmNewJournal}
                                style={styles.okButton}
                                textStyle={{fontSize: 14, fontWeight: '500', color: 'rgb(42, 101, 132)'}}>
                                OK
                            </Button>
                            <Button onPress={() => {this.setState({ modalVisible: false });}}
                                style={styles.cancelButton}
                                textStyle={{fontSize: 14, fontWeight: '500', color: 'red'}}>
                                Cancel
                            </Button>
                        </View>
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
        backgroundColor: 'white',
        padding: 20
    },
    textInput: {
        height: 40,
        marginBottom: 10
    },
    okButton: {
        width: 80,
        borderRadius: 0,
        borderWidth: 2,
        borderColor: 'rgb(42, 101, 132)',
        padding: 5,
    },
    cancelButton: {
        width: 80,
        borderRadius: 0,
        borderWidth: 2,
        borderColor: 'red',
        padding: 5,
    }
};

export default HomeScreen;