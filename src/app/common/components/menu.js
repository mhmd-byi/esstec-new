export const Menu = ({ handleDrawClick, setActiveMenu, setDraw, setAnimationComplete, activeMenu }) => {
  return (
    <div className="relative uppercase text-text-primary text-xs leading-6 z-40">
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
          setActiveMenu('');
        }}>&#47;&#47; About</span>
        <span><a 
          className={`hover:line-through cursor-pointer ${activeMenu === 'philosophy' && 'line-through'}`} 
          onClick={() => {
            handleDrawClick()
            setActiveMenu('philosophy')
          }}
        >
          philosophy &#47;
        </a></span>
        <span><a 
          className={`hover:line-through cursor-pointer ${activeMenu === 'expertise' && 'line-through'}`} 
          onClick={() => {
            handleDrawClick()
            setActiveMenu('expertise')
          }}
        >
          expertise &#47;
        </a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'clients' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('clients')
        }}>clients &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'team' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('team')
        }}>team &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
          setActiveMenu('');
        }}>&#47;&#47; project showcase</span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'ewaa' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('ewaa')
        }}>ewaa abu dhabi &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'scope' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('scope')
        }}>scope investments &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'market' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('market')
        }}>market i research &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'coffee' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('coffee')
        }}>raw coffee company &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'freshly' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('freshly')
        }}>freshly meals &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'ddy' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('ddy')
        }}>ddy autism center &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'arabian' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('arabian')
        }}>arabian knights &#47;</a></span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'lvmh' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('lvmh')
        }}>lvmh fragrances &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
          setActiveMenu('');
        }}>&#47;&#47; contact</span>
        <span><a className={`hover:line-through cursor-pointer ${activeMenu === 'email' && 'line-through'}`} onClick={() => {
          handleDrawClick()
          setActiveMenu('email')
        }}>email + phone &#47;</a></span>
      </p>
      <p className="flex flex-col">
        <span className="font-semibold cursor-pointer" onClick={() => {
          setDraw(false);
          setAnimationComplete(false);
          setActiveMenu('');
        }}>&#47;&#47; Home</span>
      </p>
    </div>
  );
};
