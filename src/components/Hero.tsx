import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "AWS Cloud Practitioner";

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: {
      x: number; y: number; size: number; speed: number;
      connections: number[]; opacity: number; vx: number; vy: number;
    }[] = [];

    const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.3 + 0.1,
        connections: []
      });
    }

    let animationTime = 0;

    const animate = () => {
      animationTime += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0, 0,
        canvas.width + Math.sin(animationTime) * 200,
        canvas.height + Math.cos(animationTime * 0.7) * 200
      );
      gradient.addColorStop(0, `rgba(124, 58, 237, ${0.1 + Math.sin(animationTime) * 0.05})`);
      gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.08 + Math.cos(animationTime * 1.2) * 0.03})`);
      gradient.addColorStop(1, `rgba(147, 51, 234, ${0.12 + Math.sin(animationTime * 0.8) * 0.04})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }

        particle.opacity = 0.3 + Math.sin(animationTime + i * 0.5) * 0.4;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        glowGradient.addColorStop(0, `rgba(124, 58, 237, ${particle.opacity})`);
        glowGradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

        ctx.fillStyle = glowGradient;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particle.x, 2) +
            Math.pow(particles[j].y - particle.y, 2)
          );

          const maxDistance = window.innerWidth < 768 ? 80 : 120;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * Math.sin(animationTime + i * 0.1)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/90 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/90 z-10 animate-gradient-shift"></div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center mt-10 sm:mt-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 animate-pulse-glow"></div>
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-all duration-700 ease-out animate-zoom-in-glow hover:scale-105">
              <img
                src="/Thiyagu2.png"
                alt="Thiyagu S - AWS Cloud Practitioner"
                className="w-full h-full object-top object-cover scale-110 transition-transform duration-700 ease-out hover:scale-115"
              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400 font-bold">Thiyagu S</span>
          </p>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight opacity-0 animate-slide-up-fade" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <span className="block mb-2">AWS Cloud</span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
            {displayedText}
            <span className={`inline-block w-0.5 h-8 sm:h-12 md:h-16 bg-indigo-600 ml-1 ${isTypingComplete ? 'animate-blink' : 'animate-pulse'}`}></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          Fresh graduate passionate about cloud computing and AWS technologies, eager to start my career in cloud infrastructure and solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 opacity-0 animate-slide-up-fade"
            style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 opacity-0 animate-slide-up-fade"
            style={{ animationDelay: '2.8s', animationFillMode: 'forwards' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Badges */}
        <div className="mt-12 flex justify-center space-x-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '3.2s', animationFillMode: 'forwards' }}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300 animate-float-slow">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AWS Certified</span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300 animate-float-medium">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fresh Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
