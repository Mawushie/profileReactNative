import React from 'react'
import {SafeAreaView, Text, StyleSheet, Image, View, TextInput, TouchableOpacity} from 'react-native'

const ProfileScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.imageContainer}>
               <Image style={styles.image} source = {require('../../assets/claire.png')}></Image>
            </View>

            <View style = {styles.detailsContainer}>
                <View style = {styles.details}>
                    <Text style = {styles.label1}>School</Text>
                    <Text style = {styles.detailsContent}>San Jose St. Bonaventure</Text>
                </View>

                <View style = {styles.details}>
                    <Text style = {styles.label1}>Email Address</Text>
                    <Text style = {styles.detailsContent}>drclairebrowne@gmail.com</Text>
                </View>

                <View style = {styles.details}>
                    <Text style = {styles.label2}>Name</Text>
                    <Text style = {styles.detailsContent}>Daniel Rozar</Text>
                    <View style = {styles.line}></View>
                </View>
                    
                <View style = {styles.details}>
                    <Text style = {styles.label2}>Nick Name</Text>
                    <Text style = {styles.detailsContent}>r.denial</Text>
                    <View style = {styles.line}></View>
                </View>

                <View style = {styles.details}>
                    <Text style = {styles.label2}>Emergencey Contact</Text>
                    <Text style = {styles.detailsContent}>+1-987654321</Text>
                    <View style = {styles.line}></View>
                </View>
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button}>
                    <Text>UPDATE PROFILE</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 40,
    },

    imageContainer : {
        flex : 0.3,
        alignItems : 'center',
        justifyContent : 'center'  
    },

    image: {
        marginTop: 10,
        width : 120,
        height : 120,
        borderRadius : 100
    },

    detailsContainer : {
        flex : 0.5,
        marginBottom : 0
    },

    details : {
        marginVertical : 10
    },

    label1 : {
        color : 'grey',
        fontSize : 15
    },

    label2 : {
        color : '#27b4e4',
        fontSize : 15
    },

    detailsContent : {
        fontSize : 18,
        marginVertical : 6
    },

    line : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgray'
    },

    buttonContainer : {
        flex : 0.2,
        justifyContent : 'center',
        alignItems : 'center'
    },

    button : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : 60,
        borderRadius : 50,
        backgroundColor : '#27b4e4' 
    }
})



export default ProfileScreen
