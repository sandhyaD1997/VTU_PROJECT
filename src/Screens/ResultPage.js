import React,{useState,useEffect} from 'react';
import {Row,Col,Form, FormGroup, FormLabel} from 'react-bootstrap';
import TableData from './TableData';
import {useParams} from 'react-router-dom';
import axios from 'axios';



const ResultPage =()=> {
    const[studentDetails,setStudentDetails]=useState([])
    const value =useParams()
    useEffect(()=>{
        axios.get('http://localhost:3002/studentinfo')
        .then((response)=>{
            response.data.map((data) => {
                if(data.registerId === value.id){
                    setStudentDetails(data)
                }

            })
        }).catch((error) => console.log("error",error))
    },[studentDetails])
    console.log("state",studentDetails)
    return(
    <>
     <Row className='justify-content-center my-5'>
        <Col sm={12} md={6}>
            <h4>
Visvervaya Technological University, Belagavi</h4>
<h6 style={{marginLeft:"4rem" ,fontSize:"15px"}}>VII-Semister B.E Examination Result Nov/Dec 2024</h6>

        </Col>
     </Row>
     <Row>
        <Col sm={12} md={6}>
            <FormGroup>
         <Form.Label> Studentname:</Form.Label>
         <Form.Label style={{marginLeft:"4.6rem"}}>{studentDetails.studentName} </Form.Label><br/>
         <Form.Label> Father's/Mother's Name:</Form.Label>
         <Form.Label style={{marginLeft:'0.6rem'}}>{studentDetails.fatherName} </Form.Label><br/>
         <Form.Label> Collegename:</Form.Label>
         <Form.Label style={{marginLeft:"5rem"}}>{studentDetails.collegeName} </Form.Label>
         </FormGroup>
        </Col>
        <Col sm={12} md={6}>
            <Form.Group>
                <Form.Label style={{float:'right'}}>Register No : {studentDetails.registerId}</Form.Label>
            </Form.Group>
            
            </Col>
            <Col sm={12} md={6}>
           
            </Col>
     </Row>
     <Row>
        <TableData studentId = {studentDetails.registerId}/>
     </Row>
    </>
    )
}
export default ResultPage