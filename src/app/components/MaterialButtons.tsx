"use client";

interface MaterialButtonsProps {
  selected: boolean;
  material: string;
  handleSelect: (item: string) => void;
}

export default function MaterialButtons({
  selected,
  material,
  handleSelect,
}: MaterialButtonsProps) {
  const handleClick = () => {
    handleSelect(material);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 ease-in-out transform hover:scale-105 ${
        selected
          ? "bg-red-500 text-white shadow-lg"
          : "bg-green-100 text-green-700 border-2 border-green-500 hover:bg-green-200"
      }`}
    >
      {material}
    </button>
  );
}
