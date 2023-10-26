import React from 'react'
import titleImage from '../Assests/designer.jpg'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    {/* landing section */}
      <div style={{ width: '100%', height: '100vh' }} className='container fluid rounded'>
        <Row className='align-item-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '80px' }} className='fw bolder text-light'><i class="fa-brands fa-stack-overfolw fa-bounce"> </i>Project Fair</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe possimus consequuntur, fuga corporis beatae praesentium tenetur error libero fugit voluptate cumque perspiciatis nostrum, quisquam dolorum cupiditate! Quos maiores aliquid dolorum!</p>
             <button className="btn btn-warning">Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></button>
          </Col>
          <Col sm={12} md={6}>
            <img height={'200px'} style={{marginTop:'100px'}} className='w=75' src={titleImage}
            alt=""/>
          </Col>
        </Row>
      </div>
      {/*all projects */}
      <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore Our Project</h1>
        <marquee scrollAmount={25}>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
          </Row>
        </marquee>
        <div className="text-center mt-5"> <Link to={'/projects'}> View More Projects</Link></ div>
      </div>
    </>
  )
}

export default Home
