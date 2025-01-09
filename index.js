import Settings from "./config";

import "./feature/aotv";
import "./feature/kuudra/build/beuld";
import "./feature/kuudra/dps/rend";
import "./feature/kuudra/dps/dpsFormater";
import "./feature/kuudra/dps/backBone"
import "./feature/kuudra/sup/pc"

import "./feature/kuudra/sup/PearlLineup/renderWaypoint"

register("command", () => Settings.openGUI()).setName("beuld");