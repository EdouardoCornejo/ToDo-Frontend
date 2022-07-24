import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className=' px-16 py-12 mt-4 bg-white shadow-lg text-xl font-inter'>
                <h3 className='text-center text-3xl'>Login to your Account</h3>
                <form action="">
                   <div className='mt-4'>
                       <div>
                          <label className='block text-left' htmlFor="email">Email address</label> 
                          <input 
                          type="text" 
                          name='email'
                          className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none 
                          focus:ring-1 focus:ring-blue-600' 
                          />
                       </div>
                       <div className='mt-4'>
                           <label className='block text-left'>Password</label>
                           <input 
                           type="password" 
                           name='password'
                           className='w-full px-4 py-2 mt-2 border rounded-md 
                           focus:outline-none focus:ring-1 focus:ring-blue-600'
                           />
                       </div>
                       <div className='flex items-baseline justify-between'>
                            <button className='px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-800'>
                                Login
                            </button>
                            <Link to='/Register' className='text-blue-600 text-2xl hover:text-blue-800'>Register</Link>
                       </div>
                       </div> 
                </form>
            </div>
           
        </div>
    )
}

export default Login