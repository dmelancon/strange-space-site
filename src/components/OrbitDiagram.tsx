// Orbit Diagram Components
const OrbitRing = ({
  radius,
  strokeWidth = "1.2",
}: {
  radius: number;
  strokeWidth?: string;
}) => (
  <circle
    cx="200"
    cy="200"
    r={radius}
    fill="none"
    stroke="#fff"
    strokeWidth={strokeWidth}
  />
);

const OrbitCircle = ({
  radius = 8,
  orbitRadius,
  speed = 1,
  delay = 0,
}: {
  radius?: number;
  orbitRadius: number;
  speed?: number;
  delay?: number;
}) => (
  <g
    style={{
      animation: `orbit ${20 / speed}s linear infinite`,
      animationDelay: `${delay}s`,
      transformOrigin: "200px 200px",
    }}
  >
    <circle
      cx={200 + orbitRadius}
      cy={200}
      r={radius}
      fill="#111"
      stroke="#fff"
      strokeWidth="1"
    />
  </g>
);

const OrbitText = ({
  pathId,
  startOffset,
  text,
  fontSize = "16",
  letterSpacing = "4",
  speed = 1,
  delay = 0,
}: {
  pathId: string;
  startOffset: string;
  text: string;
  fontSize?: string;
  letterSpacing?: string;
  speed?: number;
  delay?: number;
}) => (
  <g
    style={{
      animation: `orbit ${25 / speed}s linear infinite`,
      animationDelay: `${delay}s`,
      transformOrigin: "200px 200px",
    }}
  >
    <text>
      <textPath href={pathId} startOffset={startOffset} textAnchor="middle">
        <tspan
          fill="#fff"
          stroke="#111"
          strokeWidth="0.7em"
          paintOrder="stroke"
          strokeLinejoin="round"
          fontFamily="Klavika, sans-serif"
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          dy="6"
        >
          {text}
        </tspan>
      </textPath>
    </text>
  </g>
);

const OrbitDiagram = () => {
  const rings = [80, 100, 120, 140, 160, 180];
  const circles = [
    { orbitRadius: 120, speed: 1.2, delay: 0 }, // 3rd ring
    { orbitRadius: 140, speed: 1.3, delay: 0 }, // 4th ring
    { orbitRadius: 160, speed: 0.9, delay: 0 }, // 5th ring
  ];
  const textLabels = [
    {
      pathId: "#path1",
      startOffset: "25%",
      text: "DESIGN", // 1st ring
      speed: 1.0,
      delay: 0,
    },
    {
      pathId: "#path2",
      startOffset: "75%",
      text: "R&D", // 2nd ring
      speed: 0.7,
      delay: 0,
    },
    {
      pathId: "#path4",
      startOffset: "50%",
      text: "ANIMATION", // 3rd ring
      speed: 1.3,
      delay: 0,
    },
    {
      pathId: "#path5",
      startOffset: "10%",
      text: "SOFTWARE", // 4th ring
      speed: 0.9,
      delay: 0,
    },
    {
      pathId: "#path6",
      startOffset: "90%",
      text: "HARDWARE",
      speed: 1.1,
      delay: 0,
    }, // 5th ring
  ];

  return (
    <>
      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div
        className="w-full flex justify-center items-center"
        style={{ minHeight: "350px", minWidth: "350px" }}
      >
        <svg
          viewBox="0 0 400 400"
          width="min(80vw, 400px)"
          height="min(80vw, 400px)"
          className="block"
        >
          {/* Define paths for each ring */}
          <defs>
            <path
              id="path1"
              d="M 200 200 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
            />
            <path
              id="path2"
              d="M 200 200 m -100 0 a 100 100 0 1 1 200 0 a 100 100 0 1 1 -200 0"
            />
            <path
              id="path3"
              d="M 200 200 m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0"
            />
            <path
              id="path4"
              d="M 200 200 m -140 0 a 140 140 0 1 1 280 0 a 140 140 0 1 1 -280 0"
            />
            <path
              id="path5"
              d="M 200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0"
            />
            <path
              id="path6"
              d="M 200 200 m -180 0 a 180 180 0 1 1 360 0 a 180 180 0 1 1 -360 0"
            />
          </defs>

          {/* Center circle */}
          <circle cx="200" cy="200" r="50" fill="white" />

          {/* Centered text in the circle */}
          <text
            x="200"
            y="195"
            textAnchor="middle"
            fontFamily="Klavika, sans-serif"
            fontSize="22"
            fill="#111"
            letterSpacing="2"
            style={{ textTransform: "uppercase" }}
          >
            <tspan x="200" dy="0">
              YOUR
            </tspan>
            <tspan x="200" dy="1.2em">
              IDEA
            </tspan>
          </text>

          {/* Orbit rings */}
          {rings.map((radius) => (
            <OrbitRing key={radius} radius={radius} />
          ))}

          {/* Orbit circles */}
          {circles.map((circle, index) => (
            <OrbitCircle key={index} {...circle} />
          ))}

          {/* Text labels */}
          {textLabels.map((label, index) => (
            <OrbitText key={index} {...label} />
          ))}
        </svg>
      </div>

      {/* Description below SVG */}
    </>
  );
};

export default OrbitDiagram;
