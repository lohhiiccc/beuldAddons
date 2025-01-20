

const kuudraTiers = [
    "KUUDRA_NORMAL",
    "KUUDRA_HOT",
    "KUUDRA_BURNING",
    "KUUDRA_FIERY",
    "KUUDRA_INFERNAL",
]
export function getKuudraTiersString(tier) {
    if (tier < 1 || tier > 5) return null;
    return kuudraTiers[tier - 1];
}