import KeySound from '@/function/KeySound'
import useAudioMaster from '@/hook/useAudioMaster'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useWindowSize } from 'react-use'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

import vs from './vs.vert'
import fs from './fs.frag'

const KEY_LIST = [
  { keyType: 'q', freq: 261 },
  { keyType: 'w', freq: 294 },
  { keyType: 'e', freq: 330 },
  { keyType: 'r', freq: 349 },
  { keyType: 't', freq: 392 },
  { keyType: 'y', freq: 440 },
  { keyType: 'u', freq: 494 },
  { keyType: 'i', freq: 523 },
  { keyType: 'o', freq: 587 },
  { keyType: 'p', freq: 659 },
]

const TestVisual = () => {

  const { ctx, analyser, FreqArray, startTick, stopTick } = useAudioMaster()

  const windowSize = useWindowSize()
  const a = Array.from({ length: 128 }, () => 0)


  const ShaderPlane = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const uniforms = {
      uTime: { value: 0 },
      uPixels: {value: new THREE.Vector2(windowSize.width, windowSize.height)},
      uFreqArray: { value: FreqArray },
      // uTDArray: { value: TDArray }
    }
    useFrame((state) => {
      const material = ref.current.material as THREE.ShaderMaterial;
      console.log(state.clock)
      if (material) {
        // console.log(material.uniforms.uPixels.value)
        material.uniforms.uTime.value = state.clock.getElapsedTime();
        material.uniforms.uFreqArray.value = FreqArray;
        // material.uniforms.uTDArray.value = TDArray;
      }
    })
    return (
      <mesh {...props} ref={ref}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vs}
          fragmentShader={fs}
        />
      </mesh>
    )
  }



  return (
    <>
      {ctx &&
        analyser &&
        KEY_LIST.map((item, index) => (
          <KeySound
            ctx={ctx}
            analyser={analyser}
            startTick={startTick}
            stopTick={stopTick}
            keyType={item.keyType}
            freq={item.freq}
            gain={0.1}
            key={index}
          />
        ))}
      <Canvas
        style={{
          width: 100 + 'vw',
          height: 100 + 'vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <ShaderPlane />
      </Canvas>
    </>
  )
}

export default TestVisual
