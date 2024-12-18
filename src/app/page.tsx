import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import MaterialList from "./components/MaterialList";
import { GiftIcon } from '@heroicons/react/24/solid'

const options = { next: { revalidate: 60 } };

const MATERIALS_QUERY = defineQuery(`*[
  _type == "material"]{_id, name, quantity}|order(name asc)`);

export default async function Home() {
  const materials = await client.fetch(MATERIALS_QUERY, {}, options);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-red-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-800 shadow-text flex items-center justify-center">
          <GiftIcon className="h-12 w-12 mr-4 text-green-700" />
          Santa&apos;s Toy Builder
        </h1>
        <MaterialList materials={materials} />
      </div>
    </div>
  );
}
