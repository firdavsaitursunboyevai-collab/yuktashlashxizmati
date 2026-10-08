import img1 from "./image/ikki.jpg"
const Servises = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs text-amber-600">Услуги</p>

        <div className="mb-6 grid gap-5 md:grid-cols-2 md:items-center">
          <h1 className="max-w-lg text-2xl font-bold  text-gray-800">
            Откройте для себя полный спектр услуг, которые мы предлагаем для
            доставки
          </h1>
          <p className="max-w-sm text-xs  text-gray-600 md:justify-self-end">
            Мы делаем логистику проще и удобнее, объединяя качественный сервис и
            современные технологии.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div >
            <img
              src={img1}
              alt=""
              className=""
            />
            <div />
           
          </div>

          <div className="">
            <img
              src={img1}
              alt=""
              className=""
            />
            <div  />
           
          </div>

          <div className="">
            <img
              src={img1}
              alt=""
              className=""
            />
            <div  />
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servises