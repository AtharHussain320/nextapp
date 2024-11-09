import { url } from "inspector"


const Aallary = () => {
  return (

    <div className='gallary md:flex-col md:h-[900px]'>

      <div className="w-[100%] flex flex-col justify-center items-center gap-5 md:flex-row md:p-6 md:justify-around">
        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/hk.jpg')" }}>
          <h3></h3>
        </div>


        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/a.jpg')" }}>
          <h3></h3>
        </div>

        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/c.jpg')" }}>
          <h3></h3>
        </div>

      </div>

      <div className="w-[100%] flex flex-col justify-center items-center gap-5  md:flex-row md:p-6 md:justify-around">
        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/l.jpg')" }}>
          <h3></h3>
        </div>

        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/m.jpg')" }}>
          <h3></h3>
        </div>

        <div className='w-[280px] h-[280px] bg-cover bg-center' style={{ backgroundImage: "url('/k.jpg')" }}>
          <h3></h3>
        </div>
      </div>





    </div>
  )
}

export default Aallary