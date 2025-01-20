
import Settings from "../../config"

const socialRegex = /^(&.?Friend|&.?Guild) > (&r?&.?[\w]+) &r(&.?left|&.?joined).&r$/
register("chat", (type, player, action, event) => {
    console.log("a");
    if (!Settings.ClickableSocial) return;
    cancel(event)
    const msg = new Message(new TextComponent(`${type} > ${player} ${action}.`).setClick("run_command", `/pv ${player.removeFormatting()}`).setHover("show_text", `&d/pv ${player.removeFormatting()}`))
    msg.chat();
}).setCriteria(socialRegex);