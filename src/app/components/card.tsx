import Image from "next/image"

export default function Card () {
    return (
        <div>
            <div className='w-[320px] flex flex-col justify-center items-center m-auto p-7 rounded-2xl gap-8 bg-slate-200 md:w-[600px]'>
                <p className='text-center text-xl'>Lorem, ipsum dolor sit amet consectetur  elit. Inventore, nam. Aliquam labore
                    iusto voluptatum?  pariatur  dolores soluta doloremque itaque explicabo atque, mollitia
                    corrupti facere qui distinctio ducimus dolore hic.</p>
                <Image className='im'
                    src="/aa.png"
                    alt='client'
                    width={200}
                    height={200} />

                <h3 className='text-3xl'>josh hazelwood</h3>
            </div>
        </div>
    )
}

