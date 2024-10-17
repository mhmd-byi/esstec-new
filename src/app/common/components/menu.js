export const Menu = ({
  handleDrawClick,
  setActiveMenu,
  setDraw,
  setAnimationComplete,
  activeMenu,
  style,
}) => {
  return (
    <div
      className={`relative py-2 text-right text-xs uppercase leading-6 text-text-primary md:leading-6 ${style}`}
    >
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; About
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "philosophy" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("philosophy");
            }}
          >
            philosophy &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "expertise" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("expertise");
            }}
          >
            expertise &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "clients" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("clients");
            }}
          >
            clients &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "team" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("team");
            }}
          >
            team &#47;
          </a>
        </span>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; project showcase
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "ewaa" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("ewaa");
            }}
          >
            ewaa abu dhabi &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "scope" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("scope");
            }}
          >
            scope investment &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "market" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("market");
            }}
          >
            market i research &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "coffee" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("coffee");
            }}
          >
            raw coffee company &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "freshly" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("freshly");
            }}
          >
            freshly meals &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "ddy" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("ddy");
            }}
          >
            ddy autism center &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "arabian" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("arabian");
            }}
          >
            arabian knights &#47;
          </a>
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "lvmh" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("lvmh");
            }}
          >
            lvmh fragrances &#47;
          </a>
        </span>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; contact
        </span>
        <span>
          <a
            className={`cursor-pointer hover:line-through ${activeMenu === "email" && "line-through"}`}
            onClick={() => {
              handleDrawClick();
              setActiveMenu("email");
            }}
          >
            email + phone &#47;
          </a>
        </span>
      </p>
      <p className="flex flex-col">
        <span
          className="cursor-pointer font-semibold"
          onClick={() => {
            setDraw(false);
            setAnimationComplete(false);
            setActiveMenu("");
          }}
        >
          &#47;&#47; Home
        </span>
      </p>
    </div>
  );
};
