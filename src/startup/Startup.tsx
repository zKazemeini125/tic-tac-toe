import { IoCloseSharp } from "react-icons/io5";
import { useRef, useState } from "react";

interface IPlayers {
  id: number;
  name: string;
}
interface Props {
  onSubmitSetting: (players: IPlayers[]) => void;
}

function Startup({ onSubmitSetting }: Props) {
  const [xName, setXName] = useState("");
  const [oName, setOName] = useState("");

  const btnCloseRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (xName.trim() && oName.trim()) {
      const players: IPlayers[] = [
        { id: 1, name: xName.toUpperCase() },
        { id: 2, name: oName.toUpperCase() },
      ];
      onSubmitSetting(players);
    }
  };

  return (
    <div className="min-w-dvh min-h-dvh bg-modalBackgroundColor flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
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
            value={xName}
            onChange={(e) => setXName(e.target.value)}
            className="bg-modalBoxReceiveInformation border border-modalTextColor text-xl text-modalTextColor p-2 rounded-lg focus:border focus:border-XColor focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-2xl text-modalTextColor mb-1">
            'O' player name:
          </label>
          <input
            type="text"
            name="playerTwoName"
            autoComplete="off"
            value={oName}
            onChange={(e) => setOName(e.target.value)}
            className="bg-modalBoxReceiveInformation border border-modalTextColor text-xl text-modalTextColor p-2 rounded-lg focus:border focus:border-OColor focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={xName.trim() === "" || oName.trim() === ""}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              btnCloseRef.current?.focus();
            }
          }}
          className="bg-txtColorSharp text-xl text-black p-2 rounded-lg disabled:bg-modalBoxReceiveInformation"
        >
          Play
        </button>
      </form>
    </div>
  );
}

export default Startup;
