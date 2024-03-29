import React, { useState, useEffect } from "react";
import "./index.css";
import  db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";



function ModuleList() {
  const { cid } = useParams();
  useEffect(() => {
    client.findModulesForCourse(cid)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [cid]);

  const handleAddModule = () => {
    client.createModule(cid, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const modulesList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();

const handleUpdateModule = async () => {
  const status = await client.updateModule(module);
  dispatch(updateModule(module));
};


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
      <li className="list-group-item">
        <div>
        <button   onClick={handleAddModule}>Add</button></div>
        <div className="container">
        <button  onClick={handleUpdateModule}>
                Update
        </button>
        </div>

        <div className="container">
        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))}
        />
        </div>
        <div className="container">
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }
        />
        </div>
      </li>

        {modulesList
        .filter((module) => module.course === cid)
        .map((module, index) => (
          <li key={index} className="list-group-item">

            <div className="container">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            </div>

            <div className="container">
            <button
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            </div>

            <div>
              <FaEllipsisV className="me-2" />
              <div style={{ fontWeight: 'bold' }}>{module.name} </div>
              <div>{module.description} </div>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
           
         </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;