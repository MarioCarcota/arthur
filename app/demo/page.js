"use client"; // Marks this as a client-side component

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterBubble from "./typeWriting";
import Particles from "@/components/ui/Particle";
import VideoComponent from "./videoComponent";

// Audio for the alert (replace 'alertAudio' with the actual URL or import)
const alertAudio = "/demo/alert-sound.mp3";
const step2Audio = "/demo/step1.mp3"; // Second audio for Step 2
const videoSrc = "/demo/provaspazio.mov"; // Replace with your video file path

function Demo() {
  const [step, setStep] = useState(0);
  const [step2AudioInstance] = useState(new Audio(step2Audio)); // Step 2 audio instance

  // Play audio when the alert starts (step 1)
  useEffect(() => {
    if (step === 1) {
      const audioInstance = new Audio(alertAudio);
      audioInstance.play();

      const alertTimer = setTimeout(() => {
        setStep(2); // Move to step 2 after 6 seconds
      }, 6000);

      return () => {
        clearTimeout(alertTimer);
        audioInstance.pause();
      };
    }
  }, [step]);

  // Step 2: Typing effect for subtitles & sync with audio
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        step2AudioInstance.play();
      }, 600);

      setTimeout(() => {
        setStep(3); // Move to step 3 after 4 seconds
      }, 7300);
    }
  }, [step, step2AudioInstance]);

  return (
    <AnimatePresence mode="wait">
      {/* Step 0: Initial Text */}
      {step === 0 && (
        <motion.div
          key="text"
          className="flex flex-col gap-2 items-center justify-center h-[90vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="fixed w-full h-full justify-center items-center px-5 opacity-20 overflow-hidden ">
            <Particles
              className="absolute inset-0"
              quantity={150}
              ease={80}
              color={"#ffffff"}
              refresh
            />
          </div>
          <h1 className="sm:text-6xl text-4xl text-center font-semibold tracking-tight z-40">
            We advise to <br className="sm:hidden block" />
            <i className="font-bold text-transparent bg-gradient-to-br from-blue-800 to-zinc-200 bg-clip-text">
              raise the volume!
            </i>
          </h1>
          <Button className="text-lg mt-4 z-40" onClick={() => setStep(1)}>
            Done? Let's start then!
          </Button>
        </motion.div>
      )}

      {/* Step 1: Three pulsing red dots forming a triangle with "Alert" text */}
      {step === 1 && (
        <motion.div
          key="alert"
          className="flex flex-col items-center justify-center h-[90vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative gap-y-3 flex flex-col justify-center items-center">
            <motion.div
              className="w-12 h-12 bg-red-600 rounded-full"
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [1, 0.1, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            <div className="flex flex-row gap-x-4">
              <motion.div
                className="w-12 h-12 bg-red-600 rounded-full"
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [1, 0.1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <motion.div
                className="w-12 h-12 bg-red-600 rounded-full "
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [1, 0.1, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </div>
          </div>
          <motion.p
            transition={{ duration: 1.4, repeat: Infinity }}
            animate={{ opacity: [1, 0.1, 1] }}
            className="mt-16 text-5xl text-red-600 font-black uppercase"
          >
            !Alert!
          </motion.p>
        </motion.div>
      )}

      {/* Step 2: Typing effect with subtitles in speech bubble */}
      {step === 2 && (
        <motion.div
          key="step2"
          className="flex flex-col items-center justify-center h-[90vh] px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Speech bubble with typing effect */}
          <TypewriterBubble text="Hey John, your heartbeat dropped significantly, please take action!" />
        </motion.div>
      )}

      {/* Step 3: Full screen non-touchable video */}
      {step === 3 && (
        <motion.div
          key="video"
          className="fixed inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <VideoComponent src={videoSrc} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Demo;
