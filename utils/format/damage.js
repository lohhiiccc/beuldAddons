export function formatDamage(damage) {
    if (damage >= 1e9) {
        return (damage / 1e9).toFixed(2) + 'b';
    } else if (damage > 1e6) {
        return (damage / 1e6).toFixed(2) + 'm';
    } else if (damage >= 1e3) {
        return (damage / 1e3).toFixed(2) + 'k';
    }
}