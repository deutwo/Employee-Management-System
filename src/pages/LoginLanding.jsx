import LoginLeftSide from '../components/loginleftside'
import LoginSide from '../components/loginside'

const LoginLanding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide/>
      <LoginSide/>
    </div>
  )
}

export default LoginLanding