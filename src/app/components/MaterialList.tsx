"use client";

import { useState } from "react";
import MaterialButtons from "./MaterialButtons";
import PossibleToys from "./PossibleToys";

interface Material {
  _id: string;
  name: string;
  quantity: number;
}

interface MaterialListProps {
  materials: Material[];
}

export default function MaterialList({ materials }: MaterialListProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    if (selectedMaterial.includes(item)) {
      setSelectedMaterial((prev) =>
        prev.filter((material) => material !== item),
      );
      return;
    } else if (selectedMaterial.length < 10) {
      setSelectedMaterial((prev) => [...prev, item]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-500 border-dashed">
      <h2 className="text-2xl font-semibold mb-4 text-green-700 flex items-center">
        Select Materials for Santa&apos;s Workshop
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {materials.map((material) => (
          <MaterialButtons
            selected={selectedMaterial.includes(material.name)}
            key={material._id}
            material={material.name}
            handleSelect={handleSelect}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6">
        <div className="w-full md:w-1/2 bg-red-50 rounded-lg p-4 border-2 border-red-200">
          <h3 className="text-xl font-semibold mb-2 text-red-800">Santa&apos;s Material List (max 10):</h3>
          <ul className="list-disc list-inside">
            {selectedMaterial.map((material) => (
              <li key={material} className="text-red-600">{material}</li>
            ))}
          </ul>
        </div>
        <PossibleToys materials={selectedMaterial} />
      </div>
    </div>
  );
}

