import React from 'react'
import { pulse } from '../assets'
import { CardData } from '../const'







const Features = () => {
  return (
    <section className=' bg-Secondary h-[600px] esm:h-[950px] esm:flex esm:flex-wrap '>
        <div className='flex justify-center flex-wrap'>
      
      {CardData.map(item => (

          <div className='w-[300px]  pt-12 esm:w-[250px] '>
            <div className='bg-white ml-10 pl-3 pt-5  '>
              <img src={item.img} alt="" />
            </div>
            <div className='bg-white ml-10 pl-3 pb-4 '>
              <p className='text-[23px] font-Quicksand font-medium'>{item.title}</p>
              <p className='text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, officia laboriosam nisi exercitationem blanditiis odit beatae similique eveniet error, voluptates </p>
            </div>
          </div>
      ))}

        </div>

    </section>
  )
}

export default Features
