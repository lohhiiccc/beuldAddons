
import autoRsSettings from "./config"
import Party from "../../../BloomCore/Party"
import {getKuudraTiersString} from "../../utils/kuudra/getKuudraTiers";

// NEED: Party > (optional rank) (name): (optional whitespace)(some command prefix)(dt)(optional reason)
const dtRegex = /^Party > (\[[\w+]+\] )*[\w_]+: \s*[!.?]*dt.*/
register("chat", () => {
    console.log(`dt regex match party leader: ${Party.leader}`);
    if (Party.leader !== Player.getName()) return;
    if (autoRsSettings.isAutoRsRunningD || autoRsSettings.isAutoRsRunningK) {
        autoRsSettings.isAutoRsRunningK = false;
        autoRsSettings.isAutoRsRunningD = false;
        ChatLib.command("pc [auto restart] => DT");
    }
}).setCriteria(dtRegex)

const kuudraDown = "&r&f                               &r&6&lKUUDRA DOWN!&r";
register("chat", (message) => {
    if (message !== kuudraDown) return;
    if (!autoRsSettings.isAutoRsRunningK) return;
    setTimeout(() => {
        if (autoRsSettings.isAutoRsRunningK && Party.leader === Player.getName() && Party.members?.length === 3) {
            ChatLib.command(`/joininstance ${getKuudraTiersString(autoRsSettings.autoRsTiersK)}`);
        }
    }, autoRsSettings.autoRsDowntimeK * 1000)

    console.log(message);
})

/*---------*/
/* dungeon */

register("command", () => autoRsSettings.openGUI()).setName("beuldAutoRs");
