import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
  
  let navigate = useNavigate();

  let handleDelete = (i) => {
    let newData = [...props.data.users];
    newData.splice(i, 1);
    props.data.setUsers(newData);
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        {/*
     <!-- Main Content --> */}
        <div id="content">
          {/*
       <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/*
         <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Home</h1>
            </div>

            {/*
         <!-- Content Row --> */}
            <div className="row">
              {/*
           <!-- Students count --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Number of students
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          Students count : {props.data.users.length}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*
           <!-- Teachers count --> */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Total Number of Teachers
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          Teachers count : {props.data.teacher.length}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Dashboard table */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Student Dashboard</h1>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Studying class</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.data.users.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.classes}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>

                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edit-user/${i}`)}
                      >
                        {" "}
                        <EditIcon />
                        Edit
                      </Button>
                      &nbsp;
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        <DeleteIcon />
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          {/* Teacher Dashboard table */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Teacher Dashboard</h1>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Teacher Name</th>
                <th>Teaching Class</th>
                <th>Subject</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.data.teacher.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{user.teacherName}</td>
                    <td>{user.teachingClass}</td>
                    <td>{user.subject}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/edit-teacher/${i}`)}
                      >
                        {" "}
                        <EditIcon />
                        Edit
                      </Button>
                      &nbsp;
                      <Button variant="danger" onClick={() => handleDelete(i)}>
                        <DeleteIcon />
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
