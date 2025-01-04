import { registerWhen } from "../../../BloomCore/utils/Utils"
import  location from "../location"
import {squaredDist} from "../math/squaredDistance";

export function getKuudraHP() { return kHP; }
export function getKPhase() { return kPhase; } // only dps and supplies detected rn
export function getDpsStartTime() { return dpsStartTime; }

export const Phase = Object.freeze({
    SUPPLIES: 0,
    BUILD: 1,
    STUN: 2,
    SKIP: 3,
    DPS: 4
});


let cubesTab = 0;
let kHP = 0;
let kPhase = 0;
let dpsStartTime = 0;
registerWhen(
    register("tick", () => {
        cubesTab = World.getAllEntitiesOfType(Java.type('net.minecraft.entity.monster.EntityMagmaCube').class); //get all magma cube
        const kuudra = cubesTab.find( //find kuudra using size and min hp
            (cube) => cube.getWidth().toFixed(1) == 15.3 && cube.getEntity().func_110143_aJ() <= 100_000
        );
        if (kuudra === undefined) return;
        kHP = kuudra.getEntity().func_110143_aJ();
    }), () => location.getWorld() === "Kuudra"
);



register("chat", () => {
    dpsStartTime = Date.now();
    kPhase = Phase.SKIP;
    console.log("skip started");
}).setCriteria("[NPC] Elle: POW! SURELY THAT'S IT! I don't think he has any more in him!")

registerWhen( // bad way to detect when skip ended
    register('tick', () => {
        console.log("fewiufehwi")
        if (squaredDist(Player.getX(), Player.getY(), Player.getX(), -102, 6, -104) < 50) { //196 == (platform radius / 2) ^ 2
            dpsStartTime = Date.now();
            kPhase = Phase.DPS;
            console.log("skip ended");
        }
    }), () => (kPhase === Phase.SKIP)
)

register("chat", () => {
    kPhase = Phase.SUPPLIES;
    console.log("phase = supplies");
}).setCriteria("[NPC] Elle: Okay adventurers, I will go and fish up Kuudra!")

