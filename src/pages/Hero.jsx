const Hero = () => {
	return (
		<main className='px-6 py-10'>
			<section className='mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2'>
				<img
					src='https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=85'
					alt='Portdagi yuk konteynerlari'
					className='h-80 w-full rounded-2xl object-cover'
				/>

				<div>
					<h1 className='text-4xl font-semibold  text-zinc-800'>
						Har qanday yukni tez va ishonchli yetkazib beramiz
					</h1>
					<p className='mt-4 text-zinc-600'>Biz bilan yukingiz manziliga oson yetib boradi.</p>
					<button className='mt-6 rounded-lg  px-6 py-3 text-sm text-white '>
						Bog‘lanish
					</button>
				</div>
			</section>
		</main>
	)
}

export default Hero
