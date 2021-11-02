import {
  GiWalk,
  GiHammerNails,
  GiWoodBeam,
  GiMeat,
  GiTwoCoins,
  GiGoldMine,
  GiHouse,
  GiGearHammer,
  GiStrawberry,
  GiDeer,
  GiWindmill,
  GiHandSaw,
  GiStonePile,
  GiFamilyHouse,
  GiIndianPalace,
  GiStable,
  GiCatapult,
} from "react-icons/gi";

export default function TypeIcon({type}) {
  switch (type) {
    case "move":
      return <GiWalk color="#ffdf91" size="1.5em" />;
    case "build":
      return <GiHammerNails color="#ffdf91" size="1.5em" />;
    case "sheep":
      return <GiMeat color="#ffdf91" size="1.5em" />;
    case "mill":
      return <GiWindmill color="#ffdf91" size="1.5em" />;
    case "berries":
      return <GiStrawberry color="#ffdf91" size="1.5em" />;
    case "deer":
      return <GiDeer color="#ffdf91" size="1.5em" />;
    case "lumber":
      return <GiHandSaw color="#ffdf91" size="1.5em" />;
    case "wood":
      return <GiWoodBeam color="#ffdf91" size="1.5em" />;
    case "mine":
      return <GiGoldMine color="#ffdf91" size="1.5em" />;
    case "gold":
      return <GiTwoCoins color="#ffdf91" size="1.5em" />;
    case "stone":
      return <GiStonePile color="#ffdf91" size="1.5em" />;
    case "house":
      return <GiHouse color="#ffdf91" size="1.5em" />;
    case "tc":
      return <GiFamilyHouse color="#ffdf91" size="1.5em" />;
    case "landmark":
      return <GiIndianPalace color="#ffdf91" size="1.5em" />;
    case "tech":
      return <GiGearHammer color="#ffdf91" size="1.5em" />;
    case "stable":
      return <GiStable color="#ffdf91" size="1.5em" />;
    case "siege":
      return <GiCatapult color="#ffdf91" size="1.5em" />;
    default:
      return <div>{type}</div>;
  }
}