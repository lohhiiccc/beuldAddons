
import {supplies} from "./waypointFuncs";
import {getDpsStartTime, getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";

let missinPre = supplies.UNKNOWN;
register('WorldLoad', () => {
    missinPre = supplies.UNKNOWN;
})
register('WorldUnload', () => {
    missinPre = supplies.UNKNOWN;
})

register("chat", (sup) => {
    if (getKPhase() !== Phase.SUPPLIES) return;

}).setCriteria("Party > ${*}: No ${sup}")
