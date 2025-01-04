import Settings from "./config";

import "./feat/aotv";
import "./feat/kuudra/build/beuld";
import "./feat/kuudra/dps/rend";
import "./feat/kuudra/dps/dpsFormater";
import "./feat/kuudra/dps/backBone"

register("command", () => Settings.openGUI()).setName("beuld");