import { useState, useEffect } from "react"
import RaidCosts from '../../data/masterRaidCosts.json'

const Calculator = () => {

  console.log(RaidCosts)

  const [buildingMaterial, setBuildingMaterial] = useState('Wood')
  const [buildingPiece, setBuildingPiece] = useState('Wooden Door')

  return (
    <div>

    </div>
  )
}

export default Calculator