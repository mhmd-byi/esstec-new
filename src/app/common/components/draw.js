import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActiveMenuList from "./ActiveMenu";

function DrawingComponent({
  draw,
  activeMenu,
  animationComplete,
  setAnimationComplete,
}) {
  return (
    <div className="relative w-full aspect-video">
      <svg
        viewBox="0 0 160 90"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        overflow="visible"
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <AnimatePresence>
          {draw && (
            <motion.path
              d={`M 161 ${90 - 6}
                  L 161 6
                  A 6 6 0 0 0 ${161 - 6} 0
                  L ${1 + 6} 0
                  A 6 6 0 0 0 1 6
                  L 1 ${90 - 6}
                  A 6 6 0 0 0 ${1 + 6} 90
                  L ${161 - 6} 90
                  A 6 6 0 0 0 161 ${90 - 6}
                  Z`}
              fill="transparent"
              stroke="#222222"
              strokeWidth="2.35"
              strokeLinecap="round"
              strokeLinejoin="inherit"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1.005, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                pathLength: { duration: 5, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }}
              onAnimationComplete={() => {
                setAnimationComplete(true);
              }}
            />
          )}
        </AnimatePresence>
      </svg>

      <AnimatePresence mode="wait">
        {draw && animationComplete && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 md:inset-1.5 w-full h-full flex items-center justify-center overflow-hidden rounded-[5%] bg-bg-primary"
          >
            <ActiveMenuList activeMenu={activeMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DrawingComponent;
