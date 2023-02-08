import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const MainPage = () => {
    const [handlemenubar,setHandlemenubar] = useState(false)
  return (
    <div className="w-[100vw] h-[85vh]">
      <div className="flex p-2 relative">
        <div className="flex-1 px-2">
          {/* upper nav  */}
          <div className="flex justify-between items-center">
            <ul className="flex justify-start items-center text-white border-b-2 pb-2 border-slate-800 w-full">
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded ">
                All Section
              </li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">Physics</li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">Chemistry</li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">Math</li>
            </ul>
            <div className="w-[70px] text-end desktop:hidden laptop:hidden tablet:hidden flex">
              <span
                onClick={() => setHandlemenubar(!handlemenubar)}
                className="btn text-xl bg-transparent text-black border-0 hover:bg-inherit "
              >
                <BiMenu className="inline-block "></BiMenu>
              </span>
            </div>
          </div>

          {/* question  */}
          <div className="mt-2 rounded-md text-black border border-slate-400 shadow-md overflow-y-auto ">
            <div className="bg-sky-400 rounded-t-md p-2  flex justify-between items-center text-white">
              <div className=" w-1/2">Q 1</div>
              <div className="w-1/2 text-end">View in</div>
            </div>
            <div className="flex justify-between items-center border-b border-slate-600 text-blue-600">
              <div className="border-r border-slate-600 w-1/2 p-2">
                Question instruction
              </div>
              <div className=" w-1/2 p-2">Question</div>
            </div>
            <div className="flex justify-between items-start h-[63vh] ">
              <div className="border-r border-slate-600 w-1/2 p-2 h-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore asperiores, rem maxime saepe harum, blanditiis natus
                consequatur quas fugiat distinctio provident reprehenderit
                facere adipisci quasi sed! Nam harum explicabo quisquam! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Inventore
                asperiores, rem maxime saepe harum, blanditiis natus consequatur
                quas fugiat distinctio provident reprehenderit Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Inventore asperiores, rem
                maxime saepe harum, blanditiis natus consequatur quas fugiat
                distinctio provident reprehenderit
              </div>
              <div className=" w-1/2 p-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum dolor repellendus harum nihil nam, aut illum
                  provident doloribus at id ullam perspiciatis laborum fuga
                  consequuntur.
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum dolor repellendus harum nihil nam, aut illum
                  provident doloribus at id ullam perspiciatis laborum fuga
                  consequuntur.
                </p>
                <img
                  className="w-full rounded-md"
                  src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* bottom nav  */}
          <div>
            <ul className="flex justify-start items-center text-white mt-3 capitalize ">
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded ">
                clear response
              </li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">review</li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">dump</li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">previous</li>
              <li className="px-4 pt-1 mr-2 bg-sky-500 rounded">Next</li>
            </ul>
          </div>
        </div>
        <div className="desktop:w-[300px] w-[250px] desktop:flex laptop:flex tablet:flex flex-col hidden text-black">
          {/* profile  */}
          <div className="flex justify-start items-start h-[130px] w-full rounded-md profilecard overflow-hidden mt-11 shadow-md border capitalize">
            <img
              className="w-1/3 h-full"
              src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="flex flex-col p-3 w-full justify-center items-start ">
              <div className="mt-3">
                <h4>Time left</h4>
                <h4>02:46:09</h4>
              </div>
              <h3 className="mt-3">Md Hasan</h3>
            </div>
          </div>

          {/* question pallet */}
          <div className="border border-slate-400 mt-3 h-[280px] shadow rounded-md capitalize">
            <h3 className="bg-sky-600 text-white px-2 py-1 rounded-t-md">
              question pallet
            </h3>
            <div className="p-2 grid grid-cols-5 gap-2">
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                2
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                3
              </button>
              <button
                className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                4
              </button>
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                5
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                6
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                7
              </button>
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                8
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                9
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                10
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                11
              </button>
            </div>
          </div>
          {/* Legent pallet */}
          <div className="border border-slate-400 mt-3 shadow rounded-md">
            <h3 className="bg-sky-600 text-white px-2 py-1 rounded-t-md capitalize">
              legend (click to view)
            </h3>
            <div className="p-2 grid grid-cols-2 gap-2 text-sm">
              <div
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                4 answer
              </div>
              <div
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                2 no answer
              </div>
              <div
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 review+ans
              </div>
              <div
                className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 review-ans
              </div>
              <div
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 dump
              </div>
              <div
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 no-visit
              </div>
              <div
                className={`col-span-2 bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                10 All question
              </div>
            </div>
            <div className="border-t-2 pb-2 border-slate-400">
              <div className="p-2 grid grid-cols-2 gap-2 text-sm capitalize">
                <button
                  className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  profile
                </button>
                <button
                  className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  instruction
                </button>
                <button
                  className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  Question
                </button>
                <button
                  className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile nav  */}
        <div
          className={`w-[250px]  desktop:hidden laptop:hidden tablet:hidden flex-col flex absolute top-12 ease-in-out duration-300  ${
            handlemenubar ? "right-0 block" : "-right-[250px] hidden"
          } bg-slate-300 px-1 text-black `}
        >
          {/* profile  */}
          <div className="flex justify-start items-start h-[130px] w-full rounded-md profilecard overflow-hidden mt-11 shadow-md border capitalize">
            <img
              className="w-1/3 h-full"
              src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="flex flex-col p-3 w-full justify-center items-start ">
              <div className="mt-3">
                <h4>Time left</h4>
                <h4>02:46:09</h4>
              </div>
              <h3 className="mt-3">Md Hasan</h3>
            </div>
          </div>

          {/* question pallet */}
          <div className="border border-slate-400 mt-3 h-[230px] shadow rounded-md capitalize">
            <h3 className="bg-sky-600 text-white px-2 py-1 rounded-t-md">
              question pallet
            </h3>
            <div className="p-2 grid grid-cols-5 gap-2">
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                2
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                3
              </button>
              <button
                className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                4
              </button>
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                5
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                6
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                7
              </button>
              <button
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                8
              </button>
              <button
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                9
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                10
              </button>
              <button
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                11
              </button>
            </div>
          </div>
          {/* Legent pallet */}
          <div className="border border-slate-400 mt-3 shadow rounded-md">
            <h3 className="bg-sky-600 text-white px-2 py-1 rounded-t-md capitalize">
              legend (click to view)
            </h3>
            <div className="p-2 grid grid-cols-2 gap-2 text-sm">
              <div
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                4 answer
              </div>
              <div
                className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                2 no answer
              </div>
              <div
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 review+ans
              </div>
              <div
                className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 review-ans
              </div>
              <div
                className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 dump
              </div>
              <div
                className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                1 no-visit
              </div>
              <div
                className={`col-span-2 bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
              >
                10 All question
              </div>
            </div>
            <div className="border-t-2 pb-2 border-slate-400">
              <div className="p-2 grid grid-cols-2 gap-2 text-sm capitalize">
                <button
                  className={`bg-purple-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  profile
                </button>
                <button
                  className={`bg-sky-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  instruction
                </button>
                <button
                  className={`bg-amber-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  Question
                </button>
                <button
                  className={`bg-blue-600 rounded-sm flex justify-center items-center text-white pt-1`}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
