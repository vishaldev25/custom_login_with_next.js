import Link from "next/link"

const RegisterForm = () => {
  return (
    <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-500">
              <h1 className="text-xl font-bold my-4">Register</h1>
              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name.." />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                      Register
                </button>
                <div className="bg-red-500 text-white w-fit px-6 py-1 rounded-md mt-2">
                    Error Message
                </div>
                  <Link href={"/"} className="text-sm mt-3 text-right">
                      Already have an account? <span className="underline">Login</span>
                  </Link>
              </form>  
                 
      </div>
    </div>
  )
}

export default RegisterForm