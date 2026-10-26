import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await handleLogin({ email: email.trim(), password })
            navigate('/', { replace: true })
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                (requestError.code === "ERR_NETWORK"
                    ? "Can't reach the server. Check your connection and try again."
                    : requestError.message || "Unable to sign in. Please try again.")
            )
        }
    }


    return (
        <main className="auth-page">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
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
                            type="password" id="password" name='password' placeholder='Enter password' autoComplete="current-password" required />
                    </div>
                    {error && <p className="form-error" role="alert">{error}</p>}
                    <button className='button primary-button' disabled={loading}>
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
                <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
            </div>
        </main>
    )
}

export default Login