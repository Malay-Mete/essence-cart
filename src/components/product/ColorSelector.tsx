
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface ColorOption {
  id: string;
  name: string;
  value: string;
  inStock: boolean;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onChange: (colorId: string) => void;
}

const ColorSelector = ({ colors, selectedColor, onChange }: ColorSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Color</h3>
        <p className="text-sm text-muted-foreground">
          {colors.find(c => c.id === selectedColor)?.name}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => color.inStock && onChange(color.id)}
            disabled={!color.inStock}
            className={cn(
              "color-swatch group",
              selectedColor === color.id && "selected",
              !color.inStock && "opacity-40 cursor-not-allowed"
            )}
            style={{ backgroundColor: color.value }}
            aria-label={`Select ${color.name} color`}
            aria-disabled={!color.inStock}
          >
            {selectedColor === color.id && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Check className={`h-4 w-4 ${isLight(color.value) ? 'text-black' : 'text-white'}`} />
              </span>
            )}
            <span className="sr-only">{color.name}</span>
            {!color.inStock && (
              <span className="absolute inset-0 flex items-center justify-center">
                <div className="w-[1px] h-[24px] bg-gray-400 rotate-45" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Helper function to determine if a color is light or dark
const isLight = (color: string): boolean => {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return true if the color is light (brightness > 128)
  return brightness > 128;
};

export default ColorSelector;
