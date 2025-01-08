
import Settings from "../../../config";
import {squaredDist} from "../../../utils/math/squaredDistance";
import {registerWhen} from "../../../../BloomCore/utils/Utils";
import location from "../../../utils/location";

registerWhen(register('step', () => {
    const entity = World.getAllEntities().filter(entity => entity.getName().removeFormatting().includes("PROGRESS:"));
    if (!entity.length) { return ; }
    let closestEntity = entity[0];
    let closestSquaredDistance = squaredDist(Player.getX(), Player.getY(), Player.getZ(), entity[0].getX(), entity[0].getY(), entity[0].getZ());;
    for (let i = 1; i < entity.length; i++) {
        let dist = squaredDist(Player.getX(), Player.getY(), Player.getZ(), entity[i].getX(), entity[i].getY(), entity[i].getZ());
        if (dist < closestSquaredDistance) {
            closestSquaredDistance = dist;
            closestEntity = entity[i];
        }
    }
    Client.showTitle(` `, closestEntity.getName(), 0, 1, 0);
}).setFps(1), () => location.getWorld() === "Kuudra" && Settings.BeuldIndicator)