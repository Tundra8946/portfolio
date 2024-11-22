"use client";
import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { cn } from "@/lib/utils";

const Snowfall = ({ className }) => {
    const canvasRef = useRef(null);
    const { width, height } = useWindowSize();
    const [isSnowing, setIsSnowing] = useState(true);
    const [mounted, setMounted] = useState(false);
    const animationFrameIdRef = useRef(null);
    const particlesRef = useRef([]);

    // Handle localStorage after component mounts
    useEffect(() => {
        setMounted(true);
        const savedState = localStorage.getItem('isSnowingState');
        if (savedState !== null) {
            setIsSnowing(JSON.parse(savedState));
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        if (mounted) {
            localStorage.setItem('isSnowingState', JSON.stringify(isSnowing));
        }
    }, [isSnowing, mounted]);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        const particles = [];
        const particleCount = 200;
        const gravity = 0.02;
        const friction = 0.98;
        const windRange = 0.1;
        let activeParticleCount = 0;
        const particleActivationRate = 2;

        canvas.width = width;
        canvas.height = height;

        // Pre-render snowflake to an offscreen canvas for better performance
        const snowflakeCanvas = document.createElement('canvas');
        snowflakeCanvas.width = 10;
        snowflakeCanvas.height = 10;
        const snowflakeCtx = snowflakeCanvas.getContext('2d');

        const createSnowflakeTexture = (size) => {
            snowflakeCanvas.width = size * 2;
            snowflakeCanvas.height = size * 2;
            snowflakeCtx.clearRect(0, 0, size * 2, size * 2);

            snowflakeCtx.beginPath();
            snowflakeCtx.arc(size, size, size * 0.8, 0, Math.PI * 2);
            snowflakeCtx.fillStyle = 'white';
            snowflakeCtx.fill();
        };

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initializing = false) {
                if (initializing && isSnowing) {
                    this.y = -20 - Math.random() * canvas.height;
                } else {
                    this.y = -20;
                }

                this.x = Math.random() * (canvas.width + 100) - 50;
                this.vx = Math.random() * 0.2 - 0.1;
                this.vy = Math.random() * 0.3 + 0.1;
                this.radius = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.4 + 0.4;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = 0.005 + Math.random() * 0.005;
                this.active = true;

                createSnowflakeTexture(this.radius * 2);
                this.texture = snowflakeCanvas;
            }

            update() {
                if (!this.active) return;

                this.wobble += this.wobbleSpeed;
                this.vx += Math.sin(this.wobble) * 0.01;

                if (this.radius > 1.5) {
                    this.vy += gravity * 1.2;
                } else {
                    this.vy += gravity;
                }

                this.vx *= friction;
                this.vy *= friction;

                this.vx = Math.max(Math.min(this.vx, windRange), -windRange);

                this.x += this.vx;
                this.y += this.vy;

                if (this.y > canvas.height + 20) {
                    if (isSnowing) {
                        this.reset();
                    } else {
                        this.active = false;
                    }
                } else if (this.x < -50 || this.x > canvas.width + 50) {
                    this.x = Math.random() * (canvas.width + 100) - 50;
                }
            }

            draw() {
                if (!this.active) return;
                ctx.globalAlpha = this.opacity;
                ctx.drawImage(
                    this.texture,
                    this.x - this.radius,
                    this.y - this.radius,
                    this.radius * 2,
                    this.radius * 2
                );
            }
        }

        for (let i = 0; i < particleCount; i++) {
            const particle = new Particle();
            if (!isSnowing) {
                particle.y = canvas.height + 30;
                particle.vy = 0;
                particle.vx = 0;
                particle.active = false;
            }
            particles.push(particle);
        }

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const hasVisibleParticles = particles.some(particle =>
                particle.active && particle.y <= canvas.height + 20
            );

            if (isSnowing && activeParticleCount < particleCount) {
                for (let i = 0; i < particleActivationRate && activeParticleCount < particleCount; i++) {
                    if (particles[activeParticleCount]) {
                        particles[activeParticleCount].reset(true);
                        activeParticleCount++;
                    }
                }
            }

            if (isSnowing || hasVisibleParticles) {
                particles.forEach((particle) => {
                    particle.update();
                    particle.draw();
                });
                animationFrameId = requestAnimationFrame(animate);
                animationFrameIdRef.current = animationFrameId;
            } else {
                if (animationFrameIdRef.current) {
                    cancelAnimationFrame(animationFrameIdRef.current);
                    animationFrameIdRef.current = null;
                }
                activeParticleCount = 0;
            }
        };

        animate();

        const handleResize = () => {
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
                animationFrameIdRef.current = null;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [width, height, isSnowing, mounted]);

    return (
        <div className="relative">
            <canvas
                ref={canvasRef}
                className={cn(
                    "fixed top-0 left-0 -z-10 w-full h-full pointer-events-none",
                    className
                )}
            />
            <button
                onClick={() => setIsSnowing(!isSnowing)}
                className={cn(
                    "fixed bottom-5 right-5 p-2 rounded-full",
                    "bg-white/20 border border-white/30",
                    "backdrop-blur-sm transition-all duration-200",
                    "hover:bg-white/30 focus:outline-none focus:ring-2",
                    "focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                )}
                aria-label={isSnowing ? 'Stop Snowfall' : 'Start Snowfall'}
            >
                {isSnowing ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M8 15h.01" />
                        <path d="M8 19h.01" />
                        <path d="M12 17h.01" />
                        <path d="M12 21h.01" />
                        <path d="M16 15h.01" />
                        <path d="M16 19h.01" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Snowfall;