import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className='footer gap-5'>
        <ul className="flex flex-row justify-center items-center gap-10">
          <li className="text-2xl text-gray-100">Home</li>
          <li className="text-2xl text-gray-100">About</li>
          <li className="text-2xl text-gray-100">Contact</li>
        </ul>


        <p className="text-center text-2xl text-white">© Copyright 2025 Coffe Shop - All Rights Reserved.</p>
      </div>
    </div>
  )
}

