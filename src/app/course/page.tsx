import Image from "next/image";

type CourseType = {
  id: number;
  name: string;
  image: string;
};

async function getCourseData(courseId: number) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/${courseId}`
  );
  const json = await data.json();
  return json;
}

export default async function Page() {
  const data: CourseType = await getCourseData(17);
  // console.log(data.image);

  return (
    <div>
      <Image src={data.image} alt="banner" width={300} height={200} />
    </div>
  );
}
