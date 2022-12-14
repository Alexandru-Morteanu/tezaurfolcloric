import React,{ useState } from 'react'
import { useHistory,Link } from "react-router-dom"
import { Button,Form,Image } from "react-bootstrap"

const ScrollBar = () => {
    const [loadingIn, setLoadingIn] = useState(false)
    const [loadingUp, setLoadingUp] = useState(false)
    const history = useHistory()
  
    function handleSubmitIn() {
        setLoadingIn(true)
        history.push("/login")
        setLoadingIn(false)
    }
    function handleSubmitUp() {
      setLoadingUp(true)
      history.push("/signup")
      setLoadingUp(false)
    }
    return (
      <div className='d-flex justify-content-end w-100 bg-dark'
           style={{height : "fit-content"}}>
        <Link to="/" style={{cursor:"pointer"}}>
            <Image className='m-2'  src="logo192.png" width="60" height="60" href="www.google.com"/>
        </Link>
        <div className='d-flex justify-content-end align-items-center w-100'>
            <Form className='m-2' onSubmit={handleSubmitUp}>
            <Button disabled={ loadingUp } variant="outline-secondary" type="submit">
                Sign Up
            </Button>
            </Form>
            <Form className='m-2' onSubmit={handleSubmitIn}>
            <Button disabled={ loadingIn } variant="primary" type="submit">
                Sign In
            </Button>
            </Form>
        </div>
      </div>
    )
}

export default ScrollBar