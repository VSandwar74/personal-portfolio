"use client"
import { ReactNebula } from '@flodlc/nebula'

export default function Background() {
    return (
        <ReactNebula config={{
            "starsCount": 680,
            "starsColor": "#FFFFFF",
            "starsRotationSpeed": 10.6,
            "cometFrequence": 52,
            "nebulasIntensity": 5,
            "bgColor": "rgb(8,8,8)",
            "sunScale": 0.7,
            "planetsScale": 0.5,
            "solarSystemOrbite": 90,
            "solarSystemSpeedOrbit": 90
        }}/>
    )
}