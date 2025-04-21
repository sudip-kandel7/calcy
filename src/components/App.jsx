import { useState } from "react";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [result, setResult] = useState(false);

  const buttonList = [
    {
      value: "AC",
    },
    {
      value: "C",
    },
    {
      value: "%",
    },
    {
      value: "/",
    },
    {
      value: "7",
    },
    {
      value: "8",
    },
    {
      value: "9",
    },
    {
      value: "*",
    },
    {
      value: "4",
    },
    {
      value: "5",
    },
    {
      value: "6",
    },
    {
      value: "-",
    },
    {
      value: "1",
    },
    {
      value: "2",
    },
    {
      value: "3",
    },
    {
      value: "+",
    },
    {
      value: "0",
    },
    {
      value: "00",
    },
    {
      value: ".",
    },
    {
      value: "=",
    },
  ];

  const buttonClick = (e) => {
    const kun = e.currentTarget.value;
    if (kun == "=") {
      let result = eval(display);
      setDisplay(result);
      setResult(true);
    } else if (kun == "AC") {
      setDisplay("0");
      setResult(false);
    } else if (kun == "C") {
      if (result) {
        setDisplay("0");
        setResult(false);
      } else {
        setDisplay((prev) => {
          if (prev.length <= 1) return "0";
          return prev.slice(0, -1);
        });
      }
    } else {
      if (result) {
        setDisplay(kun);
        setResult(false);
      } else {
        setDisplay((prev) => (prev === "0" ? kun : prev + kun));
      }
    }
  };

  const tryMap = buttonList.map((ek) => {
    return <Button value={ek.value} click={buttonClick} key={nanoid()} />;
  });

  return (
    <>
      <div className="full">
        <div className="calc">
          <h1>Calculator</h1>
          <p className="dis">{display}</p>
          <div className="keys">{tryMap}</div>
        </div>
      </div>
    </>
  );
}
