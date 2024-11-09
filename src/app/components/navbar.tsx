interface Navitems {
    id:string
    name:string
}


export default function Navbar(){
    const List:Navitems[] = [
        {
            id:"/",
            name:"Home"
        },

        {
            id:"/About",
            name:"About"
        },

        {
            id:"/Contact",
            name:"Contact"
        }
    ]
    return(
    <div className="navbar">
       
       
         <h2 className="text-white">Logo</h2>
        


        <ul className="flex justify-between items-center gap-6">
            {List.map((items)=>(
                <li className="text-white" key={items.id}>{items.name}</li>
            ))}
        </ul>
    </div>
    )
}