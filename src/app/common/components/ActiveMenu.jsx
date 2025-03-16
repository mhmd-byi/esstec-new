import { ClientComponent } from "./client";
import { EmailComponent } from "./email";
import { ExpertiseComponent } from "./expertise";
import { PhilosophyComponent } from "./philosophy";
import { PhoneComponent } from "./phone";
import { ArabianKnightsCarouselComponent } from "./projects/arabian-knights";
import { DDYCarouselComponent } from "./projects/ddy";
import { CarouselComponent } from "./projects/CarouselComponent";
import { FreshlyMealsCarouselComponent } from "./projects/freshly-meals";
import { LVMHCarouselComponent } from "./projects/lvmh";
import { MarketIResearchCarouselComponent } from "./projects/market-i-research";
import { RawCoffeeCarouselComponent } from "./projects/raw-coffee";
import { ScopeInvestmentsCarouselComponent } from "./projects/scope-investments";
import { TeamComponent } from "./team";

const ActiveMenuList = ({ activeMenu }) => {
  switch (activeMenu) {
    case "philosophy":
      return <PhilosophyComponent />;

    case "clients":
      return <ClientComponent />;

    case "email":
      return <EmailComponent />;

    case "phone":
      return <PhoneComponent />;

    case "team":
      return <TeamComponent />;

    case "expertise":
      return <ExpertiseComponent />;

    default:
      return <CarouselComponent projectId={activeMenu} />;
  }
};

export default ActiveMenuList;
