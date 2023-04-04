import { useContext } from "react"
import styled from "styled-components"
import { LoginContext, LoginForm } from "../Controller/LoginController"
import { ThemeProps } from "../Constants/Theme"
import Form from "../Component/Login/Form"
import { FormikProps } from "formik"

const Container = styled.div({
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
})

const BackgroundWrapper = styled.div((props: ThemeProps) => ({
    backgroundColor: props.theme.light,
    paddingInline: '1em',
    paddingBlock: '3em',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
}))

const Heading = styled.h1({
    textTransform: 'capitalize',
    textAlign: 'center'
})

const Subtitle = styled.h3({
    textAlign: 'center',
    fontWeight: '200',
    fontSize: '0.85rem',
    marginTop: '1em',
    marginBottom: '2em'
})

function LoginView(): JSX.Element {

    const context = useContext<FormikProps<LoginForm> | null>(LoginContext)

    const subtitleContent = {
        'login': 'Hey, enter your details to sign in to your account',
        'signup': 'Hey, enter your details to get you started',
    }


    return (
        <Container>
            <BackgroundWrapper>
                {context ? <>
                    <Heading>{context.values.type}</Heading>
                    <Subtitle>
                        {context ? subtitleContent[context?.values.type] : 'loading...'}
                    </Subtitle>
                    <Form />
                </> : <h2>Loading...</h2>}
            </BackgroundWrapper>
        </Container>
    )
}

export default LoginView
