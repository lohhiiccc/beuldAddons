import {delay} from "./delay";

class Location {
    #world = undefined;
    #zone = undefined;
    #tier = 0;
    #server = undefined;

    constructor() {
        /**
         * Set registers.
         */
        register("chat", (id) => {
            this.#server = id;
        }).setCriteria("Sending to server ${id}...");

        register("tick", () => {
            if (!World.isLoaded()) return;

            let zoneLine =
                Scoreboard?.getLines()?.find((line) => line.getName().startsWith(" §7⏣")) ??
                Scoreboard?.getLines()?.find((line) => line.getName().startsWith(" §5ф"));
            this.#zone = zoneLine === undefined ? "None" : zoneLine.getName().removeFormatting().substring(3);
        });

        register("worldLoad", () => {
            this.findWorld();
        }).setPriority(Priority.LOWEST);

        register("worldUnload", () => {
            this.#world = undefined;
        });

        register("serverDisconnect", () => {
            this.#world = undefined;
        });

    }

    /**
     * Returns Location.#world
     *
     * @returns {String} - Current world name i.e. "Gold Mine".
     */
    getWorld() {
        return this.#world;
    }

    /**
     * Returns Location.#zone
     *
     * @returns {String} - Current world name i.e. "Plot - 1".
     */
    getZone() {
        return this.#zone;
    }

    /**
     * Returns Location.#tier
     *
     * @returns {String} - Current tier of Kuudra or 0 if not in Kuudra.
     */
    getTier() {
        return this.#tier;
    }

    /**
     * Returns Location.#server
     *
     * @returns {String} - Current server id i.e. "m188AJ".
     */
    getServer() {
        return this.#server;
    }

    /**
     * Private.
     */
    findWorld = (noFind = 0) => {
        // Make sure Hypixel world is loaded)
        if (noFind > 9) return;
        else if (!World.isLoaded()) delay(() => this.findWorld(noFind + 1), 1000);

        // Get world from tab list
        let world = TabList.getNames()?.find((tab) => tab.startsWith("§r§b§lArea:") || tab.startsWith("§r§b§lDungeon:"));
        if (world === undefined) delay(() => this.findWorld(noFind + 1), 1000);
        else {
            // Get world formatted
            this.#world = world.removeFormatting().split(" ").splice(1).join(" ");

            // Get tier for Kuudra
            if (this.#world === "Kuudra") {
                delay(() => {
                    const zone = this.getZone();
                    this.#tier = parseInt(zone.charAt(zone.length - 2));
                }, 1000);
            }

            // Call functions when world is loaded
            delay(() => {
                setRegisters((!Scoreboard.getTitle().removeFormatting().includes("SKYBLOCK")));
                Client.showTitle(" ", "", 0, 1, 0); // Fix first title not showing
            }, 1000);
        }
    };
}
export default new Location();
