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
    , () => getKPhase() === Phase.SUPPLIES && Settings.PCAreaToggle
)

registerWhen(
    register("renderWorld", () => {
        supTab.forEach((sup) => {
            if (getKPhase() !== Phase.DPS)
                RenderLib.drawInnerEspBox(sup.getRenderX(), sup.getRenderY(), sup.getRenderZ(), sup.getWidth(), sup.getHeight(), 0.8, 0.8 ,0.8 , 0.2, false);
        })
    })
    , () => Settings.PCAreaToggle
)



register("worldLoad", () => {
    supTab = [];
}).setPriority(Priority.LOWEST);
