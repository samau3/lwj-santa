import Link from "next/link";
import { defineQuery } from "next-sanity";

import { client } from "@/sanity/client";
import { materialsWithToys } from "./constants";

const options = { next: { revalidate: 60 } };

const EVENTS_QUERY = defineQuery(`*[
  _type == "material"]{name, quantity}|order(name asc)`);

export default async function Home() {
  const materials = await client.fetch(EVENTS_QUERY, {}, options);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p>Welcome to your Sanity Starter Kit</p>
      {materials.map((material) => (
        <div className="p-2 border-2 border-black rounded-md">
          <p className="font-bold">
            {material.name} - {material.quantity}
          </p>
          <ul>
            {materialsWithToys[material.name].map((toy) => (
              <li>
                {toy.name} - {toy.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
