import { useState, useEffect } from "react"
import RaidCosts from '../../data/masterRaidCosts.json'

const Calculator = () => {

  const [buildingMaterial, setBuildingMaterial] = useState('Wood')
  const [buildingPiece, setBuildingPiece] = useState('Wooden Door')

  return (
    <div>
      {
        RaidCosts.deployables.map((types) => (
          <>
            <h1>{types.material}</h1>
            <h1>{types.buildingPiece}</h1>
          </>
        ))
      }
    </div>
  )
}

export default Calculator