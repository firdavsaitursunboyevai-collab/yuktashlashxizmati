import image from "./image/imagee.jpg"
import img from "./image/img.jpg"
import img1 from "./image/im.jpg"
const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm text-amber-600">О нас</p>

        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h1 className="max-w-md text-3xl font-bold text-gray-800">
            Надёжные решения для перевозки грузов вашего бизнеса
          </h1>
          <p className="text-sm  text-gray-600">
            FLEXILOADS упрощает процесс грузоперевозок. Сотрудничайте с нами,
            чтобы доставлять грузы надёжно и вовремя.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className=" bg-white p-5 ">
            <span className="text-2xl"><img style={{ width: '20px', height: '20px', objectFit: 'cover' }} src={image} alt="" /></span>
            <h2 className=" font-semibold text-gray-800">Простая доставка</h2>
            <p className=" text-sm text-gray-500">
              Быстро и удобно доставляем ваши грузы по нужному адресу.
            </p>
          </div>

          <div className=" bg-white p-5 ">
            <span className="text-2xl"><img style={{ width: '20px', height: '20px', objectFit: 'cover' }} src={img} alt="" /></span>
            <h2 className=" font-semibold text-gray-800">Надёжный сервис</h2>
            <p className=" text-sm text-gray-500">
              Каждый заказ доставляется безопасно и вовремя.
            </p>
          </div>

          <div className=" bg-white p-5 ">
            <span className="text-2xl"><img style={{ width: '20px', height: '20px', objectFit: 'cover' }} src={img1} alt="" /></span>
            <h2 className=" font-semibold text-gray-800">Эффективные решения</h2>
            <p className=" text-sm text-gray-500">
              Удобные и гибкие услуги для вашего бизнеса.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 px-6 py-6 text-center">
          <div >
            <p className="text-2xl font-semibold text-gray-800">12+</p>
            <p className="mt-1 text-xs text-gray-500">Лет опыта</p>
          </div>

          <div >
            <p className="text-2xl font-semibold text-gray-800">+20K</p>
            <p className="mt-1 text-xs text-gray-500">Доставленных грузов</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-gray-800">500</p>
            <p className="mt-1 text-xs text-gray-500">Довольных клиентов</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About