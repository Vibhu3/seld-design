import React, {Component} from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
export default class WelcomeScreen extends Component {
    constructor(){
        super()
        this.state={
            emailId:'',
            password:','
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>GROCERY APP</Text>
                </View>
                <View>
                <TextInput
                style={styles.loginBox}
                placeholder="abc@example.com"
                keyboardType='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}/>
                 <TextInput
                style={styles.loginBox}
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                       password:text
                    })
                }}/>
                <TouchableOpacity
                style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
    </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{flex:1,backgroundColor:'red'},
    loginBox:{width:300,
        height:40,
  borderBottomWidth:1.5,
  borderColor:'#ff8865'  
    },
    button:{
        width:300, 
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#ff9800'

    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:50
    }
})