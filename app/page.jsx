import Icon from "./assets/icon.jpeg";
import Icon_Full from "./assets/icon_full.jpeg";
import Mac_Icon from "./assets/mac.png";
import Linux_Icon from "./assets/linux.png";
import Windows_Icon from "./assets/windows.png";
import Image from "next/image";


export default function Home() {

  return (
    <main>
      <section className="Home mb-20 px-10 flex flex-col gap-10 items-center justify-center align-middle my-20 lg:flex-row lg:space-x-24 lg:px-48 lg:my-32">
        <div className="LeftSide">
          <Image
            className="ICON w-48 rounded-xl lg:w-full"
            src={Icon}
            loading="lazy"
          />
        </div>
        <div className="RightSide text-center">
          <h1 className="text-3xl font-extrabold tracking-widest mb-5 md:text-5xl md:mb-10">
            Lavender POS
          </h1>
          <p className="text-center text-lg mb-5 md:text-start md:text-xl md:mb-16 md:mx-10">
            All In One Point Of Sale System For Every Business Whether Large Or Small Even For The Non-Profit Usage.
          </p>
          <div className="buttonlist space-x-10 flex mx-10 justify-center md:mx-20">
            <button className="p-4 font-semibold bg-slate-300 rounded-xl hover:font-extrabold hover:bg-slate-200 hover:italic">
              Learn More
            </button>
            <button className="p-4 font-semibold bg-purple-400 rounded-xl hover:font-extrabold hover:bg-purple-200 hover:italic">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <hr className="mb-20" />

      <section className="Products mb-20 flex flex-col items-center">

        <div className="">
          <Image
            className="ICON_FULL rounded-lg lg:max-w-4xl"
            src={Icon_Full}
            loading="lazy"
          />
        </div>
        <h1 className="text-4xl mt-10 font-black tracking-widest mb-7">Download Software</h1>
        <div className="">
          <ul className="flex justify-evenly space-x-11">
            <li>
              
              <Image
                loading="lazy"
                className="Windows_Icon w-20"
                src={Windows_Icon}
              />
            </li>
            <li>
            <Image
                loading="lazy"
                className="Linux_Icon w-20"
                src={Linux_Icon}
              />
            </li>
            <li>
              <Image
                loading="lazy"
                className="Mac_Icon w-20"
                src={Mac_Icon}
              />
            </li>
          </ul>
        </div>
      </section>

      <hr className="mb-20" />

      <section className="Pricing mb-20">
        <h1 className="text-4xl font-black tracking-widest mb-7">Pricing</h1>
        <div className=" grid-auto-fill">
          <div className=" backdrop-blur-lg bg-purple-100 px-5 py-5 rounded-xl">
            <h1 className="text-center text-2xl tracking-widest font-semibold">Personal</h1>
            <p className="text-sm font-extralight text-center">Free</p>

            <ul>
              <li>
                All In One Role
              </li>
            </ul>
          </div>
          <div className=" backdrop-blur-lg bg-purple-100 px-5 py-5 rounded-xl">
            <h1 className="text-center text-2xl tracking-widest font-semibold">Adventure</h1>
            <p className="text-sm font-extralight text-center">Free Trial</p>

          </div>
          <div className=" backdrop-blur-lg bg-purple-100 px-5 py-5 rounded-xl">
            <h1 className="text-center text-2xl tracking-widest font-semibold">Indie</h1>
            <p className="text-sm font-extralight text-center">$10 per month</p>

          </div>
          <div className=" backdrop-blur-lg bg-purple-100 px-5 py-5 rounded-xl">
            <h1 className="text-center text-2xl tracking-widest font-semibold">Business</h1>
            <p className="text-sm font-extralight text-center">$100 per month</p>

          </div>
          <div className="backdrop-blur-lg bg-purple-100 px-5 py-5 rounded-xl">
            <h1 className="text-center text-2xl tracking-widest font-semibold">Enterprise</h1>
            <p className="text-sm font-extralight text-center">Contact</p>

          </div>
        </div>
      </section>

      <hr className="mb-20" />

      <section className="Reports mb-20">
        <h1 className="text-4xl font-black tracking-widest mb-7">Reports</h1>
        <section className="card bg-purple-200 p-5 rounded-xl">
          <input className="mb-5 py-2 px-5  w-full rounded-xl " placeholder="title" type="text" name="title" id="title" />
          <textarea className="py-3 px-5  w-full rounded-xl h-64" placeholder="detail" type="textarea" name="detail" id="detail" />
          <input className="mt-3 bg-white py-3 px-9 rounded-xl hover:bg-green-300 hover:font-black hover:tracking-widest" type="submit" value="Send" />
        </section>
      </section>


      <hr className="mb-20" />

    </main>
  );
}
