import { registerWhen } from "../../../../BloomCore/utils/Utils"
import {getKPhase, Phase} from "../../../utils/kuudra/getKuudraHp";
import Settings from "../../../config"

let playerFresh = [];
register('chat', (player)=> {
    if (!Settings.freeshTimerToggle) return;
    player = player.split(" ").pop();
    const PlayerEntity = World.getAllPlayers().filter(e => e.getName() === player);
    playerFresh.push({"name": player, "ts": Date.now(), "player": PlayerEntity[0]});
}).setCriteria("Party > ${player}: FRESH${*}")

registerWhen(
register("renderWorld", () => {
    playerFresh.forEach((p, index) => {
        const timeLeft = ((10000 + p.ts - Date.now()) / 1000);
        if (timeLeft <= 0) {
            playerFresh.splice(index, 1);
            return;
        }
        Tessellator.drawString(
            `${timeLeft.toFixed(1)}s`
            , p.player.getRenderX()
            , (p.player.getRenderY() + 2.8)
            , p.player.getRenderZ()
            , 0x00b3d2
            , true
            , 0.05
            , false
        )
    })
}),() => getKPhase() === Phase.BUILD && Settings.freeshTimerToggle);