import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty, @ParagraphProperty, Color } from 'Vigilance';
import { padText } from "../BloomCore/utils/Utils"

import autoRsSettings from "./feature/autoRs/config"

@Vigilant("beuld", "§3beuld §4addon's", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Kuudra", "Auto rs"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
     }
})
class Settings {

    constructor() {
        this.initialize(this);

        const GeneralDesc = [
            "",
            "&a&l/t1 &rstart Kuudra basic tier.",
            "&a&l/t2 &rstart Kuudra hot tier.",
            "&a&l/t3 &rstart Kuudra burning tier.",
            "&a&l/t4 &rstart Kuudra fiery tier.",
            "&a&l/t5 &rstart Kuudra infernal tier.",
            "",
            "&a&l/fo &rshow all online friend in chat.",
            "",
        ]
        const GeneralMaxLength = Math.max(...GeneralDesc.map(l => Renderer.getStringWidth(l)))
        this.setCategoryDescription("General",
            `
            &l&n&3beuld
            
            ${GeneralDesc.map(line => line !== "" ? padText(line + "&0", ".", GeneralMaxLength) : line).join("\n")}
            
            `)
        const AutoRsDesc = [
            "",
            "&a&l/beuldAutors &r",
            "",
            "&6&l&n!WARNING!&r",
            "&k  &r&8&lThis feature is currently in beta and may not work as expected&k  &r",
            ""
        ]
        const AutorsMaxLength = Math.max(...GeneralDesc.map(l => Renderer.getStringWidth(l)))
        this.setCategoryDescription("Auto rs", AutoRsDesc.map(line => line !== "" ? padText(line + "&0", " ", AutorsMaxLength) : line).join("\n"))
        this.setCategoryDescription("Kuudra", "kuudra stuff")
        this.setSubcategoryDescription("General", "gfs", "choose keybind in MC settings")

        this.addDependency("Custom etherwarp sound", "Etherwarp sound")
        this.addDependency("move missing supplies", "Missing supplie Gui")
    }

    missingSuppliesMove = new Gui()


    @SwitchProperty({
        name: "Etherwarp sound",
        description: "edit etherwarp sound.",
        category: "General",
        subcategory: "Aspect of the void",
    })
    AotvSoundToggle = false;
    @TextProperty({
        name: "Custom etherwarp sound",
        description: "use minecraft sound id",
        category: "General",
        subcategory: "Aspect of the void",
        placeholder: "random.successful_hit"
    })
    AotvSound = "random.successful_hit";

    @SwitchProperty({
        name: "Rend pull",
        description: "show rend pull",
        category: "Kuudra",
        subcategory: "4.DPS",
    })
    rendPullToggle = false;

    @SwitchProperty({
        name: "DPS format",
        description: "format chat during DPS in kuudra",
        category: "Kuudra",
        subcategory: "4.DPS",
    })
    dpsFormatterToggle = false;


    @SwitchProperty({
        name: "Pearl Cancel area",
        description: "show some pearl cancel area",
        category: "Kuudra",
        subcategory: "1.Supplies",
    })
    PCAreaToggle = false;

    @SwitchProperty({
        name: "Pearl waypoint",
        description: "display only useful pearl waypoint",
        category: "Kuudra",
        subcategory: "1.Supplies",
    })
    pearlwaypointtoggle = false;

    @SwitchProperty({
        name: "Highlight pile",
        description: "hilight supply pile",
        category: "Kuudra",
        subcategory: "2.Build",
    })
    hilightPileToggle = false;

    @SwitchProperty({
        name: "Freesh timer",
        description: "display freesh timer hover players who have freesh",
        category: "Kuudra",
        subcategory: "2.Build"
    })
    freeshTimerToggle = false;

    @SwitchProperty({
        name: "Piles beacon",
        description: "display beacon at piles",
        category: "Kuudra",
        subcategory: "1.Supplies",
    })
    supBeaconToggle = false;

    @ButtonProperty({
        name: "Auto rs",
        description: "configure auto rs (/beuldAutoRs)",
        category: "Auto rs",
        placeholder: "§3Go!"
    }) run() {
        autoRsSettings.openGUI();
    }

    @ButtonProperty({
        name: "hit phase timer",
        description: "comming soon",
        category: "Kuudra",
        subcategory: "3.stun",
        placeholder: "§3do Nothing!"
    }) donothing() {
    }

    @SwitchProperty({
        name: "Clickable social message",
        description: "run /pv by clicking on social message",
        category: "General",
        subcategory: "Social",
    })
    ClickableSocial = false;

    @SliderProperty({
        name: "gfs x ender_pearl ",
        description: "select amount of pearl",
        min: 1,
        max: 16,
        placeholder: 16,
        category: "General",
        subcategory: "gfs",
    })
    gfsPearl= 16;

    @SwitchProperty({
        name: "Missing supplie Gui",
        description: "show a gui with missing supplies",
        category: "Kuudra",
        subcategory: "1.Supplies"
    })
    missingSuppliesToggle = false;
    @ButtonProperty({
        name: "move missing supplies",
        description: "",
        category: "Kuudra",
        subcategory: "1.Supplies",
        placeholder: "§3Edit!"
    }) MoveMissingSupplies() {
        this.missingSuppliesMove.open()
    }
}
export default new Settings();
