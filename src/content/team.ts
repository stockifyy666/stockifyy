import type { TeamMember } from "@/types";

import sohailImg from "../../public/images/team/sohail-farooq.png";
import mufeezImg from "../../public/images/team/mufeez-azeez.png";
import moizImg from "../../public/images/team/moiz-shahzad.png";
import saadImg from "../../public/images/team/saad-arshad.png";
import sufiyanImg from "../../public/images/team/m-sufiyan.png";

export const team: TeamMember[] = [
  { name: "Sohail Farooq", role: "Chairman", image: sohailImg, objectPosition: "center 5%" },
  { name: "Mufeez Azeez", role: "Chief Executive Officer", image: mufeezImg, objectPosition: "center 0%" },
  { name: "Moiz Shahzad", role: "Director", image: moizImg, objectPosition: "center 5%" },
  { name: "Saad Arshad", role: "Director", image: saadImg, objectPosition: "center 5%" },
  { name: "M. Sufiyan", role: "Director", image: sufiyanImg, objectPosition: "center 5%" },
];
