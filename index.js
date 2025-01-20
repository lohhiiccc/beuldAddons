import Settings from "./config";


import "./feature/aotv";
import "./feature/kuudra/build/beuld";
import "./feature/kuudra/dps/rend";
import "./feature/kuudra/dps/dpsFormater";
import "./feature/kuudra/sup/pc"
import "./feature/kuudra/sup/PearlLineup/renderWaypoint"
import "./feature/kuudra/sup/renderPiles"
import "./feature/autoRs/autors"
import "./feature/t5Command"

register("command", () => Settings.openGUI()).setName("beuld");

// import RenderLib from "../RenderLib/index"
// register("renderWorld", () => {
//     const endedPiles = World.getAllEntities()
//     endedPiles.forEach((entity) => {
//         if (entity.getName() != Player.getName())
//         RenderLib.drawInnerEspBox(entity.getRenderX(), entity.getRenderY(), entity.getRenderZ(), entity.getWidth(), entity.getHeight(), 0.8, 0.8 ,0.8 , 0.2, false);
//     })
// })
//
