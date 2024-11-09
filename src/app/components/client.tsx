import Image from 'next/image'
import React from 'react'
import Card from './card'

const Client = () => {
    return (
        <div className='client md:h-[630px] flex flex-col justify-center items-center'>
            <h3 className='text-3xl text-center'>What people say about us?</h3>


         <Card />

        </div>

    )
}

export default Client