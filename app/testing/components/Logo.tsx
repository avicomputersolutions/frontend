'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

interface Props {
    modelPath: string
}

const CourseLogoModel: React.FC<Props> = ({ modelPath }) => {
    const group = useRef<THREE.Group>(null)
    const { scene } = useGLTF(modelPath)
    const [scaleFactor, setScaleFactor] = useState(1)

    useEffect(() => {
        if (!group.current) return

        // Clone the scene to avoid mutation
        const clone = scene.clone(true)
        const box = new THREE.Box3().setFromObject(clone)
        const size = new THREE.Vector3()
        box.getSize(size)

        const maxDimension = Math.max(size.x, size.y, size.z)
        const targetSize = 4 // You can tweak this for how big it should appear

        if (maxDimension > 0) {
            const scale = targetSize / maxDimension
            setScaleFactor(scale)
        }
    }, [scene])

    return (
        <group ref={group} scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <primitive object={scene} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

export default CourseLogoModel
