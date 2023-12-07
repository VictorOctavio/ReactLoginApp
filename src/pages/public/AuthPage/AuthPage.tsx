import { InputComponent } from "@/components/InputComponent";
import "./authpage.css";
import { AuthModel } from "@/models/Auth.model"

interface AuthPageProps {
  login: boolean
  forgotPassowrd: boolean
  setForgotPassowrd: React.Dispatch<React.SetStateAction<boolean>>;
  handlerSetLogin: () => void;
  handlerChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hanlderSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  signinWithGoogle: () => void;
  authUser: AuthModel
}

export const AuthPage: React.FC<AuthPageProps> = ({
  login, forgotPassowrd, setForgotPassowrd, handlerSetLogin, handlerChangeUser, hanlderSubmit, loading, signinWithGoogle, authUser
}) => {

  return (
    <section className="h-screen">
      <div className="h-full wrapper">
        <div className="g-6 h-full contentWrapper">
        
          <div>
            <img
              src="/logotype.png"
              className="m-auto"
              alt="Phone image" 
              />
          </div>

          <div className="">
            <h3 className="mb-7 text-3xl font-bold">
              {login ? (
                !forgotPassowrd ? "Iniciar Sesion":"Recuperar Contrasena" 
              ) : "Registro"}
            </h3>
            <form onSubmit={hanlderSubmit}>
                
              <InputComponent 
                label="Email" name="email" type="email" eventChange={handlerChangeUser} value={authUser.email}
              />
              
              {!forgotPassowrd && (
                <InputComponent 
                    label="Contrasena" name="password" type="password" eventChange={handlerChangeUser} value={authUser.password}
                />
              ) }
              
              <div className="mb-6 flex items-center justify-between">
              
                <button onClick={() => handlerSetLogin()} type="button">
                  {login  ? "No tengo cuenta" : "Ya tengo cuenta"}
                </button>
                
                {login && <button type="button" onClick={()=>setForgotPassowrd(!forgotPassowrd)}>Olvidaste tu clave?</button>}

              </div>

              <button
                type="submit"
                className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
                style={{
                  backgroundColor: "rgb(9,9,9)"
                }}
                disabled={loading}
              >
                  {login ? (
                    !forgotPassowrd ? "Ingresar":"Iniciar Recuperacion" 
                  ) : "Crear Cuenta"}
              </button>

        
              <div
                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p
                  className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              <button
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white"
                style={{
                  backgroundColor: "#fff",
                  color: "#000"
                }}
                onClick={signinWithGoogle}
                type="button">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                Continuar con Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
