import { useCallback, useRef } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'

import { Flex, Heading, Image } from '@chakra-ui/react'

import { Form } from '@unform/web'
import * as Yup from 'yup'

import LogoImg from '~/assets/logo.svg'

import Button from '~/components/Button'
import Input from '~/components/Input'

import getValidationErrors from '~/utils/getValidationErrors'

interface LoginForm {
  email: string
  password: string
}
function Login() {
  const formRef = useRef(null)
  const handleSubmit = useCallback(async (data: LoginForm) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email Obrigatório').email(),
        password: Yup.string().required('Senha Obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      formRef.current?.setErrors([])
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  }, [])
  return (
    <Flex h="100vh" w="100vw" align="center" justify="center" bg="#312e38">
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        w="100%"
        maxW="700"
      >
        <Image as={LogoImg} />

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ margin: '80px 0', width: 340, textAlign: 'center' }}
        >
          <Heading marginBottom="24px" color="#f4ede8">
            Faça Seu Login
          </Heading>

          <Input
            name="email"
            placeholder="Email"
            _focus={{ borderColor: '#ff9000' }}
            icon={FiMail}
          />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            _focus={{ borderColor: '#ff9000' }}
            icon={FiLock}
          />
          <Button _hover={{ bg: 'orange_primary.700' }} type="submit">
            Entrar
          </Button>
        </Form>
      </Flex>
    </Flex>
  )
}

export default Login
