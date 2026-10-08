export default function Location() {
    return (
        <section className="mx-auto max-w-6xl px-5 py-8 text-gray-900">
            <p className=" text-sm  text-blue-600">
                Связаться с нами
            </p>

            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <h1 className="text-3xl   md:text-4xl">
                    Обращайтесь к
                    <br /> нам в любое время
                </h1>

                <p className="max-w-xs text-sm  text-gray-600">
                    We’re Here to Help. Whether You Have Questions or Need Assistance, Our
                    Team is Ready to Provide Support and Ensure a Smooth Experience.
                </p>
            </div>

            <div className="grid gap-10 rounded-lg bg-gray-50 p-6 md:grid-cols-2 md:p-8">
                <div>
                    <h2 className=" text-3xl font-semibold">
                        Get in <span className="text-blue-600">touch</span>
                    </h2>

                    <p className=" text-xs leading-5 text-gray-600">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                        molestie vel, ornare non id blandit netus.
                    </p>

                    <form className="space-y-1">
                        <input
                            className="w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                            placeholder="Contact name"
                        />

                        <input
                            className="w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                            placeholder="Street"
                        />

                        <div className="grid grid-cols-3 gap-4">
                            <input
                                className="col-span-2 w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                                placeholder="City"
                            />

                            <input
                                className="w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                                placeholder="Postcode"
                            />
                        </div>

                        <input
                            className="w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                            placeholder="Contact Phone"
                        />

                        <input
                            className="w-full border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                            type="email"
                            placeholder="E-mail"
                        />

                        <textarea
                            className="w-full resize-none border-0 border-b border-gray-300 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-gray-400"
                            placeholder="Lets talk about your idea"
                        
                        />

                        <label className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-400 bg-white px-4 py-6 text-sm text-gray-500">
                            <span> Upload Additional file</span>
                            <input type="" className="" />
                        </label>

                        <p className="text-xs text-gray-400">
                            Attach file. File size of your documents should not exceed 10MB
                        </p>

                        <label className="flex items-center gap-2 py-3 text-xs text-gray-600">
                            <input type="checkbox" />
                            I want to protect my data by signing an NDA
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-md border border-blue-500 py-3 text-xs font-semibold text-blue-600"
                        >
                            SUBMIT
                        </button>
                    </form>

                    <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                        <div>
                            <strong> Phone</strong>
                            <p className="text-gray-500">111 111 111</p>
                        </div>
                        <div>
                            <strong> E-MAIL</strong>
                            <p className="text-gray-500">info@company.com</p>
                        </div>
                        <div>
                            <strong> HELPDESK</strong>
                            <p className="text-gray-500">helpdesk.com</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}