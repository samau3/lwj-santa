import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import MaterialList from "./components/MaterialList";

const options = { next: { revalidate: 60 } };

const MATERIALS_QUERY = defineQuery(`*[
  _type == "material"]{_id, name, quantity}|order(name asc)`);

export default async function Home() {
  const materials = await client.fetch(MATERIALS_QUERY, {}, options);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-red-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 shadow-text">Toy Builder</h1>
        <MaterialList materials={materials}/>
      </div>
    </div>
  );
}
