import { useState, useEffect } from "react";

import { Slider } from "../ui/slider";

const ColorPicker2 = ({ color, onChange }: any) => {
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 100 });
    const [opacity, setOpacity] = useState<number[]>([100])
    const rgb = hsvToRgb(hsv.h, hsv.s / 100, hsv.v / 100)
    const colorResult = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity[0]/100})`

    useEffect(() => {
        onChange(colorResult)
    }, [hsv, opacity])

    function hsvToRgb(h: any, s: any, v: any) {
        const f = (n: any, k = (n + h / 60) % 6) =>
            v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
        return {
            r: Math.round(f(5) * 255),
            g: Math.round(f(3) * 255),
            b: Math.round(f(1) * 255),
        };
    };

    const handleSaturationValueChange = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const s = Math.min(100, Math.max(0, (x / rect.width) * 100));
        const v = Math.min(100, Math.max(0, 100 - (y / rect.height) * 100));

        const newHsv = { ...hsv, s, v };
        setHsv(newHsv);
    };

    const handleHueChange = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const h = Math.min(360, Math.max(0, (x / rect.width) * 360));

        const newHsv = { ...hsv, h };
        setHsv(newHsv);
    };

    return (
        <div className="p-4">
            <div
                className="w-full h-40 mb-2 rounded cursor-crosshair relative"
                style={{
                    background: `linear-gradient(to top, #000, transparent), 
                    linear-gradient(to right, #fff, transparent), 
                    hsl(${hsv.h}, 100%, 50%)`,
                }}
                onMouseDown={(e) => {
                    handleSaturationValueChange(e);
                    const handleMove = (moveEvent: any) =>
                        handleSaturationValueChange(moveEvent);
                    const handleUp = () => {
                        document.removeEventListener("mousemove", handleMove);
                        document.removeEventListener("mouseup", handleUp);
                    };
                    document.addEventListener("mousemove", handleMove);
                    document.addEventListener("mouseup", handleUp);
                }}
            />

            <div
                className="w-full h-4 rounded cursor-pointer mb-4"
                style={{
                    background: `linear-gradient(to right, 
                    #ff0000 0%, #ffff00 17%, #00ff00 33%, 
                    #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)`,
                }}
                onMouseDown={(e) => {
                    handleHueChange(e);
                    const handleMove = (moveEvent: any) => handleHueChange(moveEvent);
                    const handleUp = () => {
                        document.removeEventListener("mousemove", handleMove);
                        document.removeEventListener("mouseup", handleUp);
                    };
                    document.addEventListener("mousemove", handleMove);
                    document.addEventListener("mouseup", handleUp);
                }}
            />

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm">Opacity</span>
                    <span className="text-sm text-gray-500">{opacity}%</span>
                </div>
                <Slider
                    value={opacity}
                    onValueChange={setOpacity}
                    max={100}
                    step={1}
                    className="w-full"
                />
            </div>
            <div className="flex gap-2 items-center pt-4">
                <div
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color }}
                />
                <input
                    type="text"
                    value={color.slice(5, color.length - 1)}
                    onChange={(e) => onChange(e.target.value)}
                    className="border rounded px-2 py-1 text-sm w-36"
                />
            </div>
        </div>
    );
};

export default ColorPicker2;
