import { IoCloseSharp } from "react-icons/io5";
import Styles from "./Startup.module.css";

function Startup() {
  return (
    <>
      <div className="min-w-dvh min-h-dvh bg-modalColor flex justify-center items-center">
        <div className={Styles.modalFrame}>
          <div className={Styles.modalFrame}>
            <IoCloseSharp size={"1.2em"} color="white" />
          </div>
          <div className="row-full">main title</div>
          <div className="row-full">next button</div>
        </div>
      </div>
    </>
  );
}

export default Startup;
