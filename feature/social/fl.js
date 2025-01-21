
// const flRegex = /^-{5,54}\n\s+<< Friends \(Page \d+ of \d+\) >>\n((.*\n)*)/ cursed regex


let isFoRunning = false;
register("command", () => {
    isFoRunning = true
    ChatLib.command("friend list")
    ChatLib.chat("&9&m-----------------------------------------------------&r&9")
}).setName("fo")

const nbPageRegex = /Friends \(Page (\d+) of (\d+)\)/
register("chat", (msg, event) => {
    if (!isFoRunning || !msg.includes("Friends (Page ")) {
        isFoRunning = false;
        return;
    }
    cancel(event)
    const friends = msg.split("->newLine<-");

    let containOffline = false;
    const nbPageM = friends[0].match(nbPageRegex);
    if (nbPageM && nbPageM[1] === nbPageM[2]) containOffline = true;
    friends.splice(0, 1);
    friends.splice(friends.length - 1, 1);

    friends.forEach((f) => {
        containOffline = (containOffline || (f.includes("offline") || f === "&r&9"))
        if (containOffline) {
            isFoRunning = false;
            return
        }

        const split = f.split(" ")
        const unformatedName = split[0].removeFormatting();
        const msg = new Message(new TextComponent(`&9[+]&r `).setClick("run_command", `/party invite ${unformatedName}`).setHover("show_text", `&9/p ${split[0]}`)).addTextComponent(new TextComponent(`${split[0]} &a⇾&e ${(split.splice(1).join(" ").replace(" Master Mode The Catacombs -", ""))}`).setClick("run_command", `/pv ${unformatedName}`).setHover("show_text", `&d/pv ${split[0]}`));
        msg.chat()
    })
    if (isFoRunning)
        ChatLib.command(`friend list ${parseInt(nbPageM[1]) + 1}`)
    else
        ChatLib.chat("&9&m-----------------------------------------------------&r&9")
}).setCriteria("&9&m-----------------------------------------------------&r&9\n" + "${msg}")

