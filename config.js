import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("beuld")
class Settings {

    @SwitchProperty({
        name: "etherwarp sound",
        description: "edit etherwarp sound.",
        category: "Cosmetic",
        subcategory: "Aspect of the void",
        placeholder: "Activate",
    })
    AotvSoundToggle = true;
    @TextProperty({
        name: "Set etherwarp sound",
        description: "use minecraft sound id",
        category: "Cosmetic",
        subcategory: "Aspect of the void",
        placeholder: "random.successful_hit"
    })
    AotvSound = "random.successful_hit";

    @SwitchProperty({
        name: "Beul indicator",
        description: "/title current piles percentage",
        category: "Kuudra",
        subcategory: "beuld",
        placeholder: "Activate",
    })
    BeuldIndicator = true;

    @SwitchProperty({
        name: "rend pull",
        description: "show rend pull",
        category: "Kuudra",
        subcategory: "DPS",
        placeholder: "Activate",
    })
    rendPullToggle = true;

    @SwitchProperty({
        name: "DPS format",
        description: "format chat during DPS in kuudra",
        category: "Kuudra",
        subcategory: "DPS",
        placeholder: "Activate"
    })
    dpsFormatterToggle = true;

    @SwitchProperty({
        name: "BackBone alert",
        description: "show backbone hit in chat",
        category: "Kuudra",
        subcategory: "DPS",
        placeholder: "Activate",
    })
    backBoneToggle = true;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Cosmetic", "--")
        this.setSubcategoryDescription("Cosmetic", "Aspect of the void", "..")

        this.setCategoryDescription("Kuudra", "kuudra stuff")
        this.setSubcategoryDescription("Kuudra", "beuld", "beuld is build")
        this.setSubcategoryDescription("Kuudra", "DPS", "dps phase")
    }
}
export default new Settings();
