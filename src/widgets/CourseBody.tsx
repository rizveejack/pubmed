"use client";

import { useState } from "react";
import { InsTructionCard, ModuleCard } from "~/utils";
import curriculum from "../const/curriculum.json";

type CourseBody = {
  course: {
    content: string;
    meta_data: {
      _lp_requirements: string[];
      _lp_faqs: string[];
      _lp_target_audiences: string[];
      _lp_key_features: string[];
    };
  };
};

export default function CourseBody({ course }: CourseBody) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="">
      <div className="flex justify-between lg:justify-evenly items-center py-2 border-t border-b space-x-5 text-center">
        <strong
          className="font-bold cursor-pointer"
          onClick={() => setCurrentIndex(0)}
        >
          Details
        </strong>
        <strong
          className="font-bold cursor-pointer"
          onClick={() => setCurrentIndex(1)}
        >
          Curriculum
        </strong>
        <strong
          className="font-bold cursor-pointer"
          onClick={() => setCurrentIndex(2)}
        >
          Requirements
        </strong>
      </div>

      {currentIndex === 0 && (
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: course?.content }}
        />
      )}
      {currentIndex === 1 && (
        <div className="grid grid-cols-2 grid-flow-row gap-3 mt-5">
          {curriculum.map((item, index) => (
            <ModuleCard key={index} item={item} />
          ))}
        </div>
      )}
      {currentIndex === 2 && (
        <div className="mt-5">
          <InsTructionCard
            title="this is title"
            items={course?.meta_data?._lp_requirements}
          />
        </div>
      )}
    </div>
  );
}
