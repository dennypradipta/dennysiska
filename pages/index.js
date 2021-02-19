import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div id="landing">
        <Image
          className="w-full h-auto object-cover animate__animated animate__fadeIn"
          layout="fill"
          src="/images/landing.jpg"
        />
        <div className="bg-white opacity-75 absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex">
            <h1 className="handwriting mb-8 text-center text-4xl lg:text-6xl animate__animated animate__fadeIn">
              The wedding of
            </h1>
          </div>
          <div className="flex">
            <h2 className="handwriting text-6xl :text-9xl animate__animated animate__fadeIn">
              Siska & Denny
            </h2>
          </div>
          <div className="flex animate__animated animate__fadeIn">
            <h3 className="text-sm lg:text-xl mb-4">
              Minggu, 21 Februari 2021
            </h3>
          </div>
          <div className="flex flex-row space-x-8">
            <Link href="/invitation" target="_self">
              <div className="flex cursor-pointer bg-template-red hover:text-gray-800 hover:bg-transparent border border-solid border-gray-500 shadow rounded-md p-2 px-4 transition-all duration-500 ">
                Lihat Undangan
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
