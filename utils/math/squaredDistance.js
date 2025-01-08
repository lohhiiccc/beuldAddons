export function squaredDist(x1, y1, z1, x2, y2, z2) {
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2)
}

export function twoDSquaredDist(x1, z1, x2, z2) {
    return ((x2 - x1) ** 2 + (z2 - z1) ** 2)
}