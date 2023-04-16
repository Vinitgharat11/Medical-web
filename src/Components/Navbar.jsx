import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-bblack w-full h-12 text-white'>
            <div className='flex justify-around '>
                <div className='mt-3'>
                    <p>Logo</p>
                </div>
                <div>
                    <li className='list-none flex gap-5 mt-3'>
                        <a href="">How Its Work</a>
                        <a href="">Doctors</a>
                        <a href="">Testemonies</a>
                        <a href="">Blogs</a>
                        <a className='bg-white text-bblack rounded-md h-7 w-24 text-center' href="">Get Started</a>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
