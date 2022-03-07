import React from "react";
import { Routes,Route,Navigate} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage"

const PrivateRoute = ({ children })=>{
  const isLogin = !!localStorage.getItem("username")
  return isLogin ? children : <Navigate to="/" />
}
const PublicRoute = ({ children })=>{
  const isLogin = !!localStorage.getItem("username")
  return isLogin ? <Navigate to="/home" /> : children 
}

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }/>

        <Route path="/home" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }/>
      </Routes>
    </Provider>
  );
}

export default App;
