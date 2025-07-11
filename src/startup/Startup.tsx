import { IoCloseSharp } from "react-icons/io5";
import Styles from "./Startup.module.css";
import { useRef, useState } from "react";

//! interface ISetupSetting {
//!   playerName: string;
//! }
function Startup() {
  //!const [playerList, setPlayerList] =useState<ISetupSetting>();
  const [p2Name, setP2Name] = useState("");
  const [p1Name, setP1Name] = useState("");
  const btnCloseRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="min-w-dvh min-h-dvh bg-modalBackgroundColor flex justify-center items-center">
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submited!");
            console.log(e);
          }}
          className="flex flex-col box-border w-5/6 bg-modalBoxReceiveInformation gap-5 p-3"
        >
          <button type="button" ref={btnCloseRef} className="w-fit">
            <IoCloseSharp size={"1.4em"} color="white" />
          </button>

          <div className="flex flex-col">
            <label className="text-2xl text-modalTextColor mb-1">
              'X' player name:
            </label>
            <input
              type="text"
              name="playerOneName"
              autoFocus
              autoComplete="off"
              value={p1Name}
              onChange={(e) => {
                setP1Name(e.target.value);
              }}
              className="bg-modalBoxReceiveInformation border border-modalTextColor text-xl text-modalTextColor p-2 rounded-lg  focus:border focus:border-XColor focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-2xl text-modalTextColor mb-1">
              'O' player name:
            </label>
            <input
              type="text"
              name="playerOneName"
              autoComplete="off"
              value={p2Name}
              onChange={(e) => setP2Name(e.target.value)}
              className="bg-modalBoxReceiveInformation border border-modalTextColor text-xl text-modalTextColor p-2 rounded-lg  focus:border focus:border-OColor focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={p1Name == "" || p2Name == ""}
            onClick={() => {
              console.log(p1Name);
              console.log(p2Name);
            }}
            onKeyDown={(e) => {
              e.preventDefault();
              if(e.key==="Tab") btnCloseRef.current?.focus();
            }}
            className="bg-txtColorSharp text-xl text-black p-2 rounded-lg disabled:bg-modalBoxReceiveInformation"
          >
            play
          </button>
        </form>
      </div>
    </>
  );
}

export default Startup;
