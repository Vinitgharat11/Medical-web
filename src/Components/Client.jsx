import React from 'react'
import { Robinhood, exsoduse, fristbase, samsora } from '../assets'

const Client = () => {
    return (
        <section className=' font-Quicksand pt-4'>
            <div className='flex ml-20' >
                <div className=' '>
                    <p className='w-80 '>Trusted by 1000+ companies and teams <span className='line'></span></p>
                </div>
                <div className='overflow-x-hidden'>
                <hr className='line w-[800px]  mt-3' />
                </div>
            </div>
            <div className='overflow-x-hidden'>
               <div className='flex flex-wrap justify-center  '>
                <img className='h-24 'src={exsoduse} alt="" />
                <img className='h-14 self-center' src={fristbase} alt="" />
                <img className='h-24 ' src={Robinhood} alt="" />
                <img className='h-24' src={samsora} alt="" />
               </div>
            </div>

        </section>
    )
}

export default Client
