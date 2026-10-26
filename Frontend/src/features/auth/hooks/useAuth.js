import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (!data?.user) throw new Error("The server did not return an account.")
            setUser(data.user)
            return data.user
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (!data?.user) throw new Error("The server did not return an account.")
            setUser(data.user)
            return data.user
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        await logout()
        setUser(null)
    }

    return { user, loading, handleRegister, handleLogin, handleLogout }
}