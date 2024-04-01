import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import courses from "../Database/courses.json";
import ModuleList from "./Modules/List";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses({courses}: {courses: any[]; }) {
  const { cid } = useParams();
  const COURSES_API = "https://kanbas-node-server-app.onrender.com/api/courses";

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(cid);
  }, [cid]);


  let modulesBreadcrumb = null;
  const location = useLocation();
  const parts = location.pathname.split('/');
  const lastPart = parts[parts.length - 1];

  if (lastPart === 'Modules') {
    modulesBreadcrumb = <h2 style={{ color: 'black', margin: '0', marginLeft:'15px' }}>Modules</h2>
  }
  console.log(lastPart)
  
  return (
    <>
   <div style={{ display: 'flex', alignItems: 'center' }}>
        <HiMiniBars3 style={{ marginRight: '5px' }} />
        <h2 style={{ color: 'red', margin: '0' }}>{course?.name}</h2>
        {modulesBreadcrumb}
      </div>
      <hr/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;