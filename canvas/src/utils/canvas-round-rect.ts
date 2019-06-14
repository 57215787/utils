export function roundRect(x: number, y: number, width: number, height: number, raduis: number, content: CanvasRenderingContext2D) {
    // content.beginPath();
    raduis = raduis+1;
    content.moveTo(x + raduis, y);
    content.arcTo(x + width, y, x + width, y + height, raduis);
    content.arcTo(x + width, y + height, x, y + height, raduis);
    content.arcTo(x, y + height, x, y, raduis);
    content.arcTo(x, y, x + width, y, raduis);
    // content.closePath();
    return content;
}
