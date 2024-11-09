interface Plisto {
  name: string
  price: string
}


export default function Menu(){
  const plist: Plisto[] = [
    {
      name: "Jamaican blue mountain",
      price: "$50 - $60"
    },

    {
      name: "Hawaiian kona",
      price: "$45 - $55"
    },

    {
      name: "Ethiopian Yirgacheffe",
      price: "$20 - $30"
    },

    {
      name: "Panama Geisha",
      price: "$100 - $120"
    },

    {
      name: "Tanzanian Peaberry",
      price: "$25 - $35"
    },

    {
      name: "Sumatra Mandheling",
      price: "$15 - $25"
    },

    {
      name: "Guatemalan Antigua",
      price: "$18 - $25"
    },

    {
      name: "Costa Rican Tarrazu",
      price: "$20 - $30"
    },


    {
      name: "Yemeni Mocha",
      price: "$40 - $50"
    },

    {
      name: "Brazilian Bourbon Santos",
      price: "$12 - $18"
    }

  ]
  return (
    <div className="relative h-[700px] w-full">
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('/hk.jpg')"
        }}>
      </div>


      
      <div className="relative z-10 flex justify-center md:justify-start md:pl-44 items-center h-full">
        <table>
          <thead>
            <tr>
              <th className="text-white ">Name</th>
              <th className="text-white">Price</th>
            </tr>
          </thead>

          <tbody>
            {plist.map((val, ind) => (
              <tr key={ind} className="gap-4">
                <td className="text-white p-4">{val.name}</td>
                <td className="text-white p-4">{val.price}</td>
              </tr>
            ))}
          </tbody>


        </table>
      </div>


    </div>

  )
}

