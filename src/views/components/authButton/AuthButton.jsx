import React from 'react'
import { Button } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import styles from './styles'

const AuthButton = ({onPress, btnStyle}) => {
    return (
        <Button
        mode="contained"
        style={[styles.button, btnStyle]}
        onPress={() => onPress()}
      >
        <AntDesign name="arrowright" size={24} color='#fff' />
      </Button>
    )
}

export default AuthButton
