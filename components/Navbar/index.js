import Link from "next/link";
import { IoIosHome, IoIosCalendar } from "react-icons/io";
import { GiRingBox, GiDiamondRing } from "react-icons/gi";

export function DesktopNavbar() {
  return (
    <nav className="bg-white shadow fixed w-full hidden lg:flex z-50">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-around h-16">
          <div className="flex flex-grow">
            <p>#DennySiskaUntukSelamanya</p>
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Home
                  </a>
                </Link>
                <Link href="/invitation">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Invitation
                  </a>
                </Link>
                <Link href="/prewedding">
                  <a className="text-gray-500 hover:bg-template-red hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-500">
                    Pre-Wedding
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <section
      id="bottom-navigation"
      className="lg:hidden block fixed inset-x-0 bottom-0 z-50 bg-white shadow"
    >
      <div id="tabs" className="flex justify-between">
        <Link href="/">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosHome className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-home block text-xs">Home</span>
          </a>
        </Link>
        <Link href="/invitation">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <IoIosCalendar className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-kategori block text-xs">Invitation</span>
          </a>
        </Link>
        <Link href="/prewedding">
          <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
            <GiDiamondRing className="mx-auto m-1 sm:mx-auto sm:m-2" />
            <span className="tab tab-kategori block text-xs">Pre-Wedding</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
