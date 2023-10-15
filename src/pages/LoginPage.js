import { View, Text, Pressable, TextInput, Alert } from "react-native"
import { useState } from "react"
import { createNewUser, loginUser } from "../functions/userhandler"
import { login } from "../styles/styles"

const LoginPage = ( { navigation } ) => {

    const [usernameText, onChangeUsernameText] = useState('')
    const [passwordText, onChangePasswordText] = useState('')

    const userLogin = async ( username, password ) => {
        try {
            const response = await loginUser(username, password)
            console.log(response)
            if (response === 403) {
                console.log("invalid username or password")
            } else {
                navigation.navigate('Home', { username: username })
            }
        } catch ( error ) {
            console.error(error)
        }
    }

    const createUser = async ( username, password ) => { 

        if (username.length < 5) {
            Alert.alert("Invalid username, your username must be at least 5 characters.")
            return
        }

        try {
            const response = await createNewUser(username, password)
            if ( response === 403 ) {
                Alert.alert('Username is already in use.')
            } else {
                Alert.alert('User created successfully!')
                navigation.navigate('Home', { username: username })
            }
        } catch ( error ) { 
            console.error(error)
        }
    }


    return (
        <View style={login.loginContainer}>
            <Text>Username:</Text>
            <TextInput
                style={login.textFieldContainer}
                onChangeText={onChangeUsernameText}
                value={usernameText}
            />
            <Text>Password:</Text>
            <TextInput
                style={login.textFieldContainer}
                onChangeText={onChangePasswordText}
                value={passwordText}
            />

            <Pressable onPress={() => userLogin(usernameText, passwordText)}>
                <Text style={login.loginButton}>Login</Text>
            </Pressable>

            <Pressable onPress={() => createUser(usernameText, passwordText)}>
                <Text style={login.loginButton}>Create User</Text>
            </Pressable>
        </View>
    )
}

export default LoginPage