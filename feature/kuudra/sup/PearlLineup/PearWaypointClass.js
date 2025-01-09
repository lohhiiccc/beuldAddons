import RenderLib from "../../../../../RenderLib/index"
import {squaredDist} from "../../../../utils/math/squaredDistance";

export class SuppWaypointArea {
    constructor(x, y, z, r, g, b, dist, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        this.g = g;
        this.b = b;
        this.Sdist = dist ** 2;
        this.name = name;
    }

    render() {
        RenderLib.drawEspBox(this.x, this.y, this.z, 1, 1, this.r, this.g, this.b, 1, true);
    }
}

export class PearWaypointClass {
    constructor(x, y, z, name, supWaypoint) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.supWaypoint = new SuppWaypointArea(supWaypoint.x, supWaypoint.y, supWaypoint.z, supWaypoint.r, supWaypoint.g, supWaypoint.b, Math.sqrt(supWaypoint.Sdist), supWaypoint.name);
        this.needRender = false;
        this.rname = false;
    }

    calcNeedRender() {
        this.needRender = (squaredDist(Player.getX(), 0, Player.getZ(), this.supWaypoint.x, 0, this.supWaypoint.z) <= this.supWaypoint.Sdist);
        // ChatLib.chat(`calculate: for ${this.name} from: ${this.supWaypoint.name}: ${this.needRender}`)
    }

    render() {
        if (!this.needRender) return ;
        RenderLib.drawInnerEspBox(this.x, this.y, this.z, 1, 1, this.supWaypoint.r, this.supWaypoint.g, this.supWaypoint.b, 1, true);
        if (this.rname || this.name === null || this.name === undefined) return false;
        Tessellator.drawString(this.name, this.x, this.y, this.z, 0xff0000, true, 0.25, false);
    }
}