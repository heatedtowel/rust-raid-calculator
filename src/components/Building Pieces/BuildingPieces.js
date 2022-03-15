import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import RaidCosts from '../../data/masterRaidCosts.json'
import './buildingPiece.css'

const BuildingPieces = () => {
  const buildingPieces = Object.keys(RaidCosts.buildings)

  const [buildingMaterial, setBuildingMaterial] = useState('Wood')
  const [buildingPiece, setBuildingPiece] = useState('Wooden Door')




  return (
    <div className='building__flex'>
      <div className='building__grid'>
        <section className='building__flex'>
          <div className='grid__item'>
            {buildingPiece}
          </div>
          <div className='grid__item'>
            Essential for any serious base. Due to its cheap cost, this wall is great for larger bases. Although resistant to fire, it can easily be pickaxed on the weak side.
          </div>
        </section>
        <section className='building__flex'>
          <div className='grid__item'>
            Building Health
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
              return <Dropdown.Item onClick={() => setBuildingPiece(value)}>{value}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div >
  )
}

export default BuildingPieces