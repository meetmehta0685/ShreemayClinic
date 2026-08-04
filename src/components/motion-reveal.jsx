"use client";

import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.16, 1, 0.3, 1];

const motionPresets = {
  rise: {
    initial: { opacity: 0.96, y: 8, filter: "blur(0px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    duration: 0.72,
  },
  clip: {
    initial: {
      opacity: 0.96,
      y: 6,
      clipPath: "inset(0 0 6% 0 round 14px)",
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0 round 14px)",
      filter: "blur(0px)",
    },
    duration: 0.86,
  },
};

export default function MotionReveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
  preset = "rise",
}) {
  const shouldReduceMotion = useReducedMotion();
  const selectedPreset = motionPresets[preset] || motionPresets.rise;

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : selectedPreset.initial}
      whileInView={shouldReduceMotion ? undefined : selectedPreset.visible}
      viewport={{ once: true, amount }}
      transition={{
        duration: selectedPreset.duration,
        delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}
