import { useRef, useState } from "react";
import { Typography } from "../../atoms";
import { GalleryAdd, TickCircle } from "iconsax-react";
import { toBase64 } from "../../../utils/toBase64";
interface IProps {
  imageRef: React.RefObject<HTMLImageElement>;
}
const ImagePicker = ({ imageRef }: IProps) => {
  const [imageSource, setImageSource] = useState<string>("");
  const showPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files.length > 0) {
        toBase64(event.target.files && event.target.files[0]).then(
          // @ts-ignore
          (base64value: string) => {
            setImageSource(base64value);
          }
        );
      }
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        !!imageSource ? "p-1" : "p-12"
      }`}
    >
      <GalleryAdd
        className={`th-primary-color text-2xl cursor-pointer ${
          !!imageSource && "hidden"
        }`}
        onClick={() => fileInputRef.current?.click()}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(event) => showPreview(event)}
        ref={fileInputRef}
        className="hidden"
      />
      <div className={`${!imageSource && "hidden"} flex flex-col items-center`}>
        <img
          className="w-20 h-20 rounded-full img-box-shadow cursor-pointer border-2 border-gray-500"
          src={imageSource ?? ""}
          alt="selectedImage"
          onClick={() => fileInputRef.current?.click()}
          ref={imageRef}
        />
        <Typography type="h4" className="text-[#6D6D6D] mt-3 flex gap-2">
          فایل با موفقیت بارگذاری شد
          <TickCircle className="bg-green-600 text-white text-xl rounded-full p-1" />
        </Typography>
      </div>
    </div>
  );
};

export default ImagePicker;
