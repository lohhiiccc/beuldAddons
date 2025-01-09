
import {getPearWaypoints, getSupWPTab} from "./loadWaypoints";

register('step', () =>{
    const Pearls = getPearWaypoints();

    Pearls.forEach((item) => {
        item.calcNeedRender();
    })
}).setFps(2);

register("renderWorld", () => {
    const supTab = getSupWPTab();
    const PearlTab = getPearWaypoints();
    supTab.forEach((item) => {
        item.render();
    });
    PearlTab.forEach((item) => {
        item.render();
    });
})
