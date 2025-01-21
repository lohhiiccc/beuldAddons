
export function anglesToVector(yaw, pitch) {
    const yawRad = (yaw + 90) * (Math.PI / 180);
    const pitchRad = pitch * (Math.PI / 180);

    const x = Math.cos(pitchRad) * Math.cos(yawRad);
    const y = Math.sin(-pitchRad);
    const z = Math.cos(pitchRad) * Math.sin(yawRad);

    return { x, y, z };
}

function dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

//https://fr.wikipedia.org/wiki/Quadrique
export function isPlayerLookingAtSphere(playerYaw, playerPitch, playerPos, sphereCenter, sphereRadius) {
    const viewVector = anglesToVector(playerYaw, playerPitch);

    const originCenter = {
        x: sphereCenter.x - playerPos.x,
        y: sphereCenter.y - playerPos.y,
        z: sphereCenter.z - playerPos.z
    };

    const a = dotProduct(viewVector, viewVector);
    const b = 2.0 * dotProduct(originCenter, viewVector);
    const c = dotProduct(originCenter, originCenter) - (sphereRadius * sphereRadius);

    const disc = (b * b) - (4.0 * a * c);

    return disc > 0;
}