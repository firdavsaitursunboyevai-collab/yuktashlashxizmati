const Advanges = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className=" text-xs text-amber-600">Advantages</p>

        <div className=" grid gap-6 md:grid-cols-2 md:items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Наши
            <br />
            преимущества
          </h1>

          <p className="max-w-sm text-xs  text-gray-600 md:justify-self-end">
            Мы делаем логистику проще и удобнее, объединяя качественный сервис
            и современные технологии.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div className=" bg-yellow-500 p-4 text-white">
            <div className="flex items-center justify-between text-2xl">
              <span>01</span>
            </div>
            <h2 className=" text-sm font-semibold">Точность доставки</h2>
            <p className=" text-xs  text-white/80">
              Ваш груз прибывает точно в срок — каждый раз.
            </p>
          </div>

          <div className=" bg-white p-4 text-gray-800">
            <div className="flex items-center justify-between text-2xl">
              <span>02</span>
            </div>
            <h2 className=" text-sm font-semibold">
              Индивидуальные решения
            </h2>
            <p className=" text-xs  text-gray-500">
              Подбираем подходящий вариант для каждого груза.
            </p>
          </div>

          <div className=" bg-white p-4 text-gray-800">
            <div className="flex items-center justify-between text-2xl">
              <span>03</span>
            </div>
            <h2 className=" text-sm font-semibold">Передовые технологии</h2>
            <p className=" text-xs  text-gray-500">
              Отслеживайте груз и контролируйте каждый этап доставки.
            </p>
          </div>

          <div className=" bg-white p-4 text-gray-800">
            <div className="flex items-center justify-between text-2xl">
              <span>04</span>
            </div>
            <h2 className=" text-sm font-semibold">Надёжный сервис</h2>
            <p className=" text-xs  text-gray-500">
              Заботимся о безопасности вашего груза на всём пути.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advanges