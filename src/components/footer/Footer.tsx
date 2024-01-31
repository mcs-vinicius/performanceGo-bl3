import React from 'react'

function Footer() {
  return (
    <>
        <footer className="rounded-lg shadow text-gray-50 bg-gray-500">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://ik.imagekit.io/wzl99vhez/Hades%20Game/Cruz-vermelha.png?updatedAt=1706707189398" className="h-8" alt="Soraka" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FarmaSoraka</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-50">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm  sm:text-center text-gray-50">© 2024 <a href="" className="hover:underline">FarmaSoraka™</a></span>
            </div>
        </footer>
    </>
  )
}

export default Footer