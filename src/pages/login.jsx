import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { StyledTextInput } from "../components/StyledTextInput";

const InitialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

export const LogInPage = () => {
    return(
        <Formik initialValues={InitialValues} onSubmit={v => console.log(v)}>
            {({handleChange, handleSubmit, values}) => {
                return (
                    <View style={styles.form}>
                        <StyledTextInput
                        placeholder='E-mail'
                        value={values.email}
                        onChangeText={handleChange('email')}
                        />
                        <StyledTextInput
                        placeholder='password'
                        value={values.password}
                        onChangeText={handleChange('password')}
                        />
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik>
    )
}