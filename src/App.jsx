import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Box } from "@mantine/core";

function Sphere({ className, color }) {
  return (
    <Box
      className={className}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        transformStyle: "preserve-3d",
      }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <Box
          key={i}
          className="item"
          style={{
            borderRadius: "50%",
            background: `radial-gradient(${color}, transparent)`,
            transform: `rotateY(${(i + 1) * 30}deg)`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </Box>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Box
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#000",
          position: "fixed",
          inset: 0,
          zoom: 0.7,
          "--primary-color": "#84fab0",
          "--secondary-color": "transparent",
        }}
      >
        <Box
          className="rotate"
          style={{
            width: "400px",
            height: "400px",
            position: "absolute",
            top: "calc(50% - 200px)",
            left: "calc(50% - 200px)",
            transformStyle: "preserve-3d",
            animation: "girar 20s linear infinite",
            perspective: "20000px",
          }}
        >
          <Sphere className="sphere1" color="red" />
          <Sphere className="sphere2" color="blue" />
          <Sphere className="sphere3" color="orange" />
          <Sphere className="sphere4" color="lawngreen" />
        </Box>
        <style>
          {`
            @keyframes girar {
              0% { transform: rotateX(0deg) rotateY(0deg); }
              100% { transform: rotateX(360deg) rotateY(360deg); }
            }
          `}
        </style>
      </Box>
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);
