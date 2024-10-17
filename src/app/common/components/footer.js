import moment from "moment";

export const Footer = () => {
  const currentYear = moment().year();
  return (
    <footer className="flex items-center justify-between gap-3 pb-2 text-xs leading-6 text-text-primary">
      <div className="hidden sm:block sm:text-left">
        <p>CRAFTING BRAND STORIES.</p>
        <p>ONE HIT AT A TIME.</p>
      </div>
      <div className="mx-auto flex gap-1 text-center uppercase sm:mx-0 sm:block sm:text-right">
        <p>© esstec fz llc . {currentYear}</p>
        <p className="sm:hidden">.</p>
        <p>dxb . ^4.2.0</p>
      </div>
    </footer>
  );
};
