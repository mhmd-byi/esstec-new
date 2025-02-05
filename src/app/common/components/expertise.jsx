export const ExpertiseComponent = () => {
  return (
    <div className="overflow-scroll md:overflow-hidden max-h-full space-y-4 p-2 md:space-y-6 md:h-full grid grid-cols-1 px-5 md:px-32">
      <h2 className="text-center text-3xl font-bold uppercase text-text-primary duration-1000 ease-in-out sm:text-4xl md:text-5xl lg:text-6xl md:mt-20 md:-mb-20">
        Digital & Physical
      </h2>
      <div className="space-y-5 text-center text-xs uppercase text-text-primary sm:space-y-6 md:text-sm">
        <p>
          <span className="font-medium">branding & communication</span>
          <br />-<br />
          visual identity / brand guidelines / brand strategy / marketing
          collaterals / graphics & illustrations<br /> content / social engagement /
          podcasts / market research / lead gen / press & media / av production
        </p>
        <p>
        <span className="font-medium">VIRTUAL COMPUTING</span>
          <br />-<br />
          UX design / UI frameworks / web development / app development / nft &
          tokens / web3 / quality audits
        </p>
        <p>
        <span className="font-medium">spatial experience</span>
          <br />-<br />
          industrial design / visual merchandizing / 3d printing / environmental
          graphics architecture / interior design / project mgmt. / fabrication
        </p>
        <p>*</p>
      </div>
    </div>
  );
};
