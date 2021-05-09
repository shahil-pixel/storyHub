import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity,Alert,KeyboardAvoidingView ,ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler'
import db from '../config';
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
        title:'',
        author:'',
        storytext:'',
        }
    }

    submitStory =async()=>{
        this.setState({
            title:this.state.inputTitle,
            author:this.state.inputAuthor,
            storytext:this.state.inputStory
        })

        db.collection("001").add({
        'title':this.state.title,
        'author':this.state.author,
        'storytext':this.state.storytext
        })

        ToastAndroid.show('Story submitted',ToastAndroid.SHORT)
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior= "padding" enabled>
            <View style={styles.container}>
                <Header 
                backgroundColor={'red'} 
                centerComponent={{text:'Story Hub',style:{color:'coral',fontSize:30}}}>
                </Header>

               <TextInput 
               placeholder="StoryTitle"
               onChangeText={(text)=>{
                   this.setState({
                   title:text
                   })
               }}
               value={this.state.title}
               style={styles.title}
               placeholderTextColor='black'/>

               <TextInput 
               placeholder="Author"
               onChangeText={(text)=>{
                   this.setState({
                   author:text
                   })
               }}
               value={this.state.author}
               style={styles.author}
               placeholderTextColor='black'/>

              <TextInput 
               placeholder="Write your story"
               onChangeText={(text)=>{
                   this.setState({
                   storyText:text
                   })
               }}
               value={this.state.storyText}
               style={styles.storyText}
               placeholderTextColor='black'
               multiline={true}/>

               <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
               <Text style={styles.buttonText}>submit</Text>
               </TouchableOpacity>

              
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'green',
},

title:{
height:40,
borderWidth:2,
marginTop:40,
margin:10,
color:'cyan',
padding:6,
},

author:{
height:40,
borderWidth:2,
margin:10,
padding:6,
},

storyText:{
height:40,
borderWidth:2,
margin:10,
padding:6,
},

submitButton:{
justifyContent:'center',
alignSelf:'center',
backgroundColor:'lime',
width:80,
height:40,
color:'maroon;,'
},

buttonText:{
textAlign:'center',
color:'white',
fontWeight:'bold',
color:'black',
},

})

