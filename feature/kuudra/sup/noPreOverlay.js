
import { registerWhen } from "../../../../BloomCore/utils/Utils"
import Settings from "../../../config"
import { data } from "../../../utils/data"
import {getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";

let missing = ""
register("worldLoad", () => {
    missing = ""
})

register("chat", (supply) => {
    if (!Settings.missingSuppliesToggle) return;
    missing = `No ${supply}!`
}).setCriteria("Party > ${*}: No ${supply}!")


register("dragged", (mx, my, x, y) => {
    if (!Settings.missingSuppliesMove.isOpen()) return;
    data.noPreOverlayX = x * 0.5
    data.noPreOverlayY = y * 0.5
    data.save()
})

register("step", () => {
    if (Settings.missingSuppliesMove.isOpen())
        missing = "No Pre"
    else if (missing === "No Pre") {
        missing = ""
    }
}).setFps(2)

let index = 0;
register("scrolled", (x, y, dir) => {
    if (!Settings.missingSuppliesMove.isOpen()) return;

    const opt = ["center", "left", "right"];
    index += dir;
    if (index < 0) index = 2;
    if (index > 2) index = 0;
    data.noPreOverlayAlign = opt[index];
    data.save();
    ChatLib.chat(`&r&l&aAlign:&2 ${data.noPreOverlayAlign}`)
})

registerWhen(register("renderOverlay", () => {
    const [ width, height ] = [
        Renderer.screen.getWidth(),
        Renderer.screen.getHeight()
    ]

    const textWidth = Renderer.getStringWidth(missing);
    Renderer.scale(2);
    let drawX = data.noPreOverlayX;
    switch (data.noPreOverlayAlign) {
        case "center":
            drawX = data.noPreOverlayX - (textWidth * 0.5);
            break;
        case "left":
            break;
        case "right":
            drawX = data.noPreOverlayX - textWidth;
            break;
    }

    Renderer.drawString(missing, drawX, data.noPreOverlayY, true);

    if (!Settings.missingSuppliesMove.isOpen()) return // config gui code below

    Renderer.scale(2);
    Renderer.drawLine(Renderer.RED, 0, data.noPreOverlayY, width, data.noPreOverlayY, 0.5);
    Renderer.scale(2);
    Renderer.drawLine(Renderer.RED, data.noPreOverlayX, 0, data.noPreOverlayX, height, 0.5);

    Renderer.scale(2);
    Renderer.drawLine(Renderer.GREEN, drawX, data.noPreOverlayY + 4, drawX + textWidth, data.noPreOverlayY + 4, 8, 2); // rectangle


}), () => Settings.missingSuppliesToggle && (getKPhase() === Phase.SUPPLIES || Settings.missingSuppliesMove.isOpen()))
