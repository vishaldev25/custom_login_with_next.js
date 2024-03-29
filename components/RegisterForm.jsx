"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        
        if (!name || !email || !password) {
            setError("Please fill all the fields")
            return
        }
        try {
            const responseUserExists = await fetch("/api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email
                }),
            })

            const { user } = await responseUserExists.json()

            if (user) {
                setError("User already exists")
                return
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            }
            const response = await fetch("/api/register", options)
            if (response.ok) {
                const form = e.target
                form.reset()
                router.push("/")
            }
        } catch (error) {
            console.log("User Registration Failed")
        }
    }
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-500">
              <h1 className="text-xl font-bold my-4">Register</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input onChange={e => setName(e.target.value)} type="text" placeholder="Full Name.." />
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                      Register
                  </button>
                  {error && (
                    <div className="bg-red-500 text-white w-fit px-6 py-1 rounded-md mt-2">
                        {error}
                    </div>
                  )}
                
                  <Link href={"/"} className="text-sm mt-3 text-right">
                      Already have an account? <span className="underline">Login</span>
                  </Link>
              </form>  
      </div>
    </div>
  )
}

export default RegisterForm
