import React from 'react'
import doc from '../assets/doc.png'
const Header = () => {
    return (
        <section className="bg-bblack w-full h-[500px] ">
            <div className='flex justify-around '>
                <div className='ml-24 pt-24 Features '>
                    <p className='text-white font-Quicksand text-[12px] pb-5'>Your Health is our Priority</p>
                    <p className='text-white font-Quicksand text-[60px] leading-[70px]' ><span className=' text-[#e63b32]'>Dedicated</span>To <br /> Your Well-Being</p>
                    <div className='pt-6'>
                        <p className='text-white font-Quicksand w-[600px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid vitae suscipit ratione dolores non delectus dolorem, excepturi accusamus soluta dicta nisi.</p>
                    </div>
                    <div className='pt-6 flex '>
                        <button className='text-white bg-Primary h-9 w-52 rounded-sm'>Make An Appointment</button>
                        <p className='text-white pl-5 self-center text-[12px]'>How it Work ?</p>
                    </div>
                </div>
                <div className='mt-[65px] md:hidden sm:hidden'>
                    <img className='h-[400px]' src={doc} alt="" />
                </div>
            </div>


        </section>
    )
}

export default Header
