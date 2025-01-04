import {getKPhase, getKuudraHP, Phase, getDpsStartTime} from "../../Utils/kuudra/getKuudraHp";
import { registerWhen } from "../../../BloomCore/utils/Utils";
import location from "../../../VolcAddons/utils/Location"
import Settings from "../../config"
import { formatDamage } from "../../Utils/format/damage";

function colorPull(damage) {
    if (damage > 20e6 && damage < 40e6) {
        return "&4";
    } else if (damage > 40e6 && damage < 60e6) {
        return "&e";
    } else if (damage > 60e6) {
        return "&2";
    }
    return "&f";
}

let health = 24999;
registerWhen(register('packetReceived', () => {
    try {

        let diff = health - getKuudraHP();
        if (diff > 2083) {
            diff *= 9600; // convert damage to real damage (100k => 240m)
            ChatLib.chat(`&l[${((Date.now() - getDpsStartTime()) / 1000).toFixed(1)}s]&r ⇾ &apull: ${colorPull(diff)}${formatDamage(diff)}`);
            health = getKuudraHP();
            return;
        }
        health = getKuudraHP();
    } catch (error) {
        console.error('Error processing packet:', error);
    }
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")), () => (Settings.rendPullToggle && location.getWorld() === "Kuudra" && getKPhase() === Phase.DPS));
