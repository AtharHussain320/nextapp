import Image from "next/image"
import Link from "next/link"

interface Navitems {
    id: string
    name: string
}


export default function Navbar() {
    const List: Navitems[] = [
        {
            id: "/",
            name: "Home"
        },

        {
            id: "/About",
            name: "About"
        },

        {
            id: "/Contact",
            name: "Contact"
        }
    ]
    return (
        <div className="navbar">

            <div>
                <h2 className="text-white"><Image src="/logo.jpg" alt="Logo" width={50} height={50} /></h2>
                <h2 className="text-cyan-200">Coffe Shop</h2>
            </div>



            <ul className="flex justify-between items-center gap-6">
                {List.map((items) => (
                    <li className="text-white" ><Link href={items.id}>{items.name}</Link></li>
                ))}
            </ul>
        </div>
    )
}