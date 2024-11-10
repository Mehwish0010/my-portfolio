import Link from 'next/link'
import React from 'react'
import Image1 from "@/components/assets/images/pflogofinal.webp"
import Image from 'next/image'




const Header = () => {
  return (
    <div className="text-myhover body-font px-10">
    
    <div className="flex justify-between items-center p-4  bg-black">

    <div className="flex items-center">
    
       <Image src={Image1} alt="logo"  className="w-32 h-32 rounded-full border-4 border-white bg-black p-2" />
    </div>
    
      
    <div className="flex space-x-40  mr-10  ">
      
       <Link href="/" className="text-white  hover:text-teal-700 scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0">Home</Link>
        <Link href="/about" className="text-white  hover:text-teal-700 scroll-m-20  pb-2 text-xl font-semibold tracking-tight" >About</Link>
        <Link href="/project" className="text-white  hover:text-teal-700 scroll-m-20  pb-2 text-xl font-semibold tracking-tight first:mt-0">Projects</Link>
        <Link href="/review" className="text-white  hover:text-teal-700 scroll-m-20  pb-2 text-xl font-semibold tracking-tight first:mt-0">Reveiws</Link>
        <Link href="/contact" className="text-white  hover:text-teal-700 scroll-m-20  pb-2 text-xl font-semibold tracking-tight first:mt-0">Contact</Link>
 
 </div>
</div>
</div>

  )
}


export default Header