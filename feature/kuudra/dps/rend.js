import {getKPhase, getKuudraHP, Phase, getDpsStartTime} from "../../../utils/kuudra/getKuudraHp";
import { registerWhen } from "../../../../BloomCore/utils/Utils";
import Settings from "../../../config"
import location from "../../../utils/location";
import { formatDamage } from "../../../utils/format/damage";

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

// source: Chearys https://github.com/chearys/chearys-public/blob/main/features/kuudra/rend.js
let health = 24999;
registerWhen(register('packetReceived', () => {
    try {

        let diff = health - getKuudraHP();
        if (diff > 2083) {
            diff *= 9600; // convert damage to real damage (100k => 240m)
            ChatLib.chat(`&l[${((Date.now() - getDpsStartTime()) / 1000).toFixed(2)}s]&r ⇾ &apull: ${colorPull(diff)}${formatDamage(diff)}`);
            health = getKuudraHP();
            return;
        }
        health = getKuudraHP();
    } catch (error) {
        console.error('Error processing packet:', error);
    }
}).setFilteredClass(Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction")), () => (Settings.rendPullToggle && location.getWorld() === "Kuudra" && getKPhase() === Phase.DPS));
