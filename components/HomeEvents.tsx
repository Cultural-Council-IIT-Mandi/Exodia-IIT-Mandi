import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import ArrowButton from "./Event_Button";
import Home_EventsSection from "./Home_EventsSection";
import { CarouselComponentPihu } from "./Event_CarouselPihu";

export function HomeEvents() {
  return (
    <div className="box12 h-[100vh] flex justify-center items-center">
      {/* <BackgroundGradientAnimation> */}
      <div className="z-[900] ">
        <div id="events" className=" z-[900]  flex flex-col justify-center items-center gap-4 mt-10">
          <Home_EventsSection />
          <br />
          {/* <Link href="/events">
              <ArrowButton text='more events' />
            </Link><br /><br /><br /><br /><br /> */}
          <div className="mb-0 mt-0">
            <Link href="/events" className='p-4 border-2 rounded-3xl bg-gold text-black text-[1rem]  animate-buttonshine'>
              More Events
            </Link>
          </div>
          <br /><br /><br /><br /><br />
        </div>
      </div>
      {/* </BackgroundGradientAnimation> */}
    </div>
  );
}