import React,{ useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  //Handle Login form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };
  
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Selamat Datang Kembali</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Silahkan Masukkan Akun kamu untuk Masuk</p>

        <form onSubmit={handleLogin}>
          <input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder='john@example.com'
            type='email'
          />
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login