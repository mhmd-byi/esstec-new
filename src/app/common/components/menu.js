export const Menu = () => {
  return (
    <div className="uppercase text-secondary">
      <p className="flex flex-col">
        <span className="font-medium">&#47;&#47; About</span>
        <span><a className="hover:line-through cursor-pointer">philosophy &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">clients &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">team &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-medium">&#47;&#47; creative expertise</span>
        <span><a className="hover:line-through cursor-pointer">digital &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">physical &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-medium">&#47;&#47; project showcase</span>
        <span><a className="hover:line-through cursor-pointer">ewaa abu dhabi &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">raw coffee company &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">scope investments &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">arabian knights &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">market i research &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">lvmh fragrances &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-medium">&#47;&#47; contact</span>
        <span><a className="hover:line-through cursor-pointer" href="mailto:info@esstec.ae">email &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer">phone &#47;</a></span>
      </p>
    </div>
  );
};
