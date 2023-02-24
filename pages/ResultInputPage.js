import { signOut, useSession } from "next-auth/react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import ElectionPage from "../Components/ElectionPage";
import { useState } from "react";

export default function Home({ posts }) {
  const [user, Setuser] = useState("");
  const [phrase, Checkphrase] = useState("");
  return (
    <>
      {phrase == "dragonfire" ? (
        ""
      ) : (
        <div className="ml-5 mt-20 flex flex-col">
          <input
            className="border border-black focus:ring-black focus:border-2 mt-10 mb-10 w-96 p-2 rounded-full h-12 bg-gray-100 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl"
            placeholder="username"
            onChange={(e) => {
              Setuser(e.target.value);
            }}
          />
          <input
            className="border border-black focus:ring-black focus:border-2 mt-2 mb-5 w-96 p-2 rounded-full h-12 bg-gray-100 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl"
            placeholder="password"
            onChange={(e) => {
              Checkphrase(e.target.value);
            }}
          />
        </div>
      )}

      {/*//////////////After correct input phrase*/}

      {phrase == "dragonfire" ? (
        <div className="bg-gray-50 overflow-y-scroll scrollbar-hide ml-1 mr-1">
          <Head>
            <title>ElectionPage</title>
          </Head>
          {/*Header*/}
          <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
              {/*Left */}
              <div className="relative hidden lg:inline-grid w-24 cursor-pointer text-3xl mt-5">
                Election
              </div>
              <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer mt-5 mr-5">
                Election
              </div>

              {/*Middle */}
              <div className="max-w-xs">
                <div className="relative mt-1 p-3 rounded-md">
                  <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <button
                    className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                    type="text"
                  >
                    Refresh Storage
                  </button>
                </div>
              </div>

              {/*Right */}
              <div className="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn" />
                <Bars4Icon className="h-6 md:hidden cursor-pointer" />

                <div className="relative navBtn animate-pulse hover:animate-none">
                  <PaperAirplaneIcon className="navBtn -rotate-45" />
                  <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">
                    3
                  </div>
                </div>
                <PlusCircleIcon className="navBtn" />
                <UserGroupIcon className="navBtn" />
                <HeartIcon className="navBtn" />

                <img
                  src="profile.jpg"
                  alt="profile pic"
                  className="h-10 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/*ElectionPage*/}
          <ElectionPage />
        </div>
      ) : (
        <div className="m-5 text-blue-700 border p-3 bg-gray-100 rounded-full w-96 h-16">
          Input correct Username and Password to Access Control Page
        </div>
      )}
    </>
  );
}
