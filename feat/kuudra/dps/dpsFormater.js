import Settings from "../../../config";
import {getKPhase, Phase, getDpsStartTime} from "../../../Utils/kuudra/getKuudraHp";

function GetEndStoneSwordBuff(mana) {
    return '+' + Math.min(500, (Math.floor(mana / 5))) + '%';
}
register("chat", (name, mana, event) => {
    name = name.split(" ").pop();
    if (!Settings.dpsFormatterToggle || getKPhase() !== Phase.DPS || name === Player.getName()) return;
    ChatLib.chat(`&l[${((Date.now() - getDpsStartTime()) / 1000).toFixed(1)}s]&r&8[${name}]&r ⇾ &a${GetEndStoneSwordBuff(mana)}&o&7(${mana})`);
    cancel(event);
}).setCriteria("Party > ${name}: Used ${mana} mana ${*}");

register("chat", (mana, event) => {
    if (!Settings.dpsFormatterToggle || getKPhase() !== Phase.DPS) return;
    ChatLib.chat(`&l[${((Date.now() - getDpsStartTime()) / 1000).toFixed(1)}s]&r&8[${Player.getName()}]&r ⇾ &a${GetEndStoneSwordBuff(mana)}&o&7(${mana})`);
    cancel(event);
}).setCriteria("Used Extreme Focus! (${mana} Mana)")

register("chat", (event) => {
    if (!Settings.dpsFormatterToggle || getKPhase() !== Phase.DPS) { return; }
    cancel(event);
}).setCriteria("You now have ${*} Damage Resistance for 5 seconds and ${*} damage on your next hit within 5 seconds!");

register("chat", (event) => {
    if (!Settings.dpsFormatterToggle || getKPhase() !== Phase.DPS) { return }
    cancel(event);
}).setCriteria("[NPC] Elle: ${*}");