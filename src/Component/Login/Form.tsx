import styled from "styled-components"
import { Theme, ThemeProps } from "../../Constants/Theme"
import { useContext } from "react"
import { LoginContext } from "../../Controller/LoginController"

const Input = styled.input((props: { theme: Theme, formType?: 'login' | 'signup' }) => ({
    padding: props.formType && props.formType === 'login' ? 0 : '0.5em',
    border: props.formType && props.formType === 'login' ? `0 solid ${props.theme.shade}` : `2px solid ${props.theme.shade}`,
    marginBlock: props.formType && props.formType === 'login' ? '0' : '1em',
    width: props.formType && props.formType === 'login' ? '0%' : '100%',
    transition: 'all 500ms',
    opacity: props.formType && props.formType === 'login' ? 0 : 1,
    height: props.formType && props.formType === 'login' ? 0 : 'fit-content'
}))

const Button = styled.button((props: ThemeProps) => ({
    border: '0',
    padding: '1em 2em',
    marginBlock: '1em',
    width: '100%',
    fontWeight: '800',
    backgroundColor: props.theme.primary,
    borderRadius: 8
}))

const Container = styled.div({
    width: '85%',
    margin: '0 auto',
})

const Subtitle = styled.div({
    marginBlock: '2em',
    textAlign: 'center'
})

const Toggler = styled.button({
    background: 'transparent',
    border: '0',
    fontSize: '1rem',
    fontWeight: 700
})

function Form(): JSX.Element {

    const context = useContext(LoginContext)

    if (!context) return <></>

    const subtitle = {
        'login': `Don't have an account account?`,
        'signup': 'Already have an account?'
    }

    const subtitleLink = {
        'login': 'Register now',
        'signup': 'Login'
    }

    return (
        <Container>
            <Input
                value={context.values.email}
                onChange={context.handleChange}
                placeholder="Enter Email"
            />
            <Input
                value={context.values.name}
                onChange={context.handleChange}
                placeholder="Enter Name"
                formType={context.values.type}
            />
            <Input
                value={context.values.password}
                onChange={context.handleChange}
                placeholder="Password"
            />
            <Input
                formType={context.values.type}
                value={context.values.confirmPassword}
                onChange={context.handleChange}
                placeholder="Confirm Password"
            />
            <Button>
                {context.values.type.toUpperCase()}
            </Button>
            <Subtitle>
                <p>{subtitle[context.values.type]}</p>
                <Toggler
                    onClick={() => context.setFieldValue('type', context.values.type === 'login' ? 'signup' : 'login')}
                >
                    {subtitleLink[context.values.type]}
                </Toggler>
            </Subtitle>
        </Container>
    )
}

export default Form
