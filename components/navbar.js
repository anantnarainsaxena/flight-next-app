import Link from "next/link";
const Navbar = () =>{
    return(
        
<nav className="bg-transparent border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center">
        <img src="/favicon.ico" className="h-8 mr-3" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">MshTicket</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex md:items-center flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black">
        
        <Link href="/home" className="block py-2 pl-3 pr-4  rounded md:hover:bg-white  text-black" aria-current="page">
          Home
        </Link>
        <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-white md:border-0">
          About
        </Link>
        
        <Link href="/contact" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-white md:border-0   text-black">
          Destinations
        </Link>
        <Link href="/contact" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-white md:border-0   text-black">
          Contact
        </Link>

        <Link href="/contact" className="block py-2 pl-3 pr-4 rounded   hover:bg-gray-100 md:hover:bg-white md:border-0  text-black">
          Login
        </Link>


      </ul>
    </div>
  </div>
</nav>



    )
}
export default Navbar;