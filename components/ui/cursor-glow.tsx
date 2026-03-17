"use client"
import { useEffect, useRef } from "react"

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-300 ease-out"
      style={{
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 60%)",
        borderRadius: "50%",
        left: "-300px",
        top: "-300px",
      }}
    />
  )
}
