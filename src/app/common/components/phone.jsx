export const PhoneComponent = () => {
  return (
    <div className="absolute top-56 mt-10 w-[1100px] items-center justify-center z-[60]">
      <h2 className="text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px]">
        Contact
      </h2>
      <div className="mt-52 text-center max-w-[970px]">
        <h3 className="text-sm text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-10">
          Pick up the phone
        </h3>
        <p className="text-sm text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-10 cursor-pointer">
          <a href="tel:+971585428055">+971 5 85 42 8055</a>
        </p>
        <p className="text-text-primary uppercase text-sm">*</p>
      </div>
    </div>
  );
};
