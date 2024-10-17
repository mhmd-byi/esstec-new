export const PhoneComponent = () => {
  return (
    <div className="space-y-4 p-2 md:space-y-6">
      <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl">
        Contact
      </h2>
      <div className="space-y-3 text-center text-xs uppercase text-text-primary sm:space-y-4 md:text-sm">
        <p>Pick up the phone</p>
        <p>
          <a href="tel:+971585428055">+971 5 85 42 8055</a>
        </p>
        <p>*</p>
      </div>
    </div>
  );
};
