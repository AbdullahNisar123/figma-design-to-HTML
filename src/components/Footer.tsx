import { Heebo } from "next/font/google";
import { FaFacebookSquare,FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import React from "react";


const heebo = Heebo({subsets:["latin"]})

export default function Footer (){
    return(
       <div className="bg-footerBackground flex flex-col items-center justify-center h-[243px]">
        <div className="flex space-x-5 w-[244px] justify-between">
            <Link href={''}> <FaFacebookSquare  className="w-[30px] h-[30px] bg-blue" /></Link>
            <Link href={''}><FaInstagram className="w-[30px] h-[30px]"/></Link>
            <Link href={''}><FaTwitter className="w-[30px] h-[30px]"/></Link>
            <Link href={''}> <FaLinkedin className="w-[30px] h-[30px]"/></Link>
           
            
            
           
        </div>
        <p className={`${heebo.className} space-y-6 mt-6 text-center font-medium text-[22px]`}>Copyright ©2020 All rights reserved </p>
       </div>
    )
}