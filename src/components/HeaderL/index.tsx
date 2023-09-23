import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { DiModernizr } from 'react-icons/di'


function Header() {
  return (
    <div className="w-60 h-screen bg-cor1 p-5">
    <div className="flex gap-3 items-center">
    <p>logo</p>
    <h3 className="text-2xl">Modernize</h3>
    </div>

    <div className="flex flex-col mt-8 gap-4">
      <h3>DASHBOARDS</h3>

      <nav className=' flex'>
        <ul className="flex flex-col gap-8">
          <li className='flex items-center gap-2 cursor-pointer text-lg'><TbBrandGoogleAnalytics /> Analytical</li>
          <li className='flex items-center gap-2 cursor-pointer text-lg'><DiModernizr /> Modern</li>
          <li className='flex items-center gap-2 cursor-pointer text-lg'><AiOutlineShoppingCart /> eCommerce</li>
        </ul>
      </nav>

     
    </div>

  </div>

  )
}

export default Header