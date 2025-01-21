//source somewhere on CT discord
export const drawTitle = (title, subtitle) => {
    const [ x, y ] = [
        Renderer.screen.getWidth() * 0.5,
        Renderer.screen.getHeight() * 0.5
    ]

    Renderer.translate(x, y)
    Renderer.scale(4, 4)
    if (title !== null && title !== undefined)
        Renderer.drawStringWithShadow(title, -(Renderer.getStringWidth(title) * 0.5), -10)

    Renderer.translate(x, y)
    Renderer.scale(2, 2)
    if (subtitle !== null && subtitle !== undefined)
        Renderer.drawStringWithShadow(subtitle, -(Renderer.getStringWidth(subtitle) * 0.5), 5)
}

// register("renderOverlay", () => {
//     titles.forEach(title => {
//         _drawTitle(title.title, title.subtitle);
//     })
// })