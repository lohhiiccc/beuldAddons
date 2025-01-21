import RenderLib from "../../../../RenderLib/index";
import { registerWhen } from "../../../../BloomCore/utils/Utils"
import {getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";
import renderBeaconBeam from "../../../../BeaconBeam/index"
import {twoDSquaredDist} from "../../../utils/math/squaredDistance";
import Settings from "../../../config"


class supplie {
    constructor(x, z) {
        this.x = x ;
        this.z = z ;
        this.completed = false;
    }


    render() {
        RenderLib.drawEspBox(this.x + .5, 78.3, this.z + .5, 0.7, 0.7, 1, 0, 0, 1, Player.getY() > 78);
        if (!this.completed) {
            const sdist = twoDSquaredDist(Player.getX(), Player.getZ(), this.x, this.z);
            let opacity = 0.85;
            if (sdist < 100) opacity = Math.max(sdist / 100, 0.35)
            renderBeaconBeam(this.x, 79, this.z , 1, 0, 0, opacity, true);
        }
    }
}


const pilesTab = [
    new supplie(-98, -112),
    new supplie(-98, -99),
    new supplie(-110, -106),
    new supplie(-106, -112),
    new supplie(-94, -106),
    new supplie(-106, -99)
];

register("worldLoad", () =>  {
    pilesTab.forEach((s) => {
        s.completed = false
    })
});

// source: nwjn addons
registerWhen(
register("step", () => {
    const endedPiles = World.getAllEntitiesOfType(Java.type('net.minecraft.entity.item.EntityArmorStand').class).filter(armorStand => armorStand.getName().includes("SUPPLIES RECEIVED"))

    endedPiles.forEach((entity) => {
        pilesTab.forEach((pile) => {
            if (~~entity.getX() === pile.x && ~~entity.getZ() === pile.z) pile.completed = true;
        })
    })
}).setFps(5), () => getKPhase() === Phase.SUPPLIES && Settings.supBeaconToggle)



registerWhen (
register("renderWorld", () => {
    pilesTab.forEach(supplie => supplie.render())

}),
    () => getKPhase() === Phase.SUPPLIES && Settings.supBeaconToggle)