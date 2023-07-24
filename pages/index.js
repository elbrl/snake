import { useEffect, useState } from "react";
import useInterval from "use-interval";

const zoom = 10;
const areaWidth = 95;
const areaHeight = 95;

export default function Home() {
  const [body, setBody] = useState([
    { top: 3, left: 10 },
    { top: 3, left: 9 },
    { top: 3, left: 8 },
    { top: 3, left: 7 },
    { top: 3, left: 6 },
    { top: 3, left: 5 },
    { top: 3, left: 4 },
    { top: 3, left: 3 },
    { top: 3, left: 2 },
    { top: 3, left: 1 },
    { top: 3, left: 0 },
  ]);
  const [direction, setDirection] = useState("down");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowDown":
          setDirection("down");
          break;
        case "ArrowRight":
          setDirection("right");
          break;
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowLeft":
          setDirection("left");
          break;
      }
    });
  });
  function goRight() {
    const newBody = [...body];

    newBody.pop();
    let newLeft = newBody[0].left + 1;
    if (newLeft > areaWidth - 1) {
      newLeft = 0;
    }
    newBody.unshift({ ...newBody[0], left: newLeft });
    setBody(newBody);
  }
  function goLeft() {
    const newBody = [...body];

    newBody.pop();
    let newRight = newBody[0].left - 1;
    if (newRight < 0) {
      newRight = areaWidth - 1;
    }
    newBody.unshift({ ...newBody[0], left: newRight });
    setBody(newBody);
  }
  function goDown() {
    const newBody = [...body];

    newBody.pop();
    let newTop = newBody[0].top + 1;
    if (newTop > areaHeight - 1) {
      newTop = 0;
    }
    newBody.unshift({ ...newBody[0], top: newTop });
    setBody(newBody);
  }

  function goUp() {
    const newBody = [...body];

    newBody.pop();
    let newBottom = newBody[0].top - 1;
    if (newBottom < 0) {
      newBottom = areaHeight - 1;
    }
    newBody.unshift({ ...newBody[0], top: newBottom });
    setBody(newBody);
  }
  useInterval(() => {
    switch (direction) {
      case "right":
        goRight();
        break;
      case "down":
        goDown();
        break;
      case "left":
        goLeft();
        break;
      case "up":
        goUp();
        break;
    }
  }, 20);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div
        className="relative bg-slate-300"
        style={{ width: areaWidth * zoom, height: areaHeight * zoom }}
      >
        {body.map((segment) => (
          <div
            className="absolute rounded bg-slate-900"
            style={{
              top: segment.top * zoom,
              left: segment.left * zoom,

              width: zoom,
              height: zoom,
            }}
          ></div>
        ))}
      </div>
    </main>
  );
}
