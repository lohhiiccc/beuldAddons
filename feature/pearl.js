import Settings from "../config"
import { data } from "../utils/data"

const bindKey = new KeyBind("gfs ender pearl", data.KBgfsPearl, "beuld");
register("gameUnload", () => {
    data.KBgfsPearl = bindKey.getKeyCode();
}).setPriority(Priority.HIGHEST);

// same than skyhanni but cant q more than one stack
let last = Date.now();
let qRunning = false;
bindKey.registerKeyPress(() => {
    if (bindKey.getKeyCode() === 0 || qRunning) return;
    let tSpend = Date.now() - last;
    if (tSpend < 1550) {
        qRunning = true
        setTimeout(() => {
            ChatLib.command(`gfs ender_pearl ${Settings.gfsPearl}`);
            last = Date.now();
            qRunning = false;
        }, 1550 - tSpend);
        return;
    }
    last = Date.now();
    ChatLib.command(`gfs ender_pearl ${Settings.gfsPearl}`);
})