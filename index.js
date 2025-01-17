import Settings from "./config";


import "./feature/aotv";
import "./feature/kuudra/build/beuld";
import "./feature/kuudra/dps/rend";
import "./feature/kuudra/dps/dpsFormater";
import "./feature/kuudra/sup/pc"

import "./feature/kuudra/sup/PearlLineup/renderWaypoint"


import "./feature/kuudra/sup/renderPiles"

register("command", () => Settings.openGUI()).setName("beuld");