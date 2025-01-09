
import Settings from "../../../config";
import {squaredDist} from "../../../utils/math/squaredDistance";
import location from "../../../utils/location";
import {drawTitle} from "../../../utils/render/customTitle";
import { registerWhen } from "../../../../BloomCore/utils/Utils"


let buildProgress = null;
registerWhen(
register('tick', () => {
    if (!Settings.BeuldIndicator) {
        buildProgress = null;
        return;
    }

    const entity = World.getAllEntities().filter(entity => entity.getName().removeFormatting().includes("PROGRESS:"));
    if (!entity.length) {
        buildProgress = null;
        return ;
    }
    let closestEntity = entity[0];
    let closestSquaredDistance = squaredDist(Player.getX(), Player.getY(), Player.getZ(), entity[0].getX(), entity[0].getY(), entity[0].getZ());;
    for (let i = 1; i < entity.length; i++) {
        let dist = squaredDist(Player.getX(), Player.getY(), Player.getZ(), entity[i].getX(), entity[i].getY(), entity[i].getZ());
        if (dist < closestSquaredDistance) {
            closestSquaredDistance = dist;
            closestEntity = entity[i];
        }
    }
    const name = closestEntity.getName();
    buildProgress = name.substring(name.search(': ') + 2, name.length);
}), () => location.getWorld() === "Kuudra")

registerWhen(
register("renderOverlay", () => {
    drawTitle(buildProgress, " ");
}), () => location.getWorld() === "Kuudra" && (buildProgress !== null));
