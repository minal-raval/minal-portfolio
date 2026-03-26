import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-8"
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          MR<span className="text-blue-500">.</span>
        </div>
        <motion.div
          className="absolute -inset-4 rounded-full border border-blue-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <motion.div 
        className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Initializing Portfolio
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
