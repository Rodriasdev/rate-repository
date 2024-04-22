import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
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

const FormikInput = ({name, ...props}) => {

    const [field, meta, helpers] = useField(name)

    return(
        <StyledTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
    )
}

export const LogInPage = () => {
    return(
        <Formik initialValues={InitialValues} onSubmit={v => console.log(v)}>
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