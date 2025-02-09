
//&r&b[MVP&r&3+&r&b] lohhiiccc&r&f &r&a&lrecovered one of Elle's supplies! &r&8(1/6)&r

import {runStartT} from "../../../utils/kuudra/getKuudraHp";
import Settings from "../../../config"

register("chat", (player, num, event) => {
    if (!Settings.suppliesTimeToggle) return; // todo: add condition
    cancel(event);
    ChatLib.chat(`${player}&r&a&l recovered a supplies at ${((Date.now() - runStartT()) / 1000).toFixed(2)}s!&r&8${num}`);
}).setCriteria("${player}&a&lrecovered one of Elle's supplies!${num}");