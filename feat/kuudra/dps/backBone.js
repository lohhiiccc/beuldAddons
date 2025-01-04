import {registerWhen} from "../../../../BloomCore/utils/Utils"
import {getDpsStartTime, getKPhase, Phase} from "../../../Utils/kuudra/getKuudraHp";
import Settings from "../../../config";

let count = 0;
registerWhen(register("SoundPlay", (a, b, c, d, e, f) => {
    if(!Player.getHeldItem()) return;
    let itemH = Player.getHeldItem().getName().removeFormatting();
    if (itemH.includes("Terminator") || itemH.includes("Last Breath")) return;

    if (count === 0) {
        count = 1;
        console.log("Count: " + count);
        return;
    }

    if (count === 1) {
        count = 2;
        console.log("Count: " + count);
        ChatLib.chat(`&l[${((Date.now() - getDpsStartTime()) / 1000).toFixed(1)}s]&r&8[BackBone] ⇾ &a${Player.getHeldItem().getName()})`);
    }

}).setCriteria("tile.piston.out"), () => Settings.backBoneToggle && getKPhase() == Phase.DPS);

register('worldUnload', () => {
    count = 0;
})
