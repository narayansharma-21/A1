import React, { useState, useEffect } from "react";
import { courses } from "../../../Database";

function Status() {

  return (
    <>
    <div className="wd-courses-sidebar flex-grow-0 me-2 d-none d-lg-block" style={{ width: '230px', marginTop: '-25px'}}>
      <br />
      <div className="row d-flex wd-buttons">                
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-upload"></i> Import existing content
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-cloud-upload"></i> Import from Commons
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-home"></i> Choose Home Page
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-bar-chart"></i> View Course Stream
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-bullhorn"></i> New Announcement
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-bar-chart"></i> New Analytics
    </button>
    <button className="btn btn-light" style={{ backgroundColor: '#e2e2e2' }}>
        <i className="fa fa-bell"></i> View Course Notifications
    </button>
</div>

      <br />
      <div>
        <h3>To Do</h3>
        <hr />
        <div className="row d-flex wd-todo">
                    <div className="col-2">
                        <i className="fa fa-clock"></i>
                    </div>
                    <div className="col">
                        <a href="#">Grade A1 - ENV + HTMl</a>
                    </div>
                </div>
      </div>
      <br />
      <div>
      <h3>Coming Up</h3>
                <hr/>
                <div className="row d-flex wd-todo">
                    <div className="col-2 wd-coming-up">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="col">
                        <a href="#">Lecture</a>
                        <div>CS4550, 12631, 202410</div>
                        <div>Sep 7 at 11:45 am</div>
                    </div>
                </div>
                <div className="row d-flex wd-todo">
                    <div className="col-2 wd-coming-up">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="col">
                        <a href="#">CS5610 06 SP23 Lecture</a>
                        <div>CS4550, 12631, 202410</div>
                        <div>Sep 11 at 6 pm</div>
                    </div>
                </div>
                <div className="row d-flex wd-todo">
                    <div className="col-2 wd-coming-up">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="col">
                        <a href="#">Lecture</a>
                        <div>CS4550, 12631, 202410</div>
                        <div>Sep 11 at 7pm</div>
                    </div>
                </div>
        <hr />
      </div>
    </div>
    </>
  );
}

export default Status;
