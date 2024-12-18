import { materialsWithToys } from "@/app/constants";

interface PossibleToysProps {
  materials: string[];
}

interface Materials {
  name: string;
  quantity: number;
}

interface MaterialsWithToys {
  [key: string]: Materials[];
}

export default function PossibleToys({ materials }: PossibleToysProps) {
  function getToysWithMaterials(
    materialsWithToys: MaterialsWithToys[],
  ): Record<string, string[]> {
    const toysMaterialsMap: Record<string, string[]> = {};

    // Loop through each material and its toys
    for (const material in materialsWithToys) {
      materialsWithToys[material].forEach((toy) => {
        // If the toy doesn't exist in toysMaterialsMap, create a new entry
        if (!toysMaterialsMap[toy.name]) {
          toysMaterialsMap[toy.name] = [];
        }
        // Add the material to the toy's required materials list
        toysMaterialsMap[toy.name].push(material);
      });
    }

    return toysMaterialsMap;
  }

  // Generate the toys-materials map from the provided materialsWithToys object
  const toysWithMaterials = getToysWithMaterials(materialsWithToys);

  // Function to find possible toys based on selected materials
  function getPossibleToys(selectedMaterials, toysWithMaterials) {
    const possibleToys = [];

    // Loop through each toy in the toysWithMaterials map
    for (const toy in toysWithMaterials) {
      const requiredMaterials = toysWithMaterials[toy];

      // Check if all required materials for this toy are included in selected materials
      const canMakeToy = requiredMaterials.every((material) =>
        selectedMaterials.includes(material),
      );

      // If all materials are present, add the toy to the possible toys list
      if (canMakeToy) {
        possibleToys.push(toy);
      }
    }

    return possibleToys;
  }

  const possibleToys = getPossibleToys(materials, toysWithMaterials);

  return (
    <div className="w-full md:w-1/2 bg-purple-50 rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-800">Possible Toys:</h3>
      {possibleToys.length === 0 ? (
        <p className="text-purple-600 italic">No possible toys with selected materials</p>
      ) : (
        <ul className="list-disc list-inside">
          {possibleToys.map((toy) => (
            <li key={toy} className="text-purple-600">{toy}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
