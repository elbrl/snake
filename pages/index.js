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

  const [direction, setDirection] = useState("");
  useEffect(() => {
    setHool({
      top: Math.floor(Math.random() * areaHeight),
      left: Math.floor(Math.random() * areaWidth),
    });
    window.addEventListener("keydown", (e) => {
      setDirection((prev) => {
        if (e.code === "ArrowRight" && prev !== "left") {
          setDirection("right");
        }
        if (e.code === "ArrowDown" && prev !== "up") {
          setDirection("down");
        }
        if (e.code === "ArrowLeft" && prev !== "right") {
          setDirection("left");
        }
        if (e.code === "ArrowUp" && prev !== "down") {
          setDirection("up");
        }
        return prev;
      });
      setDirection2((prev2) => {
        console.log(prev2);

        console.log(direction, direction2);

        if (e.key === "d" && prev2 !== "left2") {
          setDirection2("right2");
        } else if (e.key === "s" && prev2 !== "up2") {
          setDirection2("down2");
        } else if (e.key === "a" && prev2 !== "right2") {
          setDirection2("left2");
        } else if (e.key === "w" && prev2 !== "down2") {
          setDirection2("up2");
        }

        return prev2;
      });
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
        setCheck(true);
      }
    }
  }, 80);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [score2, setScore2] = useState();
  const [check2, setCheck2] = useState(false);
  const [body2, setBody2] = useState([
    { top: 10, left: 10 },
    { top: 10, left: 9 },
    { top: 10, left: 8 },
  ]);

  const [direction2, setDirection2] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      // console.log(e.code);
      // switch (e.code) {
      //   case "KeyS":
      //     setDirection2("down2");
      //     break;
      //   case "KeyD":
      //     setDirection2("right2");
      //     break;
      //   case "KeyW":
      //     setDirection2("up2");
      //     break;
      //   case "KeyA":
      //     setDirection2("left2");
      //     break;
      // }
    });
  }, []);
  useEffect(() => {
    setScore2(body2.length - 3);
  }, [body2.length]);
  useEffect(() => {
    if (body2[0].top === hool.top && body2[0].left === hool.left) {
      let newB2 = [...body2];
      newB2.push({ top: hool.top, left: hool.left });
      setBody2(newB2);
      setHool({
        top: Math.floor(Math.random() * areaHeight),
        left: Math.floor(Math.random() * areaWidth),
      });
    }
  }, [body2]);

  function goRight2() {
    const newBody2 = [...body2];

    newBody2.pop();
    let newLeft2 = newBody2[0].left + 1;
    if (newLeft2 > areaWidth - 1) {
      newLeft2 = 0;
    }
    newBody2.unshift({ ...newBody2[0], left: newLeft2 });
    setBody2(newBody2);
  }
  function goLeft2() {
    const newBody2 = [...body2];

    newBody2.pop();
    let newRight2 = newBody2[0].left - 1;
    if (newRight2 < 0) {
      newRight2 = areaWidth - 1;
    }
    newBody2.unshift({ ...newBody2[0], left: newRight2 });
    setBody2(newBody2);
  }
  function goDown2() {
    const newBody2 = [...body2];

    newBody2.pop();
    let newTop2 = newBody2[0].top + 1;
    if (newTop2 > areaHeight - 1) {
      newTop2 = 0;
    }
    newBody2.unshift({ ...newBody2[0], top: newTop2 });
    setBody2(newBody2);
  }

  function goUp2() {
    const newBody2 = [...body2];

    newBody2.pop();
    let newBottom2 = newBody2[0].top - 1;
    if (newBottom2 < 0) {
      newBottom2 = areaHeight - 1;
    }
    newBody2.unshift({ ...newBody2[0], top: newBottom2 });
    setBody2(newBody2);
  }
  useInterval(() => {
    switch (direction2) {
      case "right2":
        goRight2();
        break;
      case "down2":
        goDown2();
        break;
      case "left2":
        goLeft2();
        break;
      case "up2":
        goUp2();
        break;
    }
    for (let i = 1; i < body2.length - 1; i++) {
      if (body2[0].top === body2[i].top && body2[0].left === body2[i].left) {
        setCheck2(true);
      }
    }
  }, 80);

  return (
    <main className={`flex min-h-screen flex-col items-center  p-24`}>
      <div style={{}}> Player1: {score * 10}</div>
      <div style={{}}> Player2: {score2 * 10}</div>

      {check2 == true && check == true ? (
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
          display: check && check2 ? "none" : "flex",
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
        {check2 == false ? (
          <div>
            {" "}
            {body2.map((segment, key) => (
              <div
                onClick={() => {}}
                className="absolute rounded "
                style={{
                  backgroundColor:
                    key !== 0 && key % 2 == 0
                      ? "#0d948b"
                      : "black" && key == 0
                      ? "#06403c"
                      : "#0d948b",
                  top: segment.top * zoom,
                  left: segment.left * zoom,
                  width: zoom,
                  height: zoom,
                }}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
        {check == false ? (
          <div>
            {body.map((segment, key) => (
              <div
                onClick={() => {}}
                className="absolute rounded "
                style={{
                  backgroundColor:
                    key !== 0 && key % 2 == 0
                      ? "#9122ba"
                      : "black" && key == 0
                      ? "#550a70"
                      : "#9122ba",
                  // backgroundColor:
                  //   key == body[body.length - 1] ? "white" : "black",
                  top: segment.top * zoom,
                  left: segment.left * zoom,
                  width: zoom,
                  height: zoom,
                }}
              ></div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}
