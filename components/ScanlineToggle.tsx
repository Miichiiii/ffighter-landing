"use client"

import React from "react"

import { useState, createContext, useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, MonitorOff } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScanlineContextType {
  enabled: boolean
  toggle: () => void
}

const ScanlineContext = createContext<ScanlineContextType>({
  enabled: true,
  toggle: () => {},
})

export function useScanlines() {
  return useContext(ScanlineContext)
}

export function ScanlineProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("scanlines-enabled")
    if (saved !== null) {
      setEnabled(saved === "true")
    }
  }, [])

  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev
      localStorage.setItem("scanlines-enabled", String(next))
      return next
    })
  }

  return (
    <ScanlineContext.Provider value={{ enabled, toggle }}>
      {children}
      <AnimatePresence>
        {enabled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[9999]"
            aria-hidden="true"
          >
            {/* CRT Scanlines */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                  linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04))
                `,
                backgroundSize: "100% 2px, 3px 100%",
              }}
            />
            {/* Subtle Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ScanlineContext.Provider>
  )
}

export function ScanlineToggleButton() {
  const { enabled, toggle } = useScanlines()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="font-mono text-xs gap-2 bg-black/50 border-[#ffd700]/30 hover:border-[#ffd700] hover:bg-[#ffd700]/10 text-[#ffd700]"
        aria-label={enabled ? "Disable CRT effect" : "Enable CRT effect"}
      >
        <AnimatePresence mode="wait">
          {enabled ? (
            <motion.div
              key="on"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Monitor className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="off"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MonitorOff className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="hidden sm:inline">
          {isHovered ? (enabled ? "DISABLE CRT" : "ENABLE CRT") : "RETRO MODE"}
        </span>
      </Button>
    </motion.div>
  )
}
