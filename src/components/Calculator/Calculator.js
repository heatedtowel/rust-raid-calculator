import { useState, useEffect } from "react"
import { Dropdown } from 'react-bootstrap'
import BuildingPieces from "../Building Pieces/BuildingPieces"
import RaidCosts from '../../data/masterRaidCosts.json'
import './calculator.css'

const Calculator = () => {

  const buildingPieces = Object.keys(RaidCosts)

  const [buildingPiece, setBuildingPiece] = useState('Wall')

  const [buildingMaterial, setBuildingMaterial] = useState('Stone')

  const materialButton = (buildingPiece) => {
    if ((buildingPiece === 'Wall') || (buildingPiece === 'Half Wall')) {
      return (
        <Dropdown className="m-1">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Build Material
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item key={'wood'} onClick={() => setBuildingMaterial('Wood')}>Wood</Dropdown.Item>
            <Dropdown.Item key={'stone'} onClick={() => setBuildingMaterial('Stone')}>Stone</Dropdown.Item>
            <Dropdown.Item key={'metal'} onClick={() => setBuildingMaterial('Metal')}>Metal</Dropdown.Item>
            <Dropdown.Item key={'armored'} onClick={() => setBuildingMaterial('Armored')}>Armored</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>)
    }
  };

  return (
    <>
      <div className='calculator__flex'>
        <Dropdown className="m-1">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Building Types
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {buildingPieces.map((value) => {
              return <Dropdown.Item key={value} onClick={() => setBuildingPiece(value)}>{value}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
        {materialButton(buildingPiece)}
      </div >
      <div style={{ width: '60%', margin: 'auto' }}>
        <BuildingPieces buildingPiece={buildingPiece} buildingMaterial={buildingMaterial} />
      </div >

    </>
  )
}

export default Calculator