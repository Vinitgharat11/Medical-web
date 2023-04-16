import React from 'react'
import { cardname } from '../constant/vinit'


const Card = (props) => {
  return(
    <section className=''>
      <div className='bg-white w-[280px]  '>
      <div className='ml-4 pt-4'>
        <img src={props.img} alt="" />
        </div>
        <div>
       <p className=' font-Quicksand ml-5 font-bold'>{props.title}</p>
      <p className='font-Quicksand text-[12px] ml-5'>{props.description}</p>
        </div>
      </div>

    </section>
  )
}




const Features = () => {
  return (
    <section className=' bg-Secondary h-[600px]'>
      <div className='flex'>
        <div>
            <p>innovative Solution For Your Health Needs</p>
        </div>
       {cardname.map(item =>(
        <div className='flex flex-wrap justify-center'>
          <Card
          img={item.img}
          title={item.title}
          description={item.description}
          />
          <Card
          img={item.img}
          title={item.title}
          description={item.description}
          />
          <Card
          img={item.img}
          title={item.title}
          description={item.description}
          />
          <Card
          img={item.img}
          title={item.title}
          description={item.description}
          />
        </div>
       ))}
      </div>
    </section>
  )
}

export default Features
