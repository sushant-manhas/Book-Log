import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function LoginButtons() {
  return (
    <>
      <Link to="/login">
        <Button flex={1}>
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button variant='outline' flex={1}>
          Sign Up
        </Button>
      </Link>
    </>
  )
}

export default LoginButtons