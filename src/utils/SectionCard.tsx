import Link from "next/link";
import { getData } from "~/server/getData";

type SectionType = {
  section: {
    id: string;
    name: string;
    description: string;
  };
};

type ModulesType = {
  id: string;
  name: string;
  slug: string;
  status: string;
  permalink: string;
  type: string;
  preview: boolean;
  duration: string;
  locked: boolean;
}[];

export default async function SectionCard({ section }: SectionType) {
  const modules: ModulesType = await getData({
    courseId: section.id as unknown as number,
    path: "/section-items/items",
  });

  return (
    <div className="p-3">
      <h3 className="text-xl font-bold">{section.name}</h3>
      <ul>
        {modules?.map((module) => (
          <Link href={`/course/lessons/${module.id}`} key={module.id}>
            <li className="p-2 my-1 bg-amber-100">{module.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
