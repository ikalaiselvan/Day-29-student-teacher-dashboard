import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

function EditTeacher(props) {
  let params = useParams();
  console.log(params);
  let navigate = useNavigate();

  let [teacherName, setTeacherName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [teachingClass, setTeachingClass] = useState("");
  let [subject, setSubject] = useState("");

  useEffect(() => {
    if (params.id < props.data.teacher.length) {
      setTeacherName(props.data.teacher[params.id].teacherName);
      setEmail(props.data.teacher[params.id].email);
      setMobile(props.data.teacher[params.id].mobile);
      setTeachingClass(props.data.teacher[params.id].teachingClass);
      setSubject(props.data.teacher[params.id].subject);
    } else {
      navigate("/dashboard");
    }
  }, []);

  let handleSubmit = () => {
    let newData = { teacherName, email, mobile, teachingClass, subject };
    let data = [...props.data.teacher];

    let ooo = data.splice(params.id, 1, newData);
    console.log(ooo);
    console.log(props.data);
    props.data.setTeacher(data);
    navigate("/dashboard");
  };

  return (
    <div className="mx-auto col-10">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teaching Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Batch"
            value={teachingClass}
            onChange={(e) => setTeachingClass(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Batch"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditTeacher;
