import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import { StyledTextInput } from "../components/StyledTextInput";
import { StyledText } from "../components/StyledText";
import { loginValidationSchema } from "../validatorSchemas/login.js";

const InitialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 15,
        marginBottom: 20,
        marginTop: -5
    }
})

const FormikInput = ({name, ...props}) => {

    const [field, meta, helpers] = useField(name)

    return(
        <>
            <StyledTextInput
            error={meta.error}
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}/>
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>

    )
}


export const LogInPage = () => {
    return(
        <Formik validationSchema={loginValidationSchema} initialValues={InitialValues} onSubmit={v => console.log(v)}>
            {({handleSubmit}) => {
                return (
                    <View style={styles.form}>
                        <FormikInput
                        name='email'
                        placeholder='E-mail'
                        />
                        <FormikInput
                        name='password'
                        placeholder='Password'
                        secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik>
    )
}