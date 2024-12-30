import Card from './card'


export default function Client() {
    return (
        <div className='client md:h-[700px] flex flex-col justify-center items-center'>
            <h3 className='text-3xl text-center'>What people say about us?</h3>


            <Card />

            <button className='mt-9 bg-gray-200 py-4 px-10 rounded-full text-slate-900'>Next</button>
        </div>

    )
}

