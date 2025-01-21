import PogObject from "../../PogData"

export let data = new PogObject("beuld", {
    KBgfsPearl: 0,
})

register("gameUnload", () => {
    data.save();
}).setPriority(Priority.LOWEST);
