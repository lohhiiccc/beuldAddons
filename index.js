import Settings from "./config";

import "./feat/aotv";
import "./feat/kuudra/beuld";
import "./feat/kuudra/rend";

register("command", () => Settings.openGUI()).setName("beuld");