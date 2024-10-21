export const EmailComponent = () => {
  return (
    <div className="scrollbar max-h-full w-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 px-5 md:px-32">
      <div>
        <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-mb-20">
          Email + Phone
        </h2>
      </div>
      <div className="space-y-3 text-center text-xs uppercase text-text-primary sm:space-y-4 md:text-sm">
        <p>We are just a click away</p>
        <p>
          <a href="tel:+971585428055">+971 5 85 42 8055</a> /{" "}
          <a href="mailto:info@esstec.ae">info@esstec.ae</a>
        </p>
        <p>*</p>
      </div>
    </div>
  );
};
