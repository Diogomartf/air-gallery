import { Header } from "./Header";

interface AirGalleryProps {
  isOpen: Boolean;
  closeAction: VoidFunction;
}

export const AirGallery = ({ isOpen, closeAction }: AirGalleryProps) => {
  return (
    <div className="absolute top-0 h-fit w-full bg-white">
      <Header closeAction={closeAction}></Header>
      <div className="space-y-3 px-7 py-5 md:px-32 md:py-14">
        <div className="h-96 rounded-lg bg-gray-100"></div>
        <div className="flex items-center space-x-3">
          <div className="h-64 w-full rounded-lg bg-gray-100"></div>
          <div className="h-64 w-full rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-96 rounded-lg bg-gray-100"></div>
        <div className="h-96 rounded-lg bg-gray-100"></div>
        <div className="flex items-center space-x-3">
          <div className="h-64 w-full rounded-lg bg-gray-100"></div>
          <div className="h-64 w-full rounded-lg bg-gray-100"></div>
        </div>
        <div className="h-96 rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
};
