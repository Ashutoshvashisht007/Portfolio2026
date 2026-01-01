"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const PhysicsScene = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const rafRef = useRef<number>(0);

    const RESET_DELAY = 2500;

    useEffect(() => {
        if (!canvasRef.current) return;

        if (!canvasRef.current) return;

        const BALL_START = {
            x: 200,
            y: window.innerHeight - 160,
        };

        const ballOptions: Matter.IBodyDefinition = {
            restitution: 0.8,
            friction: 0.05,
            density: 0.004,
        };

        let ball = Matter.Bodies.circle(
  BALL_START.x,
  BALL_START.y,
  14,
  {
    restitution: 0.8,
    friction: 0.05,
    density: 0.004,
    isStatic: true,
  }
);



        /* ---------------- Engine ---------------- */
        const engine = Matter.Engine.create();
        engine.gravity.y = 0;
        engine.positionIterations = 6;
        engine.velocityIterations = 4;
        engine.constraintIterations = 2;
        engineRef.current = engine;

        const world = engine.world;

        /* ---------------- Bodies ---------------- */
        const ground = Matter.Bodies.rectangle(
            window.innerWidth / 2,
            window.innerHeight + 40,
            window.innerWidth,
            80,
            { isStatic: true }
        );

        const anchor = { x: BALL_START.x, y: BALL_START.y };

        let elastic = Matter.Constraint.create({
            pointA: anchor,
            bodyB: ball,
            stiffness: 0.15, // 🔥 increase
            damping: 0.05,
        });


        const boxes: Matter.Body[] = [];
        for (let i = 0; i < 6; i++) {
            boxes.push(
                Matter.Bodies.rectangle(
                    window.innerWidth * 0.8,
                    window.innerHeight - 60 - i * 42,
                    38,
                    38,
                    { restitution: 0.1 }
                )
            );
        }

        Matter.World.add(world, [ground, ball, elastic, ...boxes]);

        /* ---------------- Mouse ---------------- */
        const mouse = Matter.Mouse.create(document.body);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2 },
        });

        Matter.World.add(world, mouseConstraint);

        // Restrict drag to left side
        // Matter.Events.on(mouseConstraint, "startdrag", (event) => {
        //     if (event.body === ball) {
        //         Matter.Body.setStatic(ball, false);
        //     }
        // });

        Matter.Events.on(mouseConstraint, "beforeUpdate", () => {
  if (!mouseConstraint.body) return;

  const mouseX = mouse.position.x;

  // Outside slingshot zone → release immediately
  if (mouseX > window.innerWidth * 0.3) {
    mouseConstraint.constraint.bodyB = null;
  }
});




        // Release slingshot
        Matter.Events.on(mouseConstraint, "enddrag", () => {
            if (!elastic.bodyB) return;

  elastic.bodyB = null;

  engine.gravity.y = 1; // 🔥 enable gravity now

  setTimeout(resetScene, RESET_DELAY);
        });

        /* ---------------- Reset Logic ---------------- */
        const resetScene = () => {
            Matter.World.clear(world, false);

            ball = Matter.Bodies.circle(
                BALL_START.x,
                BALL_START.y,
                14,
                { restitution: 0.8 }
            );

            elastic = Matter.Constraint.create({
                pointA: anchor,
                bodyB: ball,
                stiffness: 0.08,
                damping: 0.1,
            });

            Matter.World.add(world, [ground, ball, elastic]);

            boxes.forEach((_, i) => {
                const box = Matter.Bodies.rectangle(
                    window.innerWidth * 0.8,
                    window.innerHeight - 60 - i * 42,
                    38,
                    38
                );
                Matter.World.add(world, box);
            });
        };

        /* ---------------- Draw ---------------- */
        const ctx = canvasRef.current.getContext("2d")!;
        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            ctx.fillStyle = "#fff";
            Matter.Composite.allBodies(world).forEach((body) => {
                ctx.beginPath();
                body.vertices.forEach((v, i) =>
                    i === 0 ? ctx.moveTo(v.x, v.y) : ctx.lineTo(v.x, v.y)
                );
                ctx.closePath();
                ctx.stroke();
            });
        };

        /* ---------------- Loop ---------------- */
        const loop = () => {
            Matter.Engine.update(engine, 1000 / 60);
            draw();
            rafRef.current = requestAnimationFrame(loop);
        };

        loop();

        /* ---------------- Cleanup ---------------- */
        return () => {
            cancelAnimationFrame(rafRef.current);
            Matter.Engine.clear(engine);
        };
    }, []);

    const [size, setSize] = React.useState({ w: 0, h: 0 });

    useEffect(() => {
        setSize({ w: window.innerWidth, h: window.innerHeight });
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                width={size.w}
                height={size.h}
                className="fixed inset-0 z-0 pointer-events-none opacity-30"
            />

            {/* Reset Button */}
            <button
                onClick={() => window.location.reload()}
                className="fixed bottom-6 left-6 z-30 px-4 py-2 text-sm border rounded-md backdrop-blur"
            >
                Reset
            </button>
        </>
    );
};

export default PhysicsScene;
