import React from 'react'

const Header = () => {
    return (
        <div>
            <header className=' text-yellow-500'>
                <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
                    <h1 className='text-2xl font-bold'>
                      FLEXILOADS
                    </h1>
                    <nav className='flex gap-6'>
                        <a href="/">Bosh sahifa</a>
                        <a href="/tarif">Tarif</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
