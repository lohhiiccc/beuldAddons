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
        RenderLib.drawEspBox(this.x, this.y, this.z, 1, 1, this.r, this.g, this.b, 1, false);
    }
}

export class PearWaypointClass {
    constructor(x, y, z, r, g, b, name, supWaypoint) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.supWaypoint = supWaypoint;
        this.needRender = false;
    }

    calcNeedRender() {
        if (this.supWaypoint === null || this.supWaypoint === undefined) {return}
        this.needRender = (squaredDist(this.supWaypoint.x, this.supWaypoint.y, this.supWaypoint.z, this.x, this.y, this.z) <= this.supWaypoint.Sdist);
        if (this.needRender) {
            ChatLib.chat("need render true");
        } else {
            ChatLib.chat("need render false");
        }
    }

    render() {
        if (!this.needRender) return ;
        RenderLib.drawEspBox(this.x, this.y, this.z, 1, 1, this.supWaypoint.r, this.supWaypoint.g, this.supWaypoint.b, 1, true);
        if (this.name === null || this.name === undefined) return false;
        Tessellator.drawString(this.name, this.x, this.y, this.z, 0xff0000, true, 0.25, false);
    }
}