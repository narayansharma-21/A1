import React, {useState} from "react";
import { Link } from "react-router-dom";


// eslint-disable-next-line no-use-before-define
function Dashboard({   courses,  course,  setCourse,  addNewCourse,  deleteCourse,  updateCourse }: {
    courses: 
    {id: string;
      name: string;
      number: string;
      startDate: string;
      endDate: string;
      image: string;
    }[];
    course: {
      id: string;
      name: string;
      number: string
      startDate: string;
      endDate: string;
      image: string;
    };
    setCourse: (course: {
      id: string;
      name: string;
      number: string;
      startDate: string;
      endDate: string;
      image: string;
    }) => void;
    addNewCourse: () => void;
    deleteCourse: (id: string) => void;
    updateCourse: () => void;
   
  }) {

 console.log(courses);


  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse}>
        Update
      </button>
      

      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course.id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`images/${course.image}`} className="card-img-top" alt=""
                     style={{ height: 150 }}/>
                <div className="card-body">
                  
                  <Link className="list-group-item" to={`/Kanbas/Courses/${course.id}/Home`}>
                    {course.name}
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course.id);
                      }}>
                      Delete
                   </button>
                   <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                  </Link>
              
                  
                      <Link to={`/Kanbas/Courses/${course.id}/Home`} className="btn btn-primary">
                        Go
                      </Link>
          
                    
        
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;