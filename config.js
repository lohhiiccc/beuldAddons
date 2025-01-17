import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';
import autoRsSettings from "./feature/autoRs/config"

@Vigilant("beuld", "§3beuld §4addon's")
class Settings {

    @SwitchProperty({
        name: "etherwarp sound",
        description: "edit etherwarp sound.",
        category: "Cosmetic",
        subcategory: "Aspect of the void",
    })
    AotvSoundToggle = false;
    @TextProperty({
        name: "custom etherwarp sound",
        description: "use minecraft sound id",
        category: "Cosmetic",
        subcategory: "Aspect of the void",
        placeholder: "random.successful_hit"
    })
    AotvSound = "random.successful_hit";

    @SwitchProperty({
        name: "Build indicator",
        description: "display current piles percentage",
        category: "Kuudra",
        subcategory: "beuld",
    })
    beuldIndicator = false;

    @SwitchProperty({
        name: "rend pull",
        description: "show rend pull",
        category: "Kuudra",
        subcategory: "DPS",
    })
    rendPullToggle = false;

    @SwitchProperty({
        name: "DPS format",
        description: "format chat during DPS in kuudra",
        category: "Kuudra",
        subcategory: "DPS",
    })
    dpsFormatterToggle = false;


    @SwitchProperty({
        name: "Pearl Cancel area",
        description: "show some pearl cancel area",
        category: "Kuudra",
        subcategory: "supplies",
    })
    PCAreaToggle = false;

    @SwitchProperty({
        name: "pearl waypoint",
        description: "display only useful pearl waypoint",
        category: "Kuudra",
        subcategory: "supplies",
    })
    pearlwaypointtoggle = false;

    @SwitchProperty({
        name: "hilight pile",
        description: "hilight supply pile",
        category: "Kuudra",
        subcategory: "build",
    })
    hilightPileToggle = false;

    @SwitchProperty({
        name: "piles beacon",
        description: "display beacon at piles",
        category: "Kuudra",
        subcategory: "supplies",
    })
    supBeaconToggle = false;

    @ButtonProperty({
        name: "auto rs",
        description: "configure auto rs (/beuldAutoRs)",
        category: "auto rs",
        placeholder: "§3Go!"
    }) run() {
        autoRsSettings.openGUI();
    }


    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Cosmetic", "")
        this.setSubcategoryDescription("Cosmetic", "Aspect of the void", "")

        this.setCategoryDescription("Kuudra", "kuudra stuff")
        this.setSubcategoryDescription("kuudra", "supplies", "")
        this.setSubcategoryDescription("Kuudra", "build", "")
        this.setSubcategoryDescription("Kuudra", "DPS", "")
    }
}
export default new Settings();
