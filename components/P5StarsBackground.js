"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"

const p5 = typeof window !== "undefined" ? require("p5") : null

const P5StarsBackground = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const sketch = (p) => {
      let isMobile = p.windowWidth < 768
      const NUM_STARS = !isMobile ? 600 : 300
      const BASE_COLORS = [
        [200, 200, 200], 
        [200, 180, 160], 
        [140, 170, 190], 
        [200, 160, 170], 
      ]
      const GLOW_COLOR = [220, 200, 180]
      const HOVER_RADIUS = 180
      const MIN_STAR_SIZE = 0.3
      const MAX_STAR_SIZE = 1.5
      const MAX_GLOW_SIZE = !isMobile ? 6 : 4
      const MOVEMENT_SPEED = 1.2
      const MAX_MOVEMENT = 25
      const FOLLOW_THRESHOLD = 120
      const RANDOM_MOTION_SPEED = 0.0002 
      const RANDOM_MOTION_RADIUS = 15 

      const stars = []

      p.setup = () => {
        const cnv = p.createCanvas(p.windowWidth, p.windowHeight)
        cnv.style("position", "fixed")
        cnv.style("top", "0")
        cnv.style("left", "0")
        cnv.style("z-index", "-1")
        p.noStroke()

        for (let i = 0; i < NUM_STARS; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height),
            z: p.random(0, 1),
            originalX: 0,
            originalY: 0,
            size: p.random(MIN_STAR_SIZE, MAX_STAR_SIZE),
            baseColor: p.random(BASE_COLORS),
            glowFactor: 0,
            flickerSpeed: p.random(0.01, 0.05),
            isActive: p.random() < 0.3,
            velocityX: 0,
            velocityY: 0,
            following: false,
            noiseOffsetX: p.random(1000),
            noiseOffsetY: p.random(1000),
            randomAngle: p.random(p.TWO_PI)
          })
        }

        stars.forEach((star) => {
          star.originalX = star.x
          star.originalY = star.y
        })
      }

      p.draw = () => {
        p.background(10, 10, 30, 180)

        const mouseXOffset = (p.mouseX - p.width / 2) * 0.003
        const mouseYOffset = (p.mouseY - p.height / 2) * 0.003
        const time = p.frameCount * RANDOM_MOTION_SPEED

        stars.forEach((star) => {
          let glowStrength = 0
          const d = p.dist(p.mouseX, p.mouseY, star.x, star.y)

          const noiseX = p.map(p.noise(star.noiseOffsetX + time), 0, 1, -1, 1)
          const noiseY = p.map(p.noise(star.noiseOffsetY + time), 0, 1, -1, 1)
          
          const circleX = p.cos(time * 2 + star.randomAngle) * RANDOM_MOTION_RADIUS * 0.3
          const circleY = p.sin(time * 2 + star.randomAngle) * RANDOM_MOTION_RADIUS * 0.3
          
          const randomX = (noiseX * RANDOM_MOTION_RADIUS * 0.7 + circleX) * (1 - star.z * 0.5)
          const randomY = (noiseY * RANDOM_MOTION_RADIUS * 0.7 + circleY) * (1 - star.z * 0.5)

          const parallaxX = mouseXOffset * (1 - star.z)
          const parallaxY = mouseYOffset * (1 - star.z)

          let displayX = star.x + parallaxX + randomX
          let displayY = star.y + parallaxY + randomY

          if (!isMobile) {
            if (d < FOLLOW_THRESHOLD) {
              star.following = true
              const followStrength = 1 - (d / FOLLOW_THRESHOLD)
              displayX = p.lerp(displayX, p.mouseX + parallaxX, followStrength * 0.2)
              displayY = p.lerp(displayY, p.mouseY + parallaxY, followStrength * 0.2)
              glowStrength = followStrength
            } else if (d < HOVER_RADIUS) {
              star.following = false
              glowStrength = 1 - p.constrain(d / HOVER_RADIUS, 0, 1)

              const angle = p.atan2(star.y - p.mouseY, star.x - p.mouseX)
              const targetVelocityX = p.cos(angle) * MOVEMENT_SPEED * glowStrength
              const targetVelocityY = p.sin(angle) * MOVEMENT_SPEED * glowStrength

              star.velocityX = p.lerp(star.velocityX, targetVelocityX, 0.1)
              star.velocityY = p.lerp(star.velocityY, targetVelocityY, 0.1)
            } else {
              star.following = false
              star.velocityX = p.lerp(star.velocityX, (star.originalX - star.x) * 0.05, 0.1)
              star.velocityY = p.lerp(star.velocityY, (star.originalY - star.y) * 0.05, 0.1)
            }

            if (!star.following) {
              star.x += star.velocityX
              star.y += star.velocityY

              const totalDisplacement = p.dist(star.x, star.y, star.originalX, star.originalY)
              if (totalDisplacement > MAX_MOVEMENT) {
                const angle = p.atan2(star.y - star.originalY, star.x - star.originalX)
                star.x = star.originalX + p.cos(angle) * MAX_MOVEMENT
                star.y = star.originalY + p.sin(angle) * MAX_MOVEMENT
              }
            }
          } else {
            if (star.isActive) {
              glowStrength = p.noise(star.x * 0.01, star.y * 0.01, p.frameCount * star.flickerSpeed) * 0.5
            }
          }

          star.glowFactor = p.lerp(star.glowFactor, glowStrength, 0.1)

          const r = p.lerp(star.baseColor[0], GLOW_COLOR[0], star.glowFactor)
          const g = p.lerp(star.baseColor[1], GLOW_COLOR[1], star.glowFactor)
          const b = p.lerp(star.baseColor[2], GLOW_COLOR[2], star.glowFactor)

          const starSize = p.lerp(star.size, MAX_GLOW_SIZE, star.glowFactor)

          if (star.glowFactor > 0.1) {
            p.fill(r, g, b, 20)
            p.ellipse(displayX, displayY, starSize * 2.5)
            p.fill(r, g, b, 35)
            p.ellipse(displayX, displayY, starSize * 1.8)
          }

          p.fill(r, g, b, 220)
          p.ellipse(displayX, displayY, starSize)
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
        isMobile = p.windowWidth < 768
      }
    }

    if (p5) {
      const myP5 = new p5(sketch)
      return () => {
        myP5.remove()
      }
    }
  }, [])

  return null
}

export default dynamic(() => Promise.resolve(P5StarsBackground), {
  ssr: false,
})