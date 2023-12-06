import "./authpage.css";

interface AuthPageProps {
  login: boolean
  forgotPassowrd: boolean
  setForgotPassowrd: React.Dispatch<React.SetStateAction<boolean>>;
  handlerSetLogin: () => void;
  handlerChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hanlderSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean
}

export const AuthPage: React.FC<AuthPageProps> = ({
  login, forgotPassowrd, setForgotPassowrd, handlerSetLogin, handlerChangeUser, hanlderSubmit, loading
}) => {

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24 wrapper">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="/logotype.png"
              className="w-full"
              alt="Phone image" 
              />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <h3 className="mb-7 text-3xl font-bold">
              {login ? (
                !forgotPassowrd ? "Iniciar Sesion":"Recuperar Contrasena" 
              ) : "Registro"}
            </h3>
            <form onSubmit={hanlderSubmit}>
        
              <div className="relative mb-6">
                <input
                  type="email"
                  className=" block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Email address" 
                  name="email"
                  onChange={handlerChangeUser}
                  />
                <label
                  htmlFor="exampleFormControlInput3"
                  className="text-xs pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] "
                  style={{
                    backgroundColor: "#0f0f0f",
                    top: "-7px"
                  }}
                  >Email
                </label>
              </div>

                  
              <div className={`${forgotPassowrd ? 'hidden': 'block'} relative mb-6`}>
                <input
                  type="password"
                  className=" block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Password" 
                  name="password"
                  onChange={handlerChangeUser}
                  />
                <label
                  htmlFor="exampleFormControlInput33"
                  className="text-xs pointer-events-none absolute left-3 top-1 mb-0 max-w-[90%] origin-[0_0]"
                  style={{
                    backgroundColor: "#0f0f0f",
                    top: "-7px"
                  }}
                  >Contrasena
                </label>
              </div>
              
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
                  backgroundColor: "tomato"
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

              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white"
                style={{
                  backgroundColor: "#fff",
                  color: "#000"
                }}
                href="#!"
                role="button">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                Continuar con Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
