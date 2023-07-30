import { getData } from "~/server/getData";

type LessonType = {
  id: number;
  name: string;
  content: string;
  duration: string;
  preview: string;
  data?: {
    status: number;
  };
};

export default async function Page({
  params,
}: {
  params: { slug: string | string[] };
}) {
  const lesson: LessonType = await getData({
    courseId: params.slug as unknown as number,
    path: "/lessons",
  });

  return (
    <div className="min-h-screen">
      {lesson?.data?.status === 401 ? (
        <div className="text-center text-2xl">
          You are not authorized to view this page
        </div>
      ) : (
        <div
          className="text-center text-2xl"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      )}
    </div>
  );
}
