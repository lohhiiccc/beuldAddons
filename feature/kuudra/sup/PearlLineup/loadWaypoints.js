import {PearWaypointClass, SuppWaypointArea} from "./PearWaypointClass";

let supWpTab = [];
export function getSupWPTab(){ return supWpTab; }

function loadSuppWaypoints() {
    const jsonFilePath = "feature/kuudra/sup/PearlLineup/SuppWaypoint.json";
    const jsonString = FileLib.read("beuld", jsonFilePath);
    if (!jsonString) {
        console.error("Erreur: Le fichier JSON est vide ou n'a pas été lu correctement.");
        return;
    }

    try {
        const data = JSON.parse(jsonString);


        supWpTab = [];
        // console.log("supWpTab:");
        data.suppWaypoint.forEach((item) => {
            const { x, y, z } = item.coordinate;
            const { r, g, b } = item.color;
            const dist = item.dist;
            const name = item.name;
            // console.log(item.name, ":");
            // console.log(x, y, z, r, g, b, dist);
            supWpTab.push(new SuppWaypointArea(x, y, z, r, g, b, dist, name));
        });
    } catch (e) {
        console.error("error:", e);
    }
}


let wpTab = []
export function getPearWaypoints() {return wpTab}
function loadPearlWaypoints() {
    const jsonFilePath = "feature/kuudra/sup/PearlLineup/PearlWaypoint.json";
    const jsonString = FileLib.read("beuld", jsonFilePath);
    if (!jsonString) {
        console.error("error: cant open ", jsonFilePath);
        return;
    }

    try {
        const data = JSON.parse(jsonString);


        wpTab = [];
        console.log("waypoint:");
        data.pearlWaypoint.forEach((item) => {
            const { x, y, z } = item.coordinate;
            const name = item.name;
            supWpTab.forEach((i) => {
                if (i.name === item.from) {
                    wpTab.push(new PearWaypointClass(x, y, z, name, i))
                }
            })
        });
    } catch (e) {
        console.error("error:", e);
    }
}


register("worldLoad", () => {
    loadSuppWaypoints();
    loadPearlWaypoints()
});
register("worldUnload", () => {
    supWpTab = [];
    wpTab = [];
});
