import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Models
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/models/Routes.model";

// Guard
import { AuthGuard } from "@/guard/auth.guard"

// Pages
import PrivatePage from "./pages/private/PrivatePage";
import AuthPageContainer from "@/pages/public/AuthPage/AuthPageContainer";

// Components

function App() {
  return (
    <>
      <Router>
        <Routes>

            <Route path={PUBLIC_ROUTES.auth} element={<AuthPageContainer/>}  />

            <Route path={`${PRIVATE_ROUTES.dashboard}/*`} element={<AuthGuard />}>
              <Route path={PRIVATE_ROUTES.dashboard} element={<PrivatePage />}  />
            </Route>
            
        </Routes>  
      </Router> 
    </>
  )
}

export default App
