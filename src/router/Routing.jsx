import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicLayout } from '../components/layouts/public/PublicLayout';
import { PrivateLayout } from '../components/layouts/private/PrivateLayout';
import { Login } from '../components/user/Login';
import { Register } from '../components/user/Register';
import { Feed } from '../components/publication/Feed';
import { People } from '../components/user/People';
import { Config } from '../components/user/Config';
import { Error404 } from "../components/layouts/Error404";
import { AuthProvider } from "../context/AuthProvider";
import { Logout } from '../components/user/Logout';

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout></PublicLayout>}>
            <Route index element={<Login></Login>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Route>

          <Route path="/rsocial" element={<PrivateLayout></PrivateLayout>}>
            <Route index element={<Feed></Feed>}></Route>
            <Route path="feed" element={<Feed></Feed>}></Route>
            <Route path="gente" element={<People></People>}></Route>
            <Route path="ajustes" element={<Config></Config>}></Route>
            <Route path="logout" element={<Logout></Logout>}></Route>
          </Route>

          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
