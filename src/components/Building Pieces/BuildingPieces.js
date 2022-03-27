import { useEffect, useState } from 'react';
import './buildingPiece.css'
import RaidCosts from '../../data/masterRaidCosts.json'


const BuildingPieces = ({ buildingPiece, buildingMaterial }) => {

  const [buildingHealth, setBuildingHealth] = useState(0);

  useEffect(() => {
    setBuildingHealth(RaidCosts[buildingPiece][buildingMaterial].health)
  }, [buildingPiece, buildingMaterial])

  const raidItems = (buildingPiece, buildingMaterial) => {

    const piece = buildingPiece;
    const material = buildingMaterial;

    return (
      <>
        <div className='grid__item'>
          Raid Items
        </div>

        <div className='grid__item'>
          {piece}
          {material}
        </div>
      </>
    )
  }

  return (
    <div className='building__grid'>
      <section className='building'>
        <div className='grid__item'>
          Piece: {buildingPiece}
        </div>
        <div className='grid__item'>
          Material: {buildingMaterial}
        </div>
        <div className='grid__item'>
          Health: {buildingHealth}
        </div>
      </section>
      <section className='building building'>
        {raidItems(buildingPiece, buildingMaterial)}
      </section>
    </div>
  )
};

export default BuildingPieces