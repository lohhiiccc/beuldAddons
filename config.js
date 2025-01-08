import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("beuld")
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
    BeuldIndicator = false;

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
        name: "BackBone alert",
        description: "show backbone hit in chat",
        category: "Kuudra",
        subcategory: "DPS",
    })
    backBoneToggle = false;

    @SwitchProperty({
        name: "Pearl Cancel area",
        description: "show some pearl cancel area",
        category: "Kuudra",
        subcategory: "supplies",
    })
    PCAreaToggle = false;

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
