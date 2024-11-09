import Image from 'next/image'


export default function About() {
    return (
        <div className="about md:flex-row lg:flex-row md:justify-center md:gap-10 ">
            <Image src="/del.jpg" alt='coffee' width={220} height={220} className='rounded-3xl md:w-[320px] md:h-[260px]'/>
            <div className='flex flex-col justify-center h-[280px] w-[390px] items-center md:border-none bg-transparent slide-eff'> 
                <h2 className='text-3xl font-bold text-center text-[#2c1e1e] '>About us</h2>
                <p className='text-[#060202] text-xl text-center'>We are passionate about bringing<br/> you the finest coffee experence. Our <br/> baristas are experts in their craft,
                    <br/> and our beans are sourced from <br/> the best frams around the world.</p>
            </div>
        </div>
    )
}


