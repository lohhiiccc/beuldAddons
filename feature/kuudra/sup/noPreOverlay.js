
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

registerWhen(register("renderOverlay", () => {
    const [ width, height ] = [
        Renderer.screen.getWidth(),
        Renderer.screen.getHeight()
    ]

    Renderer.scale(2);
    Renderer.drawString(missing, data.noPreOverlayX, data.noPreOverlayY, true);
}), () => Settings.missingSuppliesToggle && getKPhase() === Phase.SUPPLIES)