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
      className={`p-2 border-2 border-black rounded-md ${
        selected ? "bg-blue-500" : "bg-white"
      }`}
    >
      {material}
    </button>
  );
}
