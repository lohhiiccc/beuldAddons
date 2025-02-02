import PogObject from "../../PogData"

export let data = new PogObject("beuld", {
    KBgfsPearl: 0,
    noPreOverlayX: 100,
    noPreOverlayY: 100,
})

register("gameUnload", () => {
    data.save();
}).setPriority(Priority.LOWEST);
