import React from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const {showPassword, setShowPassword} = React.useState(false);

const toggleShowPassword = () => {
  setShowPassword(!showPassword);
}

const Input = ({value, onChange, label, placeholder, type}) => {
  return (
    <div>
        <label className='text-[13px] text-slate-8800'>{label}</label>
        <div className='input-box'>
            <input type={type == "password" ? showPassword ? 'text' : 'password' : type } placeholder = {placeholder} className='w-full bg-transparent outline-none' value={value} onChange={(e) => onChange(e)}
            />
        </div>

        {type === "password" && (
          <>
            {showPassword ? (
                <FaRegEye 
                    size={22} 
                    className='text-primary cursor-pointer' 
                    onClick={() => toggleShowPassword()} 
                />
            ) : (
                <FaRegEyeSlash 
                    size={22} 
                    className='text-slate-400 cursor-pointer' 
                    onClick={() => toggleShowPassword()} 
                />
            )}      
          </>
        )}
    </div>
  )
}

export default Input