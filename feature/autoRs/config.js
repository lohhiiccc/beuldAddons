import { @Vigilant, @SelectorProperty ,@TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("beuld/feature/autoRs", "§aauto restart §r§l§4(WIP)", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["Kuudra", "Dungeon"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})
class autoRsSettings {
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Kuudra", "§4§lKuudra §r§aauto restart settings")
        this.setCategoryDescription("Dungeon", "§4§lDungeon §r§aauto restart settings§r§7 (not implemented yet)")

        this.addDependency("Kuudra tiers", "Kuudra main toggle")
        this.addDependency("Downtime", "Kuudra main toggle")
        this.addDependency("Announce in chat", "Kuudra main toggle")

        this.addDependency("Floor", "Dungeon main toggle")
        this.addDependency("Downtime ", "Dungeon main toggle")
        this.addDependency("Dungeon mod", "Dungeon main toggle")
        this.addDependency("Announce in chat ", "Dungeon main toggle")

    }


    @SwitchProperty({
        name: "Kuudra main toggle",
        description: "main toggle for auto rs",
        category: "Kuudra",
    })
    isAutoRsRunningK = false;

    @SliderProperty({
        name: "Kuudra tiers",
        description: "kuudra tiers for auto rs (1 to 5)",
        min: 1,
        max: 5,
        placeholder: 5,
        category: "Kuudra",
    })
    autoRsTiersK = 5;

    @SliderProperty({
        name: "Downtime",
        description: "downtime in second between two run",
        min: 7,
        max: 30,
        placeholder: 7,
        category: "Kuudra",
    })
    autoRsDowntimeK = 7;

    @SwitchProperty({
        name: "Announce in chat",
        description: "announce dt and !dt command in p chat",
        category: "Kuudra",
    })
    autoRsAnnounceK = false;



    @SwitchProperty({
        name: "Dungeon main toggle",
        description: "main toggle for auto rs",
        category: "Dungeon",
    })
    isAutoRsRunningD = false;

    @SelectorProperty({
        name: "Dungeon mod",
        description: "basic / master",
        category: "Dungeon",
        options: ["normal", "master"]
    })
    autoRsDungeonMod = 0;

    @SliderProperty({
        name: "Floor",
        description: "dungeon tiers for auto rs (1 to 7)",
        min: 1,
        max: 7,
        placeholder: 5,
        category: "Dungeon",
    })
    autoRsTiersD = 5;

    @SliderProperty({
        name: "Downtime ",
        description: "downtime in second between two run",
        min: 1,
        max: 30,
        placeholder: 7,
        category: "Dungeon",
    })
    autoRsDowntimeD = 7;

    @SwitchProperty({
        name: "Announce in chat ",
        description: "announce dt and !dt command in p chat",
        category: "Dungeon",
    })
    autoRsAnnounceD = false;

}

export default new autoRsSettings();