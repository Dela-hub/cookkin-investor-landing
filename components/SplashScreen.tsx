'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SplashScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 100)
    const t2 = setTimeout(() => setStep(2), 500)
    const t3 = setTimeout(() => setStep(3), 900)
    const t4 = setTimeout(() => {
      setFading(true)
      setTimeout(() => setVisible(false), 600)
    }, 2000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 40%, #F3E9DE 0%, #ffffff 70%)',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        pointerEvents: fading ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,65,35,0.08) 0%, transparent 70%)',
          transform: step >= 1 ? 'scale(1)' : 'scale(0)',
          opacity: step >= 1 ? 1 : 0,
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            height: 80,
            width: 80,
            boxShadow:
              step >= 1 ? '0 8px 32px rgba(176,65,35,0.3)' : '0 0 0 rgba(176,65,35,0)',
            transform: step >= 1 ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(-30px)',
            opacity: step >= 1 ? 1 : 0,
            transition:
              'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, box-shadow 0.6s ease',
          }}
        >
          <Image
            src="/images/potlogo.png"
            alt="CookKin logo"
            width={80}
            height={80}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 2,
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 34,
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
              transform: step >= 2 ? 'translateY(0)' : 'translateY(100%)',
              opacity: step >= 2 ? 1 : 0,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease',
              display: 'inline-block',
            }}
          >
            Cook
          </span>
          <span
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#381C08',
              transform: step >= 2 ? 'translateY(0)' : 'translateY(100%)',
              opacity: step >= 2 ? 1 : 0,
              transition:
                'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 0.4s ease 0.1s',
              display: 'inline-block',
            }}
          >
            Kin
          </span>
        </div>

        <p
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 15,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#666',
            letterSpacing: '0.01em',
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: 240,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(16px)',
            opacity: step >= 3 ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease',
          }}
        >
          Every family has a recipe
          <br />
          worth remembering
        </p>
      </div>
    </div>
  )
}
