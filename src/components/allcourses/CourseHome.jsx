import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import MainNotes from "./MainNotes";

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <MainNotes />
    </>
  );
}

export default CourseHome;
