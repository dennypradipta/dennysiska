import Layout from "../components/Layout";
import Image from "next/image";

export default function Invitation() {
  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting mb-8 text-center text-4xl lg:text-6xl ">
                Bismillahirrahmanirrahim
              </p>
              <video
                src="/prewedding/videos/prewedding.mp4"
                controls
                autoPlay
              />
              <p className="mt-8 mb-2">
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
              <p>
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
                menyelenggarakan pernikahan putra-putri kami:
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center my-8">
            <div className="flex flex-col mx-8 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/siska.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Andika Fransiskayana
                </p>
                <p className="text-xl lg:mb-2">Putri dari</p>
                <p className="text-sm">Bapak Wiyono</p>
                <p className="text-sm">Ibu Suryani</p>
              </div>
            </div>
            <div className="flex flex-col mx-8 mt-8 md:mt-0 max-w-xs justify-center items-center text-center">
              <div>
                <Image
                  src="/images/denny.jpg"
                  className="rounded-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="handwriting my-4 text-4xl">
                  Denny Aditya Pradipta
                </p>
                <p className="text-xl lg:mb-2">Putra dari</p>
                <p className="text-sm">Bapak Prihadi Budhi Santoso</p>
                <p className="text-sm">Ibu Lestari Fatma Wardani</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col justify-center items-center my-8 max-w-4xl mx-auto">
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Save the Date
          </p>
          <p className="mb-4 text-center">
            Pernikahan putra-putri kami Insya Allah akan dilaksanakan pada:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>Minggu, 21 Februari 2021</p>
            <p>Akad: 08.30 - 10.30 WIB</p>
            <p>Resepsi: 10.30 - 12.30 WIB</p>
          </div>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Mengingat situasi pandemi COVID-19, tamu yang dapat hadir ke lokasi
            pernikahan kami sangat terbatas karena adanya pembatasan sosial.
            Oleh karena itu, kami mohon maaf yang sebesar-besarnya jika kami
            belum dapat mengundang Bapak/Ibu/Saudara/i secara fisik pada acara
            kami.
          </p>
          <p className="text-center my-8 md:my-4 md:max-w-xl lg:max-w-3xl">
            Namun, Bapak/Ibu/Saudara/i dapat ikut serta merayakan kebahagiaan
            kami dengan menyaksikan acara pernikahan kami yang akan disiarkan
            langsung melalui Instagram Live di profil berikut:
          </p>
          <div className="flex flex-col mb-8 p-8 border border-solid border-gray-300 shadow-md rounded-md justify-center text-center">
            <p>
              <b>
                <a
                  href="https://www.instagram.com/fransiskayana"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @fransiskayana
                </a>
              </b>
            </p>
            <p>atau</p>
            <p>
              <b>
                <a
                  href="https://www.instagram.com/dennypradipta_"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @dennypradipta_
                </a>
              </b>
            </p>
          </div>
          <p className="text-center mb-8 md:max-w-xl lg:max-w-3xl">
            Doa restu Bapak/Ibu/Saudara/i merupakan suatu kehormatan dan
            kebahagiaan bagi kami.
          </p>
        </div>
        <div className="flex max-w-5xl mx-auto my-8">
          <hr className="shadow w-full justify-center items-center" />
        </div>
        <div className="flex flex-col max-w-5xl mx-auto my-8 md:max-w-xl lg:max-w-3xl">
          <blockquote className="text-center">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </blockquote>
          <p className="text-center my-4">QS. Ar-Rum:21</p>
        </div>
        <div className="flex flex-col text-center max-w-5xl mx-auto my-8">
          <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p className="mt-4">Kami yang berbahagia,</p>
          <p>Kel. Bapak Wiyono & Ibu Suryani</p>
          <p>dan</p>
          <p>Kel. Bapak Prihadi Budhi Santoso & Ibu Lestari Fatma Wardani</p>
          <p className="handwriting my-8 text-center text-4xl lg:text-6xl ">
            Siska & Denny
          </p>
        </div>
      </div>
    </Layout>
  );
}
