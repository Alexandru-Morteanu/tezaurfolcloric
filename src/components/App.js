import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from "./Home"

function App() {
  return (
    <div className="d-flex justify-content-center w-100"
         style={{height: "100vh"}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                  >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                      <PrivateRoute path="/dashboard" component={Dashboard} />
                      <PrivateRoute path="/update-profile" component={UpdateProfile} />
                      <Route path="/signup" component={Signup} />
                      <Route path="/login" component={Login} />
                      <Route path="/forgot-password" component={ForgotPassword} />
                    </div>
                  </Container>
                </Switch>
              </AuthProvider>
            </Router>
      </div>
  )
}

export default App
