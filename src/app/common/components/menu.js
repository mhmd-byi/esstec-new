export const Menu = ({ handleDrawClick, setActiveMenu, setDraw, setAnimationComplete }) => {
  return (
    <div className="relative uppercase text-text-primary text-xs leading-6 z-40">
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
        }}>&#47;&#47; About</span>
        <span><a 
          className="hover:line-through cursor-pointer" 
          onClick={() => {
            handleDrawClick()
            setActiveMenu('philosophy')
          }}
        >
          philosophy &#47;
        </a></span>
        <span><a 
          className="hover:line-through cursor-pointer" 
          onClick={() => {
            handleDrawClick()
            setActiveMenu('expertise')
          }}
        >
          expertise &#47;
        </a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('clients')
        }}>clients &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('team')
        }}>team &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
        }}>&#47;&#47; project showcase</span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('ewaa')
        }}>ewaa abu dhabi &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('scope')
        }}>scope investments &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('market')
        }}>market i research &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('coffee')
        }}>raw coffee company &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('freshly')
        }}>freshly meals &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('ddy')
        }}>ddy autism center &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('arabian')
        }}>arabian knights &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('lvmh')
        }}>lvmh fragrances &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
        }}>&#47;&#47; contact</span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('email')
        }}>email &#47;</a></span>
        <span><a className="hover:line-through cursor-pointer" onClick={() => {
          handleDrawClick()
          setActiveMenu('phone')
        }}>phone &#47;</a></span>
      </p>
    </div>
  );
};
