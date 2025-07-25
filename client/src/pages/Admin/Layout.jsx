import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {

    const {axios,setToken, navigate} = useAppContext()

    const logout = async ()=>{
      localStorage.removeItem('token');
      axios.defaults.headers.common['Authorization'] = null;
      setToken(null)
      navigate('/')
    }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer'/>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
      </div>

      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>

        {/* outlet will add child components for routing */}
        <Outlet/>
      </div>
    </>
  )
}

export default Layout
