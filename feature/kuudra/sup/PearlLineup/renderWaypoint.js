import {registerWhen} from "../../../../../BloomCore/utils/Utils"
import {getPearWaypoints, getSupWPTab} from "./loadWaypoints";
import {getKPhase, Phase} from "../../../../utils/kuudra/getKuudraHp";
import Settings from "../../../../config";

register('step', () =>{
    if (getKPhase() !== Phase.SUPPLIES) return;
    const Pearls = getPearWaypoints();

    Pearls.forEach((item) => {
        item.calcNeedRender();
    })
}).setFps(5);

registerWhen(
register("renderWorld", () => {
    const supTab = getSupWPTab();
    const PearlTab = getPearWaypoints();
    supTab.forEach((item) => {
        item.render();
    });
    PearlTab.forEach((item) => {
        item.render();
    });
}), () => getKPhase() === Phase.SUPPLIES && Settings.pearlwaypointtoggle)
