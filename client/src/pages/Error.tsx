import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentWords, setCurrentWords] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentWords);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const translations = [
      "sorry",
      "disculpa",
      "E kala mai ia'u",
      "lo siento",
      "Entschuldigung",
      "perdón",
      "désolé",
      "pardon",
      "Duìbùqǐ",
      "sumimasen",
      "съжалявам",
      "bagişla",
      "םירעטצמ",
      "החילס",
    ];

    const friction = 0.95;
    const baseGravity = 0.02;
    const heavyGravity = 0.5;

    const mouse: Mouse = { x: 0, y: 0, radius: 100 };

    interface Mouse {
      x: number;
      y: number;
      radius: number;
    }

    class Letter {
      x: number;
      y: number;
      char: string;
      vx: number;
      vy: number;
      size: number;
      color: string;
      delay: number;
      heavyGravityTimer: number;
      gravity: number;

      constructor(x: number, y: number, char: string) {
        this.x = x;
        this.y = y;
        this.char = char;
        this.vx = Math.random() * 4 - 2;
        this.vy = 0; // Start with no vertical movement
        this.size = 150;
        this.color = "gray";
        this.delay = 4000; // 4 seconds delay
        this.heavyGravityTimer = 2000; // 2 seconds for heavy gravity
        this.gravity = baseGravity; // Start with low gravity
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = "rgba(169, 169, 169, 0.7)";
        ctx.fillText(this.char, this.x, this.y);
      }
      update(
        ctx: CanvasRenderingContext2D,
        mouse: Mouse,
        canvasWidth: number,
        canvasHeight: number,
        letters: Letter[] // This is explicitly defined as an array of `Letter`
      ) {
        if (this.delay > 0) {
          this.delay -= 16; // Countdown for delay
        } else if (this.heavyGravityTimer > 0) {
          this.gravity = heavyGravity; // Apply heavy gravity
          this.heavyGravityTimer -= 16;
        } else {
          this.gravity = baseGravity; // Revert to low gravity
        }

        // Apply gravity and friction
        this.vy += this.gravity;
        this.vx *= friction;
        this.vy *= friction;

        // Prevent letters from going off the screen horizontally
        if (this.x + this.size > canvasWidth) {
          this.x = canvasWidth - this.size;
          this.vx *= -0.6; // Bounce off the edge
        }
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -0.6; // Bounce off the edge
        }

        // Prevent letters from going off the screen vertically
        const floorHeight = canvasHeight + 70; // Adjust the "floor" height

        if (this.y + this.size > floorHeight) {
          this.y = floorHeight - this.size; // Prevent letters from falling below the floor
          this.vy *= -0.6; // Bounce effect
        }

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          this.vx -= Math.cos(angle) * force * 8;
          this.vy -= Math.sin(angle) * force * 8;
        }

        // Collision detection with other letters
        for (const other of letters) {
          if (this === other) continue; // Skip self

          const dx = other.x - this.x;
          const dy = other.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size) {
            // Collision detected
            const angle = Math.atan2(dy, dx);
            const overlap = (this.size - distance) / 2;

            // Separate the letters slightly
            this.x -= Math.cos(angle) * overlap;
            this.y -= Math.sin(angle) * overlap;
            other.x += Math.cos(angle) * overlap;
            other.y += Math.sin(angle) * overlap;

            // Bounce effect
            const combinedVelocity = Math.sqrt(
              this.vx * this.vx + this.vy * this.vy
            );
            this.vx -= Math.cos(angle) * combinedVelocity * 0.5;
            this.vy -= Math.sin(angle) * combinedVelocity * 0.5;
            other.vx += Math.cos(angle) * combinedVelocity * 0.5;
            other.vy += Math.sin(angle) * combinedVelocity * 0.5;
          }
        }

        this.draw(ctx);
      }
    }

    const letterObjects: Letter[] = [];

    const createLettersForWord = (word: string, startY: number) => {
      const letterSpacing = 150;

      // Calculate the total width of the word to center it horizontally
      const wordWidth = word.length * letterSpacing;
      const startX = canvas.width / 2 - wordWidth / 2; // Center the word horizontally

      word.split("").forEach((char, index) => {
        const x = startX + index * letterSpacing;
        letterObjects.push(new Letter(x, startY, char));
      });
    };

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Pass the entire `letterObjects` array to each letter's `update` method
        letterObjects.forEach((letter) =>
          letter.update(ctx, mouse, canvas.width, canvas.height, letterObjects)
        );

        requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const initialWord =
      translations[Math.floor(Math.random() * translations.length)];
    setCurrentWords([initialWord]);

    // Set the starting position closer to the top (e.g., 15% of the screen height)
    const startY = canvas.height * 0.15;
    createLettersForWord(initialWord, startY);

    setTimeout(() => {
      const newWord =
        translations[Math.floor(Math.random() * translations.length)];
      setCurrentWords((prevWords) => [...prevWords, newWord]);
      createLettersForWord(newWord, startY + 100); // Slightly lower than the previous word
    }, 5000);

    setTimeout(() => {
      const anotherWord =
        translations[Math.floor(Math.random() * translations.length)];
      setCurrentWords((prevWords) => [...prevWords, anotherWord]);
      createLettersForWord(anotherWord, startY + 200); // Even lower than the second word
    }, 10000);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleAlert() {
    alert("currently on the works");
  }

  return (
    <div className="relative -mt-14 bg-black h-screen w-screen text-white flex flex-col justify-center">
      <div className="absolute z-10 items-start ml-20 -mt-40">
        <h1 className="text-3xl mb-20 font-bold">
          The page you were looking for couldn't be found.
        </h1>
        <p className="mb-8  font-bold">Maybe try learning about:</p>
        <div className="flex flex-col font-bold">
          <span
            className="mb-4 cursor-pointer"
            onClick={() => navigate("/templates")}
          >
            Templates→
          </span>
          <span className="mb-4 cursor-pointer" onClick={() => navigate("/")}>
            Websites→
          </span>
          <span
            className="mb-4 cursor-pointer"
            onClick={() => navigate("/accountdashboard/dashboard")}
          >
            Domains→
          </span>
          <span className="mb-4 cursor-pointer" onClick={handleAlert}>
            Online Stores→
          </span>
          <span className="mb-4 cursor-pointer" onClick={handleAlert}>
            Marketing Tools→
          </span>
        </div>
      </div>
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
}

export default Error;
