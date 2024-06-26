import React from 'react'
import { Link } from "react-router-dom";
import ButtonDefault from '../ButtonDefault';


function Card({idPublish, namePublish, carrer, enterprise, image, offer, task, otherDescription, perfilDecription }) {

  return (
    <div class='m-3 relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-red-500 bg-clip-border text-center text-gray-700'>
        <div
            class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
            <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
            <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
        <p>{namePublish}</p>
            {/* {carrer} */}
            </h2>
            <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
             {enterprise}
            </h5>
            <Link to={`/detail/${idPublish}`}>
              {/* <img alt="Tania Andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
            class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /> */}
            <ButtonDefault props="Iniciar sesion"/>
            <ButtonDefault props="Detalles"/>
        </Link>
        </div>
        

    </div>
  )
}

export default Card