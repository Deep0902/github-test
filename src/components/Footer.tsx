import ImageWithLoading from "./ImageWithLoading";


export default function Footer() {
  const phone = "9535283905";
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col-reverse items-center justify-center border-t border-[#2a2929] py-3 gap-2">
        <div className="text-center">
          <span className="text-xs md:text-sm text-center block">
            Pizza pictures are like dreams - real may look different, but still
            delicious!
          </span>
        </div>
        <div className="flex justify-center gap-3">
          <a href="https://maps.app.goo.gl/SMRhLFrt7PSc6oZy8" target="_blank">
            <div className="p-1 relative w-9 h-9 md:w-10 md:h-10 border border-[#2a2929] rounded bg-[#1a1a1a] shadow-md md:transition-all md:duration-400 md:hover:bg-[#2a2a2a] md:hover:scale-110">
              <ImageWithLoading alt={`Call`} src={`./icons/location.svg`} />
            </div>
          </a>
          <a href={`tel:+91${phone}`}>
            <div className="p-1 relative w-9 h-9 md:w-10 md:h-10 border border-[#2a2929] rounded bg-[#1a1a1a] shadow-md md:transition-all md:duration-400 md:hover:bg-[#2a2a2a] md:hover:scale-110">
              <ImageWithLoading alt={`Call`} src={`./icons/phone.svg`} />
            </div>
          </a>
        </div>
      </div>
      <p className="bg-[#343434] text-white m-0 text-center py-2 w-full">
        ©Bakers. All Right Reserved
      </p>
    </footer>
  );
}
