'use strict'
 const User = use('App/Models/User')
 const {validateAll} = use('Validator')

class UserController {
    async create ({ request,response }){
        try {

            const erroMessage ={
                'username.required': 'Campo Nome é Obrigratorio',
                'username.unique': 'Campo Nome já existe',
                'username.min': 'Campo Nome deve conte mais de 5 caracteres',
                'email.required': 'Campo email é Obrigratorio',
                'email.unique': 'Campo email já existe',
                'password.required': 'Campo senhar é Obrigratorio',
                'password.min': 'Campo senhar deve conte mais de 5 caracteres'

            }

            const validation = await validateAll(request.all(),{
                username: 'required|min:5|unique:users',
                email: 'required|email|unique:users',
                password:'required|min:6'
            },erroMessage)

            if(validation.fails()){
                return response.status(401).send({message: validation.messages()})
            }
            const data = request.only(["username","email","password"])

            const user = await User.create(data)

            return user
        } catch (err) {
            return response.status(500).send({ error: `Erro: ${err.message}`})
        }
    }
    async login({ request,response,auth }){
        try {
            const { email, password}= request.all()
            const validaToken = await auth.attempt(email,password)
            return validaToken
        } catch (err) {
            return response.status(500).send({ error: `Erro: ${err.message}`})
        }
    }
}

module.exports = UserController
