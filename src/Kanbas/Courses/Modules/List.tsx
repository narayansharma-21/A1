import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";


function ModuleList() {
  const { cid } = useParams();
  const modulesList = modules.filter((module) => module.course === cid);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
       <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>Collapse All</button>
            <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>View Progress</button>
            <select className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
              <option>Publish All</option>
              <option>Publish All Modules and Items</option>
              <option>Publish Modules Only</option>
              <option>Unpublish All</option>
            </select>
            <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>Module</button> 
             <ul className="list-group wd-modules"></ul>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            key={module._id} 
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;