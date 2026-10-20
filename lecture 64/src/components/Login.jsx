import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate=useNavigate();
    function AfterS(e){
        e.preventDefault();
        navigate("/dashboard")
    }
   
  return (
    <>
    <form onSubmit={AfterS}>
    <label htmlFor="name">Enter your name : </label>
    <input type="text" name='name' id='name'/>
    <button>Submit</button>
    </form>
    </>
  )
}

export default Login