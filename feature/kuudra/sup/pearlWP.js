import Settings from "../../../config"
import { registerWhen } from '../../../../BloomCore/utils/Utils'
import {getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";
import { coord3D, coord2D } from "../../../utils/math/Coord";
import {twoDSquaredDist, squaredDist} from "../../../utils/math/squaredDistance";
import {drawEqual, drawSlash, drawSquare, drawTri, drawX, supplies} from "./waypointFuncs";



class SuppliesCoord {
    constructor(name, coord2, dist) {
        this.name = name;
        this.coord = new coord2D(coord2.x, coord2.y);
        this.dist = dist ** 2;
        Object.freeze(this);
    }
}

const supTab = [
    new SuppliesCoord(supplies.SQUARE,     new coord2D(-140, -90), 15),
    new SuppliesCoord(supplies.X_CANNON,   new coord2D(-130, -111), 15),
    new SuppliesCoord(supplies.X,          new coord2D(-134, -135), 15),
    new SuppliesCoord(supplies.SLASH,      new coord2D(-111, -70), 10),
    new SuppliesCoord(supplies.EQUAL,      new coord2D(-66, -90), 15),
    new SuppliesCoord(supplies.TRIANGLE,   new coord2D(-68, -122), 18),
    new SuppliesCoord(supplies.SHOP,       new coord2D(-88, -125), 10)
]

let wp = [];
register('WorldLoad', () => {
    wp = [];
})
register('WorldUnload', () => {
    wp = [];
})


register('step', () => {
    if (!Settings.pearlwaypointtoggle/* || !getKPhase() == Phase.SUPPLIES*/) return;
    wp = [];
    supTab.forEach(s => {

        if (twoDSquaredDist(Player.getX(), Player.getZ(), s.coord.x, s.coord.y) <= s.dist) {
            wp.push(s.name);
            // ChatLib.chat(s.name)
        } else {
        }
    })
}).setFps(1);


registerWhen(
    register('renderWorld', () => {
        wp.forEach((waypoint) => {
            switch (waypoint) {
                case (supplies.SQUARE):
                    drawSquare(supplies.UNKNOWN);
                    break;
                case (supplies.TRIANGLE):
                    drawTri();
                    break;
                case (supplies.SHOP):
                    drawTri();
                    break;
                case (supplies.X):
                    drawX();
                    break;
                case(supplies.X_CANNON):
                    drawX();
                    break;
                case(supplies.EQUAL):
                    drawEqual();
                    break;
                case(supplies.SLASH):
                    drawSlash();
                    break;
                default:
                    break;
            }
        })
 }), () => getKPhase() === Phase.SUPPLIES);