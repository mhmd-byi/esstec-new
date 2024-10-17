export const EmailComponent = () => {
  return (
    <div className="space-y-4 p-2 md:space-y-6 md:h-96 content-between grid grid-cols-1">
      <div>
        <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl">
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
