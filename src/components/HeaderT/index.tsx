import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { LuLanguages } from 'react-icons/lu'
import { TbGridDots } from 'react-icons/tb'
import  { FaRegUserCircle } from 'react-icons/fa'
import { BiMessageRounded } from 'react-icons/bi'
import Graph from "../Graph"
import Linha from "../Linha"


function HeaderT() {
  return (
    
    <div className="flex flex-col w-screen bg-white p-4">

    <div className="flex w-100px p-5 justify-between">
      <div className="flex item-center gap-4 text-2xl">
        <AiOutlineMenu />
        <AiOutlineSearch />
      </div>

      <div className="flex item-center gap-4 text-2xl">
      <IoIosNotificationsOutline />
      <AiOutlineShoppingCart />
      <LuLanguages />
      <TbGridDots />
      <FaRegUserCircle />
      </div>
    </div>



    <div className="w-100 grid grid-cols-2 p-4 gap-8 ">

        <div className='w-lgr h-hg1 rounded bg-cor2 flex gap-3 p-10'>
            <div>
                <h3 className='text-lg'>Welcome back User!</h3>
                <h3 className='text-lg'>Check dashboard</h3>

                <p className='mt-8'>You have earned 54% more than last month
                    which is great thing.</p>

                  <div className='flex flex-col gap-5'>
                  <h3 className='mt-4 text-lg'>$63,489.50</h3>

                    
                  </div>
                  <button className='w-20 p-2 mt-4 rounded text-white cursor-pointer bg-blue-500'>Check</button>
                
            </div>


            <div className='mt-7'>
                <img src="./public/imgcard.png" alt="" />
            </div>

        </div>

        <div className='w-lgrh h-hg1 rounded-4xl grid grid-rows-2 gap-2'>

        <div className='w-100 rounded-4xl  bg-corcard p-10'>
            <div className='w-lgrh flex justify-between items-center'>
                <div className='text-white text-lg'>
                    <h3>3267</h3>
                    <p>Peoduct Goal</p>
                </div>

                <div className='text-white text-lg'>
                    <BiMessageRounded />
                </div>
            </div>

        </div>

        <div className='w-100   rounded-4xl  bg-white shadow-xl'>

        </div>
        </div>
    
        <Graph />
        <Linha />
    
       
      </div>


   

   </div>
  )
}

export default HeaderT