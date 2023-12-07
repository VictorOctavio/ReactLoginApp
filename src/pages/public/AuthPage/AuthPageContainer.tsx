import { useState } from 'react'
import { AuthPage } from './AuthPage'
import { AuthModel } from '@/models/Auth.model'

// Services
import { loginUserService } from "@/services/auth.service"

// Hook
import useFetchAndLoader from '@/hooks/useFetchAndLoader'
import { userAdapter } from '@/adapters/user.adapter'

// Redux
import { useDispatch } from "react-redux"
import { signin, signup } from '@/redux/user/UserSlice'

// React router dom
import { useNavigate } from 'react-router-dom'
import { PRIVATE_ROUTES } from '@/models/Routes.model'
import { managerNotifications } from '@/components/Toast/ReactToast'

export default function AuthPageContainer() {

  // States
  const [login, setLogin] = useState<boolean>(true)
  const [forgotPassowrd, setForgotPassowrd] = useState<boolean>(false)
  const [authUser, setAuthUser] = useState<AuthModel>({
    email: "Julianne.OConner@kory.org",
    password: "",
    login
  });

  // Initialize useFectch & Redux
  const { loading, callEndpoint  } = useFetchAndLoader();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    // Validate inputs
    if(!validateInput()) return;

    const callServie = loginUserService(authUser);
    const data = await callEndpoint(callServie);

    // verify user found
    if(data.length <= 0) return managerNotifications.error("User not found");

    const user = userAdapter(data[0]);

    if(forgotPassowrd) return;
    

    if(login) dispatch(signin(user));
    else dispatch(signup(user));

    navigate(`/${PRIVATE_ROUTES.dashboard}`, {
      replace: true
    })
  }

  const signinWithGoogle = () => {
    managerNotifications.error("This function is disabled")
    return;
  }

  const validateInput= () => {
    if(!authUser.email.trim() || !authUser.password.trim() ){
      managerNotifications.error("All fields are required ")
      return false;
    }

    return true;
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
      signinWithGoogle={signinWithGoogle}
      authUser={authUser}
    />
  )
}
