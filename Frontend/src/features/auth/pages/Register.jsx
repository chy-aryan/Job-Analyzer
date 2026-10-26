import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const {loading,handleRegister} = useAuth()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await handleRegister({ username: username.trim(), email: email.trim(), password })
            navigate("/", { replace: true })
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                (requestError.code === "ERR_NETWORK"
                    ? "Can't reach the server. Check your connection and try again."
                    : requestError.message || "Unable to create your account. Please try again.")
            )
        }
    }

    return (
        <main className="auth-page">
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={username}
                            onChange={(e) => { setUsername(e.target.value); setError("") }}
                            type="text" id="username" name='username' placeholder='Enter username' autoComplete="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError("") }}
                            type="email" id="email" name='email' placeholder='Enter email address' autoComplete="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError("") }}
                            type="password" id="password" name='password' placeholder='Enter password' autoComplete="new-password" required />
                    </div>

                    {error && <p className="form-error" role="alert">{error}</p>}
                    <button className='button primary-button' disabled={loading}>
                        {loading ? "Creating account..." : "Create account"}
                    </button>

                </form>

                <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
            </div>
        </main>
    )
}

export default Register