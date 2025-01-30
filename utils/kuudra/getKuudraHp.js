import { registerWhen } from "../../../BloomCore/utils/Utils"
import  location from "../location"
import {squaredDist} from "../math/squaredDistance";

export function getKuudraHP() { return kHP; }
export function getKPhase() { return kPhase; }
export function getDpsStartTime() { return dpsStartTime; }

export const Phase = Object.freeze({
    ENDED: -1,
    SUPPLIES: 0,
    BUILD: 1,
    STUN: 2,
    SKIP: 3,
    DPS: 4
});


//source: volcaddons https://github.com/zhenga8533/VolcAddons/blob/main/features/kuudra/KuudraDetect.js
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
        if (squaredDist(Player.getX(), Player.getY(), Player.getX(), -102, 6, -104) < 50) {
            dpsStartTime = Date.now();
            kPhase = Phase.DPS;
            // console.log("skip ended");
        }
    }), () => (kPhase === Phase.SKIP)
)

register("chat", () => {
    kPhase = Phase.SUPPLIES;
    console.log("phase = supplies");
}).setCriteria("[NPC] Elle: Okay adventurers, I will go and fish up Kuudra!")

register("chat", () => {
    kPhase = Phase.STUN;
    console.log("phase = stun");
}).setCriteria("[NPC] Elle: Phew! The Ballista is finally ready! It should be strong enough to tank Kuudra's blows now!")

register("chat", () => {
    kPhase = Phase.BUILD;
    console.log("phase = build");
}).setCriteria("[NPC] Elle: OMG! Great work collecting my supplies!")


register("worldLoad", () => {
    kPhase = Phase.ENDED;
}).setPriority(Priority.LOWEST);