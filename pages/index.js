import { useEffect, useState } from "react";
import useInterval from "use-interval";

const zoom = 10;
const areaWidth = 40;
const areaHeight = 40;

export default function Home() {
  const [hool, setHool] = useState({
    top: Math.floor(Math.random() * areaHeight),
    left: Math.floor(Math.random() * areaWidth),
  });
  const [score, setScore] = useState();
  const [check, setCheck] = useState(false);
  const [body, setBody] = useState([
    { top: 3, left: 10 },
    { top: 3, left: 9 },
    { top: 3, left: 8 },
  ]);
  const [direction, setDirection] = useState("down");
  useEffect(() => {
    setHool({
      top: Math.floor(Math.random() * areaHeight),
      left: Math.floor(Math.random() * areaWidth),
    });

    // console.log(hool);
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
  }, []);
  useEffect(() => {
    setScore(body.length - 3);
  }, [body.length]);
  useEffect(() => {
    if (body[0].top === hool.top && body[0].left === hool.left) {
      let newB = [...body];
      newB.push({ top: hool.top, left: hool.left });
      setBody(newB);
      // console.log("urt", body.length);
      setHool({
        top: Math.floor(Math.random() * areaHeight),
        left: Math.floor(Math.random() * areaWidth),
      });
    }
  }, [body]);

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
    for (let i = 1; i < body.length - 1; i++) {
      if (body[0].top === body[i].top && body[0].left === body[i].left) {
        // console.log("uheeshaas");
        setCheck(true);
      }
    }
  }, 200);

  return (
    <main className={`flex min-h-screen flex-col items-center  p-24`}>
      <div style={{}}>Score: {score * 10}</div>
      {check ? (
        <div>
          <button
            className="bg-white p-2 rounded"
            onClick={() => window.location.reload()}
          >
            Дахин эхлэх
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        className="relative bg-slate-300"
        style={{
          width: areaWidth * zoom,
          height: areaHeight * zoom,
          display: check ? "none" : "flex",
        }}
      >
        <div
          className="absolute bg-black"
          style={{
            top: hool.top * zoom,
            left: hool.left * zoom,
            width: zoom,
            height: zoom,
            backgroundColor: "green",
            borderRadius: "10px",
          }}
        ></div>

        {/* {zogsooh ? :""} */}
        {body.map((segment, key) => (
          <div
            onClick={() => {
              console.log(key);
            }}
            className="absolute rounded "
            style={{
              // backgroundColor:
              //   key !== 0 && key % 2 == 0
              //     ? "red"
              //     : "black" && key == 0
              //     ? "blue"
              //     : "black",
              backgroundColor: key == body[body.length - 1] ? "white" : "black",
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
