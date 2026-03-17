"use client"
import { motion } from "framer-motion"

export const BackgroundOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
    {/* Orb top-left: cyan */}
    <motion.div
      animate={{ x: [0, 250, 0], y: [0, -150, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(34,211,238,0.30) 0%, transparent 65%)" }}
    />
    {/* Orb center-right: sky */}
    <motion.div
      animate={{ x: [0, -250, 0], y: [0, 180, 0], scale: [1, 1.35, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 65%)" }}
    />
    {/* Orb bottom-left: cyan smaller */}
    <motion.div
      animate={{ x: [0, 200, 0], y: [0, -180, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      className="absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 65%)" }}
    />
  </div>
)
