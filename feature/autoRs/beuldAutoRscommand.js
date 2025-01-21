import autoRsSettings from "./config";

function computeState(state, toggle, type) {
    switch (state) {
        case "on":
            switch (toggle) {

                case ("d"):
                    autoRsSettings.isAutoRsRunningD = true
                    break;
                case ("k"):
                    autoRsSettings.isAutoRsRunningK = true
                    break;
            }
            ChatLib.chat(`&3&l[${type}] &r&e&lauto rs &r&2on`);
            break;
        case "off":
            switch (toggle){
                case ("d"):
                    autoRsSettings.isAutoRsRunningD = false
                    break;
                case ("k"):
                    autoRsSettings.isAutoRsRunningK = false
                    break;
            }
            ChatLib.chat(`&3&l[${type}] &r&e&lauto rs &r&4off`);
            break;
        default:
            return true;
    }
    return false;
}

register("command", (type, state) => {
    switch (type) {
        case (undefined):
            if (state === undefined) autoRsSettings.openGUI();
            return;
        case ("kuudra"):
            if (!computeState(state, "k", type)) return;
        case ("dungeon"):
            if (!computeState(state, "d", type)) return;
        case ("dg"):
            if (!computeState(state, "d", type)) return;
        default:
            ChatLib.chat("&3/beuldAutoRs &e<kuudra/dg>(optional) <on/off>");
            break;
    }
}).setName("beuldAutoRs");
