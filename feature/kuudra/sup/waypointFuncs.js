import RenderLib from "../../../../RenderLib/index";


export const supplies = Object.freeze({
    CIRCLE: -1,
    SQUARE: 10,
    SLASH: 1,
    TRIANGLE: 2,
    EQUAL: 3,
    X: 4,
    X_CANNON: 5,
    SHOP: 6,
    UNKNOWN: 7,
})

export function drawSquare(missing) {
    RenderLib.drawEspBox(-140.5, 78, -90.5, 1, 1, 0, 1, 1, 1, false);
    switch (missing) {
        case (supplies.SHOP):
            RenderLib.drawInnerEspBox(-43.5, 120, -149.5, 1, 1, 1, 0, 0, 1, true);
            break;
        case (supplies.TRIANGLE):
            RenderLib.drawInnerEspBox(-45.5, 135, -138.5, 1, 1, 1, 0, 0, 1, true);
            break;
        case (supplies.EQUAL):
            RenderLib.drawInnerEspBox(-45.5, 135, -138.5, 1, 1, 1, 0, 0, 1, true);
            break;
        case (supplies.CIRCLE):
            RenderLib.drawInnerEspBox(-26.5, 126, -111.5, 1, 1, 1, 0, 0, 1, true)
            break
        default:
            RenderLib.drawInnerEspBox(-43.5, 120, -149.5, 1.1, 1.1, 1, 0, 0, 1, true)
            RenderLib.drawInnerEspBox(-45.5, 135, -138.5, 1.1, 1.1, 1, 0, 0, 1, true)
            RenderLib.drawInnerEspBox(-35.5, 138, -124.5, 1.1, 1.1, 1, 0, 0, 1, true)
            RenderLib.drawInnerEspBox(-26.5, 126, -111.5, 1.1, 1.1, 1, 0, 0, 1, true)
            break;
    }
}

export function drawTri() {
    RenderLib.drawInnerEspBox(-95.5, 161, -105.5, 1, 1, 1, 0, 1, 1, true);
    RenderLib.drawInnerEspBox(-84, 161, -128, 0.7, 0.7, 1, 0, 1, 1, true);//
    RenderLib.drawInnerEspBox(-175, 150, -130, 0.75, 0.75, 1, 1, 1, 1, true);//   -> x cannon
    RenderLib.drawInnerEspBox(-97, 157, -112, 1, 1, 1, 0, 0, 1, true);
    RenderLib.drawEspBox(-67.5, 77, -122.5, 1, 1, 2, 0, 1, 1, false);
    RenderLib.drawEspBox(-70.5, 79, -134.5, 1, 1, 2, 0, 0, 1, false);
    RenderLib.drawEspBox(-85.5, 78, -128.5, 1, 1, 2, 0, 0, 1, false);

}

export function drawX() {
    RenderLib.drawInnerEspBox(-103, 160, -109, 1, 1, 1, 1, 1, 1, true);
    RenderLib.drawInnerEspBox(-110, 155, -106, 1, 1, 1, 0.588, 0.059, 1, true);
    RenderLib.drawEspBox(-134.5, 77, -138.5, 1, 1, 1, 1, 1, 1, false);
    RenderLib.drawEspBox(-130.5, 79, -113.5, 1, 1, 1, 0.588, 0.059, 1, false);
    RenderLib.drawInnerEspBox(-132, 140, -120, 1, 1, 1, 1, 1, 1, true);// ??
}

export function drawEqual() {
    RenderLib.drawInnerEspBox(-106, 165, -101, 1, 1, 0, 1, 0, 1, true);
    RenderLib.drawInnerEspBox(-93, 161, -143, 0.7, 0.7, 0, 1, 0, 1, true);//
    // Tessellator.drawString("shop", -94, 162, -144 , 0xff0000, true, 1, false)
    RenderLib.drawEspBox(-65.5, 76, -87.5, 1, 1, 0, 1, 0, 1, false);

}

export function drawSlash() {
    RenderLib.drawInnerEspBox(-105, 157, -98, 1, 1, 0, 0, 1, 1, true);
    RenderLib.drawEspBox(-112.5, 76.5, -68.5, 1, 1, 0, 0, 1, 1, false);
    RenderLib.drawInnerEspBox(-141, 151, -91, 0.75, 0.75, 0, 0, 1, 1, true);//
}
