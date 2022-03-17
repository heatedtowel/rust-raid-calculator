import { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import RaidCosts from '../../data/masterRaidCosts.json'
import './buildingPiece.css'

const BuildingPieces = () => {
  const buildingPieces = Object.keys(RaidCosts)

  const [buildingMaterial, setBuildingMaterial] = useState('wood');
  const [buildingPiece, setBuildingPiece] = useState('wall');
  const [buildingHealth, setBuildingHealth] = useState('');

  // useEffect(() => {
  //   setBuildingHealth(RaidCosts.buildingPiece.buildingMaterial.health)
  // }, [buildingMaterial, buildingPiece])

  const materialButton = (buildingPiece) => {
    if (buildingPiece === 'Wall') {
      return (<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Building Types
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item key={'wood'} onClick={() => setBuildingMaterial('wood')}>Wood</Dropdown.Item>
          <Dropdown.Item key={'stone'} onClick={() => setBuildingMaterial('stone')}>Stone</Dropdown.Item>
          <Dropdown.Item key={'metal'} onClick={() => setBuildingMaterial('metal')}>Metal</Dropdown.Item>
          <Dropdown.Item key={'armored'} onClick={() => setBuildingMaterial('armored')}>Armored</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>)
    }
  };

  return (
    <div className='building__flex'>
      <div className='building__grid'>
        <section className='building__flex'>
          <div className='grid__item'>
            {buildingPiece}
          </div>
          <div className='grid__item'>
            description
          </div>
        </section>
        <section className='building__flex'>
          <div className='grid__item'>
            Durability: {buildingHealth}
          </div>
          <div className='grid__item'>
            Essential for any serious base. Due to its cheap cost, this wall is great for larger bases. Although resistant to fire, it can easily be pickaxed on the weak side.
          </div>
        </section>
        <Dropdown>
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
      </div>
    </div >
  )
};

export default BuildingPieces