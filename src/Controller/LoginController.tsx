import { createContext, useState } from "react"
import LoginView from "../Views/LoginView"
import { Formik, FormikProps } from "formik"

export interface LoginForm {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
    type: 'login' | 'signup'
}

export const LoginContext = createContext<FormikProps<LoginForm> | null>(null)

function LoginController(): JSX.Element {

    const initialValues: LoginForm = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        type: 'login'
    }

    const submitHandler = () => {

    }


    return <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {(props: FormikProps<LoginForm>) => (
            <LoginContext.Provider value={props}>
                <LoginView />
            </LoginContext.Provider>
        )}
    </Formik>
}

export default LoginController
