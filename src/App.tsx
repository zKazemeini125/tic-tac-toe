import { useEffect, useState } from "react";
import "./App.css";
import { FaO, FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
//import { FaWindowClose } from "react-icons/fa";

function App() {
  const [items, setItems] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<"x" | "o">("x");
  const [winner, setWinner] = useState<string>("");
  const [isGameOver, setGameOver] = useState(false);

  useEffect(() => {
    calculateWinner(items); // پس از هر بار تغییر items برنده بازی محاسبه شود
  }, [items, turn]);

  const handleClick = (index: number) => {
    const newItems = [...items];
    if (items[index]) return; // اگر خانه پر است، برگرد

    newItems[index] = turn; // مقدار نوبت به خانه مربوطه اختصاص داده شود
    setItems(newItems);
    setTurn(turn === "x" ? "o" : "x");

    const gamerWinner = calculateWinner(newItems);
    if (gamerWinner) setWinner(gamerWinner);
    else if (items.every((item) => item !== "")) {
      setGameOver(true);
    }
  };

  const mappingItemsToIcon = (items: string[]): React.ReactElement[] => {
    //برای بهبود رابط کاربری هر عنصر بازی به یک ایکون مپ میشود
    return items.map((i, idx) => {
      if (i === "x")
        return (
          <>
            <IconContext.Provider value={{ color: "#FF4500" }}>
              <div>
                <FaXmark key={idx} />
              </div>
            </IconContext.Provider>
          </>
        );
      if (i === "o")
        return (
          <>
            <IconContext.Provider value={{ color: "#00CED1" }}>
              <div>
                <FaO key={idx} />
              </div>
            </IconContext.Provider>
          </>
        );
      return <span key={idx}></span>;
    });
  };
  const calculateWinner = (items: string[]) => {
    const winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winStates.length; i++) {
      const [a, b, c] = winStates[i];
      if (items[a] && items[a] === items[b] && items[a] === items[c]) {
        setWinner(items[a]);
        return items[a];
      }
    }
    return null;
  };

  return (
    <>
      <div className="container mx-auto lg:px-44">
        <div className="grid grid-rows-7">
          <IconContext.Provider
            value={{
              color: "#7b7b7b",
              size: "1.8em",
            }}
          >
            <div className="h-14 w-14 flex justify-center items-center justify-self-end">
              {/* <FaWindowClose /> */}
            </div>
          </IconContext.Provider>
          <h3 className="text-6xl text-center text-txtColor">Tic-Tac-Toe</h3>
          <div className="flex justify-center row-span-3">
            <table className="w-72 h-72">
              <tbody>
                {Array.from({ length: 3 }, (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Array.from({ length: 3 }, (_, colIndex) => {
                      const index = rowIndex * 3 + colIndex;
                      return (
                        <td
                          className="w-24 h-24 text-6xl border-grid border-4 bg-cells"
                          key={index}
                          onClick={() => {
                            if (winner !== "o" && winner !== "x")
                              handleClick(index);
                            else return;
                          }}
                        >
                          <div className="flex justify-center">
                            {mappingItemsToIcon(items)[index]}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col mx-auto w-72 mt-12 row-span-2">
            <div
              className={`flex flex-row justify-between h-12 box-border rounded-md border-x-2 border-t-2 border-grid mb-7 ${
                turn === "x"
                  ? "border-b-4 border-b-XColor rounded"
                  : "border-x-2 border-t-2 border-grid"
              } `}
            >
              <IconContext.Provider
                value={{ size: "1.8em", className: "text-txtColor" }}
              >
                <div className="h-10 w-10 flex justify-center items-center">
                  <FaXmark />
                </div>
              </IconContext.Provider>
              <div className="h-10 w-10 flex justify-center items-center">
                <span>__</span>
              </div>
            </div>
            <div
              className={`flex flex-row justify-between h-12 box-border rounded-md border-x-2 border-t-2 border-grid ${
                turn === "o"
                  ? "border-b-4 border-b-OColor rounded"
                  : "border-x-2 border-t-2 border-grid"
              }`}
            >
              <IconContext.Provider
                value={{ size: "1.8em", className: "text-txtColor" }}
              >
                <div className="h-10 w-10 flex justify-center items-center">
                  <FaO />
                </div>
              </IconContext.Provider>
              <div className="h-10 w-10 flex justify-center items-center">
                <span>__</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {winner && <h1>winner is {winner}</h1>}
      {isGameOver && <h1>It's a draw!</h1>}
      <div className="hidden '2xl':grid grid-cols-3 grid-rows-3 gap-3 w-72 h-72 rounded-md">
        {items.map((box, index) => {
          return (
            <div
              key={index}
              className="w-24 h-24 rounded-md"
              onClick={() => handleClick(index)}
            >
              <p className="text-8xl">{box}</p>
              {/* اینجا مقدار مربوط به خانه را نشان می‌دهید */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
