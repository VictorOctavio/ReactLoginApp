import { useState } from 'react'
import { AuthPage } from './AuthPage'
import { AuthModel } from '@/models/Auth.model'

// Services
import { loginUserService } from "@/services/auth.service"

// Hook
import useFetchAndLoader from '@/hooks/useFetchAndLoader'
import { userAdapter } from '@/adapters/user.adapter'

export default function AuthPageContainer() {

  // States
  const [login, setLogin] = useState<boolean>(true)
  const [forgotPassowrd, setForgotPassowrd] = useState<boolean>(false)
  const [authUser, setAuthUser] = useState<AuthModel>({
    email: "",
    password: "",
    login
  });

  // Initialize useFectch 
  const { loading, callEndpoint  } = useFetchAndLoader();

  // Handlers 
  const handlerSetLogin = () => {
    setForgotPassowrd(false);
    setLogin(!login);
  }

  // Handlers signin uer
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthUser({
      ...authUser,
      [e.target.name]: e.target.value
    })
  }

  // Submit
  const hanlderSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const callServie = loginUserService(authUser);
    const data = await callEndpoint(callServie);


    const user = userAdapter(data);

    console.log('first', user)
    if(forgotPassowrd) return alert("forgot passowrd")
    if(login) return alert("login")
    alert("Registro")
  }

  return (
    <AuthPage
      login={login}
      setForgotPassowrd={setForgotPassowrd}
      forgotPassowrd={forgotPassowrd}
      handlerSetLogin={handlerSetLogin}
      handlerChangeUser={handleChangeUser}
      hanlderSubmit={hanlderSubmit}
      loading={loading}
    />
  )
}
