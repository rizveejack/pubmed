export async function getData({
  path,
  courseId,
}: {
  path: string;
  courseId: number;
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}/${courseId}`
  );
  const json = await data.json();
  return json;
}
