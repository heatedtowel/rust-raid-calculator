import React from 'react'
import { Card } from 'react-bootstrap'
import './homepage.css'

const Homepage = () => {
  return (
    <Card className='bg-secondary w-50 mx-auto mt-5'>
      <Card.Header>How to use the Calculator</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Calculate raid costs and craft times including the difference between standing in front of your tier 1/2/3 workbenches so you know how long it will take to prepare and how much BOOM to bring.{' '}
          </p>
          <p>
            {' '}First determine what you will be going through and how many of each and the calculator will give you all the information you need to get to TC and get out with all the loot.{' '}
          </p>
          <footer className="blockquote-footer text-dark">
            RRC <cite title="Source Title">Tendy Bois</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default Homepage