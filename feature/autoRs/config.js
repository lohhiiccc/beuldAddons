import { @Vigilant, @SelectorProperty ,@TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("autoRs", "§aauto restart §r§l§4(WIP)")
class autoRsSettings {
    @SwitchProperty({
        name: "main toggle",
        description: "main toggle for auto rs",
        category: "Kuudra",
    })
    isAutoRsRunningK = false;

    @SliderProperty({
        name: "kuudra tiers",
        description: "kuudra tiers for auto rs (1 to 5)",
        min: 1,
        max: 5,
        placeholder: 5,
        category: "Kuudra",
    })
    autoRsTiersK = 5;

    @SliderProperty({
        name: "downtime (seconds)",
        description: "downtime in second between two run",
        min: 7,
        max: 30,
        placeholder: 7,
        category: "Kuudra",
    })
    autoRsDowntimeK = 7;



    @SwitchProperty({
        name: "main toggle",
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
        name: "floor",
        description: "dungeon tiers for auto rs (1 to 7)",
        min: 1,
        max: 7,
        placeholder: 5,
        category: "Dungeon",
    })
    autoRsTiersD = 5;

    @SliderProperty({
        name: "downtime (seconds)",
        description: "downtime in second between two run",
        min: 1,
        max: 30,
        placeholder: 7,
        category: "Dungeon",
    })
    autoRsDowntimeD = 7;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Kuudra", "§4§lKuudra §r§aauto restart settings")
        this.setCategoryDescription("Dungeon", "§4§lDungeon §r§aauto restart settings§r§7 (not implemented yet)")
    }

}

export default new autoRsSettings();