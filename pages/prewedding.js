import { useState } from "react";
import Lightbox from "react-image-lightbox";
import Image from "next/image";
import Layout from "../components/Layout";
import { Photos } from "../enums/Prewedding";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleOpenPhoto = (photoID) => {
    const photos = Photos.find((item) => item._id === photoID);
    setPhoto(photos);
    setIsOpened(true);
  };

  return (
    <Layout>
      <div className="mx-4 lg:mx-0 animate__animated animate__fadeIn">
        <div className="flex flex-col">
          <div className="flex">
            <div className="m-auto block items-center justify-center text-center mt-8 lg:mt-32 max-w-2xl">
              <p className="handwriting text-center text-4xl lg:text-6xl ">
                Pre-Wedding
              </p>
            </div>
          </div>
          {/* Photos */}
          <div className="flex align-middle justify-center my-8 md:mx-auto md:w-10/12 lg:w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Photos.map((item) => (
                <div
                  key={item._id}
                  className="flex bg-gray w-32 h-32 cursor-pointer animate__animated animate__fadeIn"
                  onClick={() => handleOpenPhoto(item._id)}
                >
                  <Image
                    src={item.path}
                    className="object-cover"
                    width="128"
                    height="128"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex align-middle justify-center my-8 md:mx-auto md:w-10/12 lg:w-full">
            <p className="handwriting text-center text-4xl lg:text-6xl ">
              Siska & Denny
            </p>
          </div>
        </div>
      </div>
      {isOpened && (
        <Lightbox
          mainSrc={Photos[photo._id].path}
          onCloseRequest={() => setIsOpened(false)}
          nextSrc={Photos[(photo._id + 1) % Photos.length]}
          prevSrc={Photos[(photo._id + Photos.length - 1) % Photos.length]}
          onCloseRequest={() => setIsOpened(false)}
          onMovePrevRequest={() => {
            const found = Photos.find(
              (item) =>
                item._id === (photo._id + Photos.length - 1) % Photos.length
            );
            console.log(found);
            setPhoto(found);
          }}
          onMoveNextRequest={() => {
            const found = Photos.find(
              (item) => item._id === (photo._id + 1) % Photos.length
            );
            setPhoto(found);
          }}
        />
      )}
    </Layout>
  );
}
