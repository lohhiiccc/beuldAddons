import {registerWhen} from "../../../../BloomCore/utils/Utils"
import {Phase, getKPhase} from "../../../utils/kuudra/getKuudraHp";
import RenderLib from "../../../../RenderLib/index";
import Settings from "../../../config";

let supTab = []
registerWhen(
    register('tick', () =>{
        const giantTab = World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntityGiantZombie").class);
        const supplies = giantTab.filter((giant) => giant.getY() < 67);
        supTab = [];
        supplies.forEach((sup) => {
            supTab.push(sup);
        })
    })
    , () => getKPhase() === Phase.SUPPLIES
)

registerWhen(
    register("renderWorld", () => {
        supTab.forEach((sup) => {
            RenderLib.drawEspBox(sup.getRenderX() - 1.7,73, sup.getRenderZ() + 3.7, 1, 1, 1, 0, 0, 1, true);
            if (Settings.PCAreaToggle)
                RenderLib.drawInnerEspBox(sup.getRenderX(), sup.getRenderY(), sup.getRenderZ(), sup.getWidth(), sup.getHeight(), 0.8, 0.8 ,0.8 , 0.2, false);
        })
    })
    , () => getKPhase() === Phase.SUPPLIES
)



register("worldLoad", () => {
    supTab = [];
}).setPriority(Priority.LOWEST);
