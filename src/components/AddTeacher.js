import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTeacher(props) {
  let [teacherName, setTeacherName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [teachingClass, setTeachingClass] = useState("");
  let [subject, setSubject] = useState("");
  let navigate = useNavigate();
  console.log(props)

  let handleSubmit = () => {
    
    let newData = { teacherName, email, mobile, teachingClass, subject };
    
    let data = [...props.data.teacher];
    data.push(newData);
    props.data.setTeacher(data);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="mx-auto col-10">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setTeacherName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Enter Mobile Number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Teaching Class</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Enter Batch Name"
              onChange={(e) => {
                setTeachingClass(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Enter Batch Name"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddTeacher;
