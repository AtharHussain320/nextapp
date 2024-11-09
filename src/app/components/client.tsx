import Image from 'next/image'

import Card from './card'

export default function Client(){
    return (
        <div className='client md:h-[630px] flex flex-col justify-center items-center'>
            <h3 className='text-3xl text-center'>What people say about us?</h3>


         <Card />

        </div>

    )
}

