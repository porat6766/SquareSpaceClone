import { BaseFunctions, RenderElement3 } from "./BasicEditor3ProTypes";


export const utils2 = {
    detectBorderHover: function (rect: DOMRect, mouseX: number, mouseY: number, borderWidth: number): string {
        //need to compensate for different ooc? maybe not.

        // Check for hovering over top border
        if (rect.left <= mouseX && mouseX <= rect.right && rect.top <= mouseY && mouseY <= rect.top + borderWidth) {
            // console.log('Hovering over top border');
            return 'top';
        }

        // Check for hovering over right border
        if (rect.right - borderWidth <= mouseX && mouseX <= rect.right && rect.top <= mouseY && mouseY <= rect.bottom) {
            // console.log('Hovering over right border');
            return 'right';
        }

        // Check for hovering over bottom border
        if (rect.left <= mouseX && mouseX <= rect.right && rect.bottom - borderWidth <= mouseY && mouseY <= rect.bottom) {
            // console.log('Hovering over bottom border');
            return 'bottom';
        }

        // Check for hovering over left border
        if (rect.left <= mouseX && mouseX <= rect.left + borderWidth && rect.top <= mouseY && mouseY <= rect.bottom) {
            // console.log('Hovering over left border');
            return 'left';
        }

        //by now, if the mouse was in a border the function should have returnd.
        // console.log("not hovering over a border");
        return 'none';
    },

    update0LayerStyle: function (element: RenderElement3, field: string, newValue: string | number, baseFunctions: BaseFunctions) {
        const newStyle = { ...element.data.style }
        newStyle[field] = newValue;
        baseFunctions.setStyle(element.data.id, newStyle)
    },
    hexToRgb: function (hex: string) {
        // Remove the # if present
        hex = hex.replace("#", "");
        // Parse the RGB components
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return { r, g, b };
    },
    hexToRgba: function (hex: string, opacity: number) {
        const rgb = this.hexToRgb(hex);
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    }
}