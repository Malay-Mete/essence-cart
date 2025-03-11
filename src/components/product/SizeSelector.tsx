
import React from "react";
import { cn } from "@/lib/utils";

export interface SizeOption {
  id: string;
  label: string;
  inStock: boolean;
}

interface SizeSelectorProps {
  sizes: SizeOption[];
  selectedSize: string;
  onChange: (sizeId: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onChange }: SizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Size</h3>
        <a href="#size-guide" className="text-sm underline text-muted-foreground hover:text-foreground transition-colors duration-300">
          Size guide
        </a>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size.id}
            type="button"
            className={cn(
              "size-button",
              selectedSize === size.id && "selected",
              !size.inStock && "opacity-40"
            )}
            disabled={!size.inStock}
            onClick={() => size.inStock && onChange(size.id)}
            aria-label={`Select size ${size.label}`}
            aria-selected={selectedSize === size.id}
            aria-disabled={!size.inStock}
          >
            {size.label}
            {!size.inStock && (
              <span className="absolute inset-x-0 top-[45%] h-[1px] bg-muted-foreground opacity-70 rotate-[-20deg]"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
