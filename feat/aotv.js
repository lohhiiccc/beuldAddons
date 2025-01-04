import { registerWhen } from "../../BloomCore/utils/Utils"
import Settings from "../config"

registerWhen(register('soundPlay', (pos, name, vol, pitch, cat, event) => {
    if (name === 'mob.enderdragon.hit' && Player.getHeldItem()?.getName()?.removeFormatting().includes("Void")) {
        cancel(event);
        World.playSound(Settings.AotvSound, 1.0, 2.0);
    }
}), () => (Settings.AotvSoundToggle));