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
    let t = [];
    const jsonFilePath = "feature/kuudra/sup/PearlLineup/PearlWaypoint.json";
    const jsonString = FileLib.read("beuld", jsonFilePath);
    if (!jsonString) {
        console.error("error: can't open ", jsonFilePath);
        return;
    }

    try {
        const data = JSON.parse(jsonString);

        data.pearlWaypoint.forEach((item) => {
            const name = item.name;
            const from = item.from;
            const {x, y, z} = item.coordinate;
            for (let i = 0; i < supWpTab.length; i++) {
                if (supWpTab[i].name === from) {
                    wpTab.push(new PearWaypointClass(x, y, z, name, supWpTab[i]));
                }
            }
            console.log(x, y, z);
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
