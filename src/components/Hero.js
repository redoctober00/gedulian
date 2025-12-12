import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Hero({ activeSection }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Clear previous scene
    while(scene.children.length > 0) { 
      scene.remove(scene.children[0]); 
    }

    let animationId;
    
    if (activeSection === 'about') {
      // ABOUT ME: Human silhouette with inner self/personality visualization
      const ambientLight = new THREE.AmbientLight(0x440044, 0.35);
      scene.add(ambientLight);

      // Create human-like figure (stylized head and shoulders)
      const headGeometry = new THREE.SphereGeometry(0.8, 12, 12);
      const headMaterial = new THREE.MeshBasicMaterial({
        color: 0x550033,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = 1;
      scene.add(head);

      // Shoulders/torso outline
      const shoulderGeometry = new THREE.CylinderGeometry(0.6, 1, 1.5, 8);
      const shoulderMaterial = new THREE.MeshBasicMaterial({
        color: 0x440033,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      const shoulders = new THREE.Mesh(shoulderGeometry, shoulderMaterial);
      shoulders.position.y = -0.2;
      scene.add(shoulders);

      // Inner thoughts/personality particles (flowing around head)
      const thoughtGeometry = new THREE.BufferGeometry();
      const thoughtCount = 150;
      const thoughtPositions = new Float32Array(thoughtCount * 3);
      const thoughtColors = new Float32Array(thoughtCount * 3);

      for (let i = 0; i < thoughtCount; i++) {
        const i3 = i * 3;
        const angle = (i / thoughtCount) * Math.PI * 2;
        const radius = 1.5 + Math.random() * 1;
        thoughtPositions[i3] = Math.cos(angle) * radius;
        thoughtPositions[i3 + 1] = Math.sin(angle * 2) * 2;
        thoughtPositions[i3 + 2] = Math.sin(angle) * radius;
        
        thoughtColors[i3] = 0.6 + Math.random() * 0.2;
        thoughtColors[i3 + 1] = 0.1;
        thoughtColors[i3 + 2] = 0.5 + Math.random() * 0.3;
      }

      thoughtGeometry.setAttribute('position', new THREE.BufferAttribute(thoughtPositions, 3));
      thoughtGeometry.setAttribute('color', new THREE.BufferAttribute(thoughtColors, 3));

      const thoughtMaterial = new THREE.PointsMaterial({
        size: 0.08,
        transparent: true,
        opacity: 0.7,
        vertexColors: true
      });
      const thoughts = new THREE.Points(thoughtGeometry, thoughtMaterial);
      scene.add(thoughts);

      // Skill icons orbiting (representing interests/skills)
      const skills = [];
      const skillGeometry = new THREE.TorusGeometry(0.15, 0.05, 6, 6);
      const skillMaterial = new THREE.MeshBasicMaterial({
        color: 0x660044,
        transparent: true,
        opacity: 0.6
      });

      for (let i = 0; i < 4; i++) {
        const skill = new THREE.Mesh(skillGeometry, skillMaterial.clone());
        const angle = (i / 4) * Math.PI * 2;
        skill.position.set(Math.cos(angle) * 2.5, Math.sin(angle * 2), Math.sin(angle) * 2.5);
        skills.push(skill);
        scene.add(skill);
      }

      // Glitchy aura/presence
      const auraGeometry = new THREE.BufferGeometry();
      const auraCount = 100;
      const auraPositions = new Float32Array(auraCount * 3);

      for (let i = 0; i < auraCount; i++) {
        const i3 = i * 3;
        auraPositions[i3] = (Math.random() - 0.5) * 6;
        auraPositions[i3 + 1] = (Math.random() - 0.5) * 6;
        auraPositions[i3 + 2] = (Math.random() - 0.5) * 4;
      }

      auraGeometry.setAttribute('position', new THREE.BufferAttribute(auraPositions, 3));
      const auraMaterial = new THREE.PointsMaterial({
        color: 0x550033,
        size: 0.05,
        transparent: true,
        opacity: 0.3
      });
      const aura = new THREE.Points(auraGeometry, auraMaterial);
      scene.add(aura);

      scene.fog = new THREE.Fog(0x000000, 2, 12);

      let time = 0;
      let glitchTimer = 0;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.01;
        glitchTimer += 1;

        if (Math.random() > 0.96) {
          ambientLight.intensity = Math.random() * 0.4 + 0.25;
        }

        // Breathing effect on head
        const breathe = Math.sin(time) * 0.05 + 1;
        head.scale.set(breathe, breathe, breathe);
        head.rotation.y += 0.003;

        // Slight movement on shoulders
        shoulders.rotation.y = Math.sin(time * 0.5) * 0.1;

        // Flowing thoughts around head
        thoughts.rotation.y += 0.005;
        const positions = thoughts.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(time * 2 + i) * 0.005;
        }
        thoughts.geometry.attributes.position.needsUpdate = true;

        // Orbiting skills/interests
        skills.forEach((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2 + time * 0.3;
          skill.position.x = Math.cos(angle) * 2.5;
          skill.position.y = Math.sin(angle * 2);
          skill.position.z = Math.sin(angle) * 2.5;
          skill.rotation.x += 0.02;
          skill.rotation.y += 0.03;
        });

        // Glitchy aura
        const auraPositions = aura.geometry.attributes.position.array;
        for (let i = 0; i < auraPositions.length; i += 3) {
          if (Math.random() > 0.98) {
            auraPositions[i] = (Math.random() - 0.5) * 6;
            auraPositions[i + 1] = (Math.random() - 0.5) * 6;
            auraPositions[i + 2] = (Math.random() - 0.5) * 4;
          }
        }
        aura.geometry.attributes.position.needsUpdate = true;

        if (Math.random() > 0.98) {
          camera.position.x = (Math.random() - 0.5) * 0.05;
          camera.position.y = (Math.random() - 0.5) * 0.05;
        } else {
          camera.position.x *= 0.95;
          camera.position.y *= 0.95;
        }

        renderer.render(scene, camera);
      };
      animate();
      
    } else if (activeSection === 'experience') {
      // EXPERIENCE/PROJECTS: Building/creating visualization with tools
      const ambientLight = new THREE.AmbientLight(0x330033, 0.35);
      scene.add(ambientLight);

      // Central project under construction (layered structure)
      const layers = [];
      for (let i = 0; i < 5; i++) {
        const layerGeometry = new THREE.BoxGeometry(2 - i * 0.3, 0.2, 2 - i * 0.3);
        const layerMaterial = new THREE.MeshBasicMaterial({
          color: 0x550033,
          wireframe: true,
          transparent: true,
          opacity: 0.6 - i * 0.05
        });
        const layer = new THREE.Mesh(layerGeometry, layerMaterial);
        layer.position.y = i * 0.3 - 0.6;
        layers.push(layer);
        scene.add(layer);
      }

      // Floating code symbols/brackets around the structure
      const codeSymbols = [];
      const symbols = ['{}', '[]', '<>', '()'];
      
      for (let i = 0; i < 8; i++) {
        const symbolGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.05);
        const symbolMaterial = new THREE.MeshBasicMaterial({
          color: 0x660033,
          transparent: true,
          opacity: 0.7,
          wireframe: true
        });
        const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
        const angle = (i / 8) * Math.PI * 2;
        symbol.position.set(
          Math.cos(angle) * 3,
          (Math.random() - 0.5) * 3,
          Math.sin(angle) * 3
        );
        codeSymbols.push(symbol);
        scene.add(symbol);
      }

      // Data flow particles (representing workflow)
      const flowGeometry = new THREE.BufferGeometry();
      const flowCount = 200;
      const flowPositions = new Float32Array(flowCount * 3);
      const flowColors = new Float32Array(flowCount * 3);
      
      for (let i = 0; i < flowCount; i++) {
        const i3 = i * 3;
        const angle = (i / flowCount) * Math.PI * 4;
        const radius = 2 + (i / flowCount) * 2;
        flowPositions[i3] = Math.cos(angle) * radius;
        flowPositions[i3 + 1] = (i / flowCount) * 6 - 3;
        flowPositions[i3 + 2] = Math.sin(angle) * radius;
        
        flowColors[i3] = 0.5 + Math.random() * 0.3;
        flowColors[i3 + 1] = 0.05;
        flowColors[i3 + 2] = 0.4 + Math.random() * 0.3;
      }
      
      flowGeometry.setAttribute('position', new THREE.BufferAttribute(flowPositions, 3));
      flowGeometry.setAttribute('color', new THREE.BufferAttribute(flowColors, 3));
      
      const flowMaterial = new THREE.PointsMaterial({
        size: 0.08,
        transparent: true,
        opacity: 0.7,
        vertexColors: true
      });
      const dataFlow = new THREE.Points(flowGeometry, flowMaterial);
      scene.add(dataFlow);

      // Tools/tech stack floating around
      const tools = [];
      for (let i = 0; i < 6; i++) {
        const toolGeometry = new THREE.OctahedronGeometry(0.2);
        const toolMaterial = new THREE.MeshBasicMaterial({
          color: 0x660044,
          wireframe: true,
          transparent: true,
          opacity: 0.6
        });
        const tool = new THREE.Mesh(toolGeometry, toolMaterial);
        tool.position.set(
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3
        );
        tools.push(tool);
        scene.add(tool);
      }

      scene.fog = new THREE.Fog(0x000000, 3, 15);

      let time = 0;
      let glitchTimer = 0;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.01;
        glitchTimer += 1;

        if (Math.random() > 0.95) {
          ambientLight.intensity = Math.random() * 0.4 + 0.25;
        }

        // Building animation - layers growing
        layers.forEach((layer, i) => {
          layer.rotation.y += 0.005 * (i + 1);
          const pulse = Math.sin(time * 2 + i) * 0.1 + 1;
          layer.scale.set(pulse, 1, pulse);
          
          if (glitchTimer % 20 === 0 && Math.random() > 0.7) {
            layer.material.opacity = Math.random() * 0.5 + 0.3;
          }
        });

        // Code symbols orbiting
        codeSymbols.forEach((symbol, i) => {
          const angle = (i / codeSymbols.length) * Math.PI * 2 + time * 0.4;
          symbol.position.x = Math.cos(angle) * 3;
          symbol.position.z = Math.sin(angle) * 3;
          symbol.rotation.y += 0.02;
          symbol.rotation.x += 0.01;
        });

        // Data flow moving upward
        const positions = dataFlow.geometry.attributes.position.array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += 0.02;
          if (positions[i] > 3) {
            positions[i] = -3;
          }
        }
        dataFlow.geometry.attributes.position.needsUpdate = true;
        dataFlow.rotation.y += 0.003;

        // Tools floating and rotating
        tools.forEach((tool, i) => {
          tool.rotation.x += 0.02;
          tool.rotation.y += 0.03;
          tool.position.y += Math.sin(time * 2 + i) * 0.008;
          
          if (glitchTimer % 15 === 0 && Math.random() > 0.8) {
            tool.material.opacity = Math.random() * 0.5 + 0.3;
          }
        });

        if (Math.random() > 0.98) {
          camera.position.x = (Math.random() - 0.5) * 0.06;
          camera.position.y = (Math.random() - 0.5) * 0.06;
        } else {
          camera.position.x *= 0.94;
          camera.position.y *= 0.94;
        }

        renderer.render(scene, camera);
      };
      animate();
      
    } else if (activeSection === 'contact') {
      // CONTACT: Communication waves, signals, connection reaching out
      const ambientLight = new THREE.AmbientLight(0x330044, 0.35);
      scene.add(ambientLight);

      // Central communication hub (like a phone/signal transmitter)
      const hubGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 8);
      const hubMaterial = new THREE.MeshBasicMaterial({
        color: 0x550055,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const hub = new THREE.Mesh(hubGeometry, hubMaterial);
      scene.add(hub);

      // Signal waves emanating outward (like radio waves)
      const waves = [];
      for (let i = 0; i < 5; i++) {
        const waveGeometry = new THREE.TorusGeometry(1 + i * 0.6, 0.02, 8, 32);
        const waveMaterial = new THREE.MeshBasicMaterial({
          color: 0x660055,
          transparent: true,
          opacity: 0.6 - i * 0.1,
          wireframe: false
        });
        const wave = new THREE.Mesh(waveGeometry, waveMaterial);
        wave.rotation.x = Math.PI / 2;
        waves.push(wave);
        scene.add(wave);
      }

      // Message packets flying outward
      const messageGeometry = new THREE.BufferGeometry();
      const messageCount = 120;
      const messagePositions = new Float32Array(messageCount * 3);
      const messageColors = new Float32Array(messageCount * 3);
      
      for (let i = 0; i < messageCount; i++) {
        const i3 = i * 3;
        const angle = (i / messageCount) * Math.PI * 2;
        const radius = Math.random() * 4;
        messagePositions[i3] = Math.cos(angle) * radius;
        messagePositions[i3 + 1] = (Math.random() - 0.5) * 4;
        messagePositions[i3 + 2] = Math.sin(angle) * radius;
        
        messageColors[i3] = 0.5 + Math.random() * 0.3;
        messageColors[i3 + 1] = 0.1;
        messageColors[i3 + 2] = 0.5 + Math.random() * 0.3;
      }
      
      messageGeometry.setAttribute('position', new THREE.BufferAttribute(messagePositions, 3));
      messageGeometry.setAttribute('color', new THREE.BufferAttribute(messageColors, 3));
      
      const messageMaterial = new THREE.PointsMaterial({
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        vertexColors: true
      });
      const messages = new THREE.Points(messageGeometry, messageMaterial);
      scene.add(messages);

      // Email/social icons orbiting
      const icons = [];
      const iconGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.1);
      
      for (let i = 0; i < 4; i++) {
        const iconMaterial = new THREE.MeshBasicMaterial({
          color: 0x660044,
          wireframe: true,
          transparent: true,
          opacity: 0.7
        });
        const icon = new THREE.Mesh(iconGeometry, iconMaterial);
        const angle = (i / 4) * Math.PI * 2;
        icon.position.set(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5);
        icons.push(icon);
        scene.add(icon);
      }

      // Connection lines reaching out
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(icons.length * 6);
      
      for (let i = 0; i < icons.length; i++) {
        linePositions[i * 6] = 0;
        linePositions[i * 6 + 1] = 0;
        linePositions[i * 6 + 2] = 0;
        linePositions[i * 6 + 3] = icons[i].position.x;
        linePositions[i * 6 + 4] = icons[i].position.y;
        linePositions[i * 6 + 5] = icons[i].position.z;
      }
      
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x550044,
        transparent: true,
        opacity: 0.4
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      scene.fog = new THREE.Fog(0x000000, 3, 15);

      let time = 0;
      let glitchTimer = 0;
      
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        time += 0.01;
        glitchTimer += 1;

        if (Math.random() > 0.96) {
          ambientLight.intensity = Math.random() * 0.4 + 0.25;
        }

        // Pulsing hub
        const pulse = Math.sin(time * 3) * 0.15 + 1;
        hub.scale.set(pulse, 1, pulse);
        hub.rotation.y += 0.01;

        // Expanding signal waves
        waves.forEach((wave, i) => {
          const expansion = ((time * 0.5 + i * 0.2) % 2) * 1.5 + 1;
          wave.scale.set(expansion, expansion, 1);
          wave.material.opacity = Math.max(0, 0.6 - expansion * 0.3);
        });

        // Messages flying outward
        const positions = messages.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];
          const distance = Math.sqrt(x * x + z * z);
          
          if (distance > 6) {
            const angle = Math.atan2(z, x);
            positions[i] = Math.cos(angle) * 0.5;
            positions[i + 2] = Math.sin(angle) * 0.5;
          } else {
            const angle = Math.atan2(z, x);
            positions[i] = x + Math.cos(angle) * 0.03;
            positions[i + 2] = z + Math.sin(angle) * 0.03;
          }
        }
        messages.geometry.attributes.position.needsUpdate = true;

        // Orbiting icons (social media/contact methods)
        icons.forEach((icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2 + time * 0.5;
          icon.position.x = Math.cos(angle) * 2.5;
          icon.position.z = Math.sin(angle) * 2.5;
          icon.position.y = Math.sin(time * 2 + i) * 0.3;
          icon.rotation.y += 0.03;
          icon.rotation.x += 0.02;
          
          if (glitchTimer % 20 === 0 && Math.random() > 0.7) {
            icon.material.opacity = Math.random() * 0.5 + 0.4;
          }
        });

        // Update connection lines
        const linePositions = lines.geometry.attributes.position.array;
        for (let i = 0; i < icons.length; i++) {
          linePositions[i * 6 + 3] = icons[i].position.x;
          linePositions[i * 6 + 4] = icons[i].position.y;
          linePositions[i * 6 + 5] = icons[i].position.z;
        }
        lines.geometry.attributes.position.needsUpdate = true;

        if (glitchTimer % 25 === 0) {
          lines.material.opacity = Math.random() * 0.3 + 0.3;
        }

        if (Math.random() > 0.98) {
          camera.position.x = (Math.random() - 0.5) * 0.06;
          camera.position.y = (Math.random() - 0.5) * 0.06;
        } else {
          camera.position.x *= 0.94;
          camera.position.y *= 0.94;
        }

        renderer.render(scene, camera);
      };
      animate();
    }

    return () => {
      cancelAnimationFrame(animationId);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [activeSection]);

  const sectionContent = {
    about: {
      title: "Gedulian",
      subtitle: "Developer",
      description: "I'm a student who enjoys building real projects. From Web to Cloud, I also like making small Unity games and learning new tools as I go."
    },
    experience: {
      title: "Projects",
      subtitle: "My Experiences",
      description: "Check out my latest projects showcasing full-stack capstone web development, game development, and cloud technologies."
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Looking for internship",
      description: "I'm open to internship opportunities and eager to discuss projects or ideas, especially those involving cloud technologies, networks, or system development."
    }
  };
        
  const content = sectionContent[activeSection] || sectionContent.about;

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <div className="absolute -top-8 -left-4 w-32 h-32 bg-red-900/10 blur-3xl"></div>
            <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-purple-900/10 blur-3xl"></div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-900 to-rose-700">
                {content.title}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-purple-200">
                {content.subtitle}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl relative">
              {content.description}
            </p>
          </div>

          {/* 3D Canvas */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-purple-900/5 blur-3xl"></div>
            <canvas 
              ref={canvasRef}
              className="relative z-10"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}