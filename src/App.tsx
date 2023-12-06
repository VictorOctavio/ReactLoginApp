import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Models
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/models/Routes.model";

// Guard
import { AuthGuard } from "@/guard/auth.guard"

// Pages
import PrivatePage from "./pages/private/PrivatePage";
import AuthPageContainer from "@/pages/public/AuthPage/AuthPageContainer";

// Components
import { ReactToast } from "./components/Toast/ReactToast.tsx";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Router>

        <ReactToast />

        <Routes>
           <Route path="" element={<Navigate replace to={`/${PRIVATE_ROUTES.dashboard}`}/>}  />

            <Route path={PUBLIC_ROUTES.auth} element={<AuthPageContainer/>}  />

            <Route element={<AuthGuard />}>
              <Route path={`/${PRIVATE_ROUTES.dashboard}/*`} element={<PrivatePage />}  />
            </Route>
        </Routes>  
      </Router> 
    </ Provider>
  )
}

export default App
