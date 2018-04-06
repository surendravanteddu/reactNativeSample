import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const {viewStyle, textStyle} = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor : '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.9,
        shadowOffset: {
            height: 5,
            width: 0
        },
        elevation: 2
        
    },
    textStyle :{
        fontSize: 20
    }
});

export default Header;