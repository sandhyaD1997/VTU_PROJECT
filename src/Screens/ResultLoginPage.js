import React,{useState} from 'react';
import {Link, useNavigate,useParams} from 'react-router-dom';
import {Row,Col, Form, Button, Alert} from 'react-bootstrap';
// import { useState } from 'react';
import axios from 'axios';

const ResultLoginPage =()=>{
const [registerInput,setRegisterInput]= useState("")
const [error,setError]=useState('')
const navigate=useNavigate()
const submitHandler=(e)=>{
    e.preventDefault()
    if(registerInput === ' '){
setError('please enter register id')
    }
    else{
        axios.get('http://localhost:3002/studentinfo')
        .then((response)=> {console.log(response.data)
            response.data.map((data,index)=>{
                if(data.registerId ===registerInput){
                navigate(`/resultpage/${registerInput}`)
            
            }else{
               setError('Invalid Register Id')
            }
        })
            })
        
        }}




    return(
        <>
        <Link to='/' className='btn btn-dark'style={{marginTop:"1rem"}}>GoBack</Link>
        <Row className='text-center'>
            <Col>
           <h3>Check your results here....</h3>
           </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col style={{marginLeft:'-20rem'}}>
            <Form onSubmit={(e)=>submitHandler(e)}>
            <Form.Label>Enter Your Register No:</Form.Label>
            <Form.Control type='text' placeholder='enter your register no' style={{width:"70%"}}
            value={registerInput} onChange={(e)=>setRegisterInput(e.target.value)}/>    
            <Button type='submit' style={{marginTop:"1rem"}}>submit</Button>
           </Form>
          </Col>
            
        </Row>
        <Row className='justify-content-center my-3'>
        {error ? <Alert variant='danger'>{error}</Alert>: ''}
        </Row>
        </>
    )}

export default ResultLoginPage