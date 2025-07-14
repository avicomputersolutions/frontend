'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import CourseLogoModel from './Logo'

interface Props {
    modelPath: string
    title: string
    desc: string
}

const CourseCard: React.FC<Props> = ({ modelPath, title, desc }) => {
    return (
        <div className="bg-transparent p-4 rounded-xl shadow-md">
            <div className="w-full h-48">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 0, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <CourseLogoModel modelPath={modelPath} />
                    </Suspense>
                    <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
            <p className="text-zinc-400 text-sm">{desc}</p>
        </div>
    )
}

export default CourseCard
