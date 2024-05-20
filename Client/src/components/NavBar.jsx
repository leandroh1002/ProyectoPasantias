import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation();

  return (
    <div><header class="text-gray-50 body-font bg-[#194da0]">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg> */}
        <Link to={`/home`}><img alt="UNSTA Universidad del Norte Santo Tomás de Aquino - Isologotipo" data-src="https://www.unsta.edu.ar/wp-content/uploads/2019/10/UNSTA_isologotipo-1.png" class="attachment-medium size-medium wp-image-7883 ls-is-cached lazyloaded" src="https://www.unsta.edu.ar/wp-content/uploads/2019/10/UNSTA_isologotipo-1.png"></img>
        </Link>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a href="https://alumnos.unsta.edu.ar/" class="mr-5 hover:text-gray-900 cursor-pointer">Autogestion</a>
        <a href="https://seo.unsta.edu.ar/" class="mr-5 hover:text-gray-900 cursor-pointer">CEO</a>
      </nav>
      {location.pathname !== '/login' && <Link to={`/login`}><button class="inline-flex items-center bg-[#ca7d10] border-0 py-1 px-3 focus:outline-none hover:bg-[#ca7d10] rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></Link>}
    </div>
  </header></div>
  )
}

export default NavBar