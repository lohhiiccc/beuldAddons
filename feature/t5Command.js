
import { getKuudraTiersString } from "../utils/kuudra/getKuudraTiers";
import autoRsSettings from "./autoRs/config";


register("command", () => ChatLib.command(`joininstance ${getKuudraTiersString(5)}`)).setName("t5");
register("command", () => ChatLib.command(`joininstance ${getKuudraTiersString(4)}`)).setName("t4");
register("command", () => ChatLib.command(`joininstance ${getKuudraTiersString(3)}`)).setName("t3");
register("command", () => ChatLib.command(`joininstance ${getKuudraTiersString(2)}`)).setName("t2");
register("command", () => ChatLib.command(`joininstance ${getKuudraTiersString(1)}`)).setName("t1");

