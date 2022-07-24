import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { notification } from "antd";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {

     if(e.target.name === 'name') {
        setName(e.target.value)
     }  if (e.target.name === 'email'){
            setEmail(e.target.value)
        } if(e.target.name === 'password'){
             setPassword(e.target.value)
        }
    }

    const register = async (e) =>{       
        try {
           const { status } = await axios({
                method: "POST",
                url: 'http://localhost:4000/user/register',
                data: {
                    name,
                    email,
                    password,
                },
            });
         if(status === 200){
            notification.success({
                message: 'Success',
                description: `User Register`,
            });
            setTimeout(() => {
                navigate("/");
            }, 2000)
            }else{
                throw new Error(`User don't register`)
            } 
        } catch (error) {
            console.log(`User don't register`)
            notification.error({
                message: "Error",
                description: `User don't register.`,
              });
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className=' px-16 py-12 mt-4 bg-white shadow-lg text-xl font-inter'>
                <h3 className='text-center text-3xl'>Register your Account</h3>
            <div className='mt-4'>
                <div>
                    <label className='block text-left'>Name</label>
                    <input 
                    name='name'
                    placeholder="Name"
                    type="text"
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600' 
                    value={name}
                    onChange={handleChange} />
                </div>
                <div className='mt-4'>
                    <label className='block text-left' htmlFor="email">Email</label> 
                    <input 
                    name='email'
                    placeholder="Email" 
                    type='text'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600' 
                    onChange={handleChange} 
                    value={email}
                    />
                </div>
                <div className='mt-4'>
                    <label className='block text-left'>Password</label>
                    <input type="password"
                    name='password'
                    value={password} 
                    placeholder='Password'
                    className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
                    onChange={handleChange} />
                </div>
                <div className='flex items-baseline justify-between'>
                    <button 
                    className='px-6 py-2 mt-4 text-white bg-blue-600 
                    rounded-lg hover:bg-blue-800'
                    onClick={register}
                    >
                        Register
                    </button>
                    <Link to='/' className=' text-blue-600 text-2xl hover:text-blue-800'>Cancel</Link>
                </div>
                </div> 
            </div>
        </div>
    )
}
export default Register