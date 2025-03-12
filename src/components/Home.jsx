import Leftbanner from "./Leftbanner";
import Rightbanner from "./Rightbanner";
export default function Home() {
  return (
    <div>
      <div className="container flex flex-col md:flex-row justify-around text-black">
        <Leftbanner />
        <Rightbanner />
      </div>
    </div>
  );
}