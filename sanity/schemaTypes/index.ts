import { localeString } from "./objects/shared/localeString";
import { localeText } from "./objects/shared/localeText";
import { menuItem } from "./objects/shared/menuItem";
import { heroSection } from "./objects/sections/heroSection";
import { introSection } from "./objects/sections/introSection";
import { dienstenSection } from "./objects/sections/dienstenSection";
import { prijzenSection } from "./objects/sections/prijzenSection";
import { faqSection } from "./objects/sections/faqSection";
import { ctaSection } from "./objects/sections/ctaSection";


import { siteSettings } from "./documents/siteSettings";
import { navigation } from "./documents/navigation";
import { homePage } from "./documents/homePage";
import { dienstenPage } from "./documents/dienstenPage";
import { dienst } from "./documents/dienst";
import { pakket } from "./documents/pakket";
import { faqItem } from "./documents/faqItem";
import { overOnsPage } from "./documents/overOnsPage";
import { contactPage } from "./documents/contactPage";
import { pakkettenPage } from "./documents/pakkettenPage";



export const schemaTypes = [
  localeString,
  localeText,
  menuItem,
  heroSection,
  introSection,
  dienstenSection,
  prijzenSection,
  faqSection,
  ctaSection,
  dienst,
  pakket,
  faqItem,
  siteSettings,
  navigation,
  homePage,
  dienstenPage,
  overOnsPage,
  contactPage,
  pakkettenPage,

];

export const schema = {
  types: schemaTypes,
};

