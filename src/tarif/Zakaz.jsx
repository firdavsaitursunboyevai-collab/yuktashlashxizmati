import React from 'react'
const Zakaz = () => {
  return (
   
    <div>
      	<section className='mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2'>
				<div>   
                    <input type="text" placeholder='Ismingiz' className='w-full rounded-lg border' />
                    <input type="text" placeholder='Telefon raqamingiz' className='mt-4 w-full rounded-lg border' />
                    <textarea placeholder='Xabar matni' className='mt-4 w-full rounded-lg border'></textarea>
                    <button className='mt-4 rounded-lg bg-blue-500 px-6 py-3 text-sm'>Yuborish</button>
                </div>


				<div>
					 <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-2">
          <div className=" bg-blue-500 p-4 text-white">
            <div className="flex items-center justify-between text-2xl">
              <span><img src="{" alt="" /></span>
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



    </div>

    

  )
}

export default Zakaz