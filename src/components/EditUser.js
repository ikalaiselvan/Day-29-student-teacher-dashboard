import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useParams, useNavigate} from 'react-router-dom'

function EditUser(props) {

    let params = useParams();
    let navigate = useNavigate();

    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [classes,setClasses] = useState("");
    
    useEffect(() => {
      if(params.id<props.data.users.length)
      {
        setName(props.data.users[params.id].name)
        setEmail(props.data.users[params.id].email)
        setMobile(props.data.users[params.id].mobile)
        setClasses(props.data.users[params.id].classes)
      }else{
        navigate('/dashboard')
      }
    }, []);

    let handleSubmit = (() => {
        let newData = { name, email, mobile, classes };
        let data = [...props.data.users]
        data.splice(params.id,1,newData)
        props.data.setUsers(data)
        navigate('./dashboard')
    })


  return <div className='mx-auto col-10'>
  <Form>
  <Form.Group className="mb-3">
     <Form.Label>Name</Form.Label>
     <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Mobile</Form.Label>
     <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
   </Form.Group>

   <Form.Group className="mb-3" >
     <Form.Label>Batch</Form.Label>
     <Form.Control type="text" placeholder="Enter Batch" value={classes} onChange={(e)=>setClasses(e.target.value)}/>
   </Form.Group>
  
   <Button variant="primary" onClick={()=>handleSubmit()}>
     Submit
   </Button>
 </Form>
</div>
}

export default EditUser