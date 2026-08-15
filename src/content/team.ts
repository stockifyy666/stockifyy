import type { TeamMember } from "@/types";

import sohailImg from "../../public/images/team/sohail-farooq.png";
import mufeezImg from "../../public/images/mufeez.png";
import moizImg from "../../public/images/team/moiz-shahzad.png";
import saadImg from "../../public/images/team/saad-arshad.png";
import sufiyanImg from "../../public/images/team/m-sufiyan.png";

export const team: TeamMember[] = [
  { name: "Sohail Farooq", role: "Chairman", image: sohailImg },
  { name: "Mufeez Azeez", role: "Chief Executive Officer", image: mufeezImg },
  { name: "Moiz Shahzad", role: "Director", image: moizImg },
  { name: "Saad Arshad", role: "Director", image: saadImg },
  { name: "M. Sufiyan", role: "Director", image: sufiyanImg },
];
