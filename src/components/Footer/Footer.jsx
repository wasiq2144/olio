import React from 'react'
import girlImage from '../../assets/images/girl.webp'
import { FaLinkedin , FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa6";

export const Footer = () => {

    const links = [
        {
            name: "Crosby: POS Tool Launch",
            path : '/'
        },
        {
            name: "Norman & Co: Scout Product Launch",
            path : '/'
        },
        {
            name: "Gardona: Online Store Redesign",
            path : '/'
        },
        {
            name: "Carmine: Skycast App Launch",
            path : '/'
        },
    ]

    const socialLinks = [
        {
            name : 'Linkdin',
            icon : <FaLinkedin />
        },
        {
            name : 'Twitter',
            icon : <FaTwitter />
        },
        {
            name : 'Dribbble',
            icon : <FaDribbble />
        },
        {
            name : 'Instagram',
            icon : <FaInstagram />
        },
    ]


    return (
        <>
        <div className='pt-20 px-[200px] bg-black flex justify-between'>
            <div className="flex flex-col justify-between items-center w-[30%] gap-10">
                <div>
                    <h5 className='text-md font-semibold'>JANELLE BROWN</h5>
                    <p className='text-[#999999] font-semibold mt-2'>Senior UX Designer, currently crafting experiences at Crosby.</p>
                </div>
                <img src={girlImage} alt="" />
            </div>
            <div className="flex flex-col gap-20 w-[55%]">
                <div>
                    <h3 className='text-[28px] font-semibold tracking-tight leading-none'>Think I’d be a good fit for your team or project? Let’s connect.</h3>
                    <button className='rounded-full bg-white text-black py-2 px-6 mt-6 font-semibold'>
                        info@jannelle-brown.com
                    </button>
                </div>
                <div className="flex gap-20">
                    <div>
                        <h5 className='text-md font-semibold text-[#999999]'>SELECTED PROJECTS</h5>
                        <ul className='mt-6'>
                        {
                            links.map((link)=>(
                                <li className='my-3 text-md font-semibold border-b-2 border-transparent hover:border-white w-fit leading-none'><a href={link.path}>{link.name}</a></li>
                            ))
                        }
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-md font-semibold text-[#999999]'>SOCIALS</h5>
                        <div className="grid grid-cols-2 gap-2 mt-6">
                        {
                            socialLinks.map((link)=>(
                                <div className='flex gap-2 items-center'>
                                {link.icon}
                                <h5 className='text-md font-semibold border-b-2 border-transparent hover:border-white w-fit leading-none'><a href={link.path}>{link.name}</a></h5>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright bg-[#1a1a1a] p-6 px-[200px] flex justify-between items-center ">
            <p className='text-[#999999] text-[12px] font-semibold'>
            DESIGNED & BUILT FROM THE DESK OF <span className='text-white'>DEVANTA EBISON</span>
            </p>
            <p className='text-[#999999] text-[12px] font-semibold'>
            OLIO PORTFOLIO TEMPLATE (MIDNIGHT) – 2024©
            </p>
        </div>
        </>
    )
}
