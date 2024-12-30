

export default function Contact() {
    return (
        <div>
            <div className="h-[800px] flex flex-col justify-center gap-6 md:w-[600px] py-7 m-auto mt-8 mb-8 bg-slate-900 items-center md:rounded-2xl">
                <h2 className="text-white text-2xl font-bold text-center">Contact us</h2>
                <input className="p-4 m-4 rounded-full bg-slate-100" type="text" placeholder="Name" />
                <input className="p-4 m-4 rounded-full bg-slate-100" type="text" placeholder="E-mail" />
                <input className="p-4 m-4 rounded-full bg-slate-100" type="text" placeholder="Phone" />
                <textarea className="p-4 m-4 text-slate-900 bg-slate-100" name="Message" id="Message" cols={23} rows={6} placeholder="Message"></textarea>
                <button type="submit" className="bg-black text-white py-4 px-12 rounded-full">Submit</button>
            </div>



        </div>
    )
}