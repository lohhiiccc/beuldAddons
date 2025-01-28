import renderBeaconBeam from "../../../../BeaconBeam/index"
import Settings from "../../../config";
import {squaredDist, twoDSquaredDist} from "../../../utils/math/squaredDistance";
import location from "../../../utils/location";
import {drawTitle} from "../../../utils/render/customTitle";
import {registerWhen} from "../../../../BloomCore/utils/Utils"
import {getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";

let piles = [];


registerWhen(
    register('tick', () => {

        const entities = World.getAllEntities().filter(entity => entity.getName().removeFormatting().includes("PROGRESS:")); // PROGRESS:
        if (!entities.length) {
            piles = [];
            return;
        }

        let closestEntity = entities[0];
        let closestSquaredDistance = squaredDist(Player.getX(), Player.getY(), Player.getZ(), closestEntity.getX(), closestEntity.getY(), closestEntity.getZ());

        piles = [];
        entities.forEach((entity) => {
            const entityName = entity.getName().removeFormatting();

            const isComplete = entityName.includes("COMPLETE");
            const progressMatch = entityName.match(/PROGRESS: (\d+)%/);
            const progress = progressMatch ? progressMatch[1] : null;
            if (!isComplete) {
                piles.push({
                    x: entity.getX(),
                    z: entity.getZ(),
                    progress: progress
                });
            }

            const dist = squaredDist(Player.getX(), Player.getY(), Player.getZ(), entity.getX(), entity.getY(), entity.getZ());
            if (dist < closestSquaredDistance) {
                closestSquaredDistance = dist;
                closestEntity = entity;
            }
        });


    }), () => (location.getWorld() === "Kuudra" && getKPhase() === Phase.BUILD)
);

registerWhen(
    register("renderWorld", () => {
        piles.forEach(pile => {
            if (!pile.done) {
                const diff = pile.progress * 0.01;
                const sdist = twoDSquaredDist(pile.x, pile.z, Player.getX(), Player.getZ());
                const opacity = Math.max(sdist / 50, 0.7)

                renderBeaconBeam(pile.x, 79, pile.z, 1 - diff, diff, 0.1, opacity, true, 7);
            }
        });
    }), () => Settings.hilightPileToggle && getKPhase() === Phase.BUILD
);

register("worldLoad", () => {
    piles = [];
});

register("chat", () => {
    piles = [];
}).setCriteria("[NPC] Elle: OMG! Great work collecting my supplies!")
