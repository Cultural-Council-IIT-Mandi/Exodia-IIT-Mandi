"use client";

import { Engine, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useCallback, useState } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import {
    type Container,
    // type ISourceOptions,
    MoveDirection,
    OutMode,
  } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
      };

  const particlesOptions: ISourceOptions = {
    background: {
      color: "#000",
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0,
          size: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: true,
        speed: 0.3,
      },
      number: {
        density: {
          enable: true,
        },
        value: 600,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 5,
        },
        value: { min: 0.3, max: 0.6 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 1,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles id="tsparticles"   particlesLoaded={particlesLoaded}  options={particlesOptions} />
    </div>
  );
};

export default ParticlesBackground;