import React, {useState} from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";


function Dashboard() {

  const [cs, setCourses] = useState(courses);

  const [c, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const addNewCourse = () => {
    const newCourse = { ...c,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...c, ...newCourse }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === c._id) {
          return c;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={c.name} className="form-control"
             onChange={(e) => setCourse({ ...c, name: e.target.value }) } />
      <input value={c.number} className="form-control"
             onChange={(e) => setCourse({ ...c, number: e.target.value }) } />
      <input value={c.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...c, startDate: e.target.value }) }/>
      <input value={c.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...c, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      

      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {cs.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`images/${course.image}`} className="card-img-top" alt=""
                     style={{ height: 150 }}/>
                <div className="card-body">
                  
                  <Link className="list-group-item" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course.name}
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
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
              
                  
                      <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
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