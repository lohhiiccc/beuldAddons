import Settings from "./config"

import "./feature/aotv"
import "./feature/kuudra/build/beuld"
import "./feature/kuudra/dps/rend"
import "./feature/kuudra/dps/dpsFormater"
import "./feature/kuudra/sup/sup"
import "./feature/kuudra/sup/PearlLineup/renderWaypoint"
import "./feature/kuudra/sup/renderPiles"
import "./feature/autoRs/autors"
import "./feature/t5Command"
import "./feature/social/fl"
import "./feature/social/clickablesSocial"
import "./feature/pearl"
import "./feature/kuudra/build/fresh"
import "./feature/kuudra/sup/noPreOverlay"

import "./feature/kuudra/sup/recoveryTimer"

register("command", () => Settings.openGUI()).setName("beuld")
