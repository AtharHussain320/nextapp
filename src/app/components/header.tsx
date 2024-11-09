

export default function Header(){
  return (
    <div className="connect bg-cover bg-center gap-6 md:justify-start" style={{ backgroundImage: ("url('/hp.jpg')") }}>
      <div className='flex flex-col justify-start items-center'>
        <h2 className='text-yellow-800 font-bold text-2xl text-center'>Welcome to coffee shop</h2>
        <p className='text-white text-xl text-center'>Lorem ipsum dolor sit, amet constos <br /> elit dolore cupiditate modi illo amet <br />aspernatur non aliquid aut!</p>
      </div>

      <button className='py-3 px-10 bg-white text-xl rounded-3xl'>Order now</button>
    </div>
  )
}


