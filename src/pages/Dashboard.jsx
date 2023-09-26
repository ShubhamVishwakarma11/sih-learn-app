import React from "react";
import RatingGraph from "../assets/rating-graph.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  return (
    <div className="flex w-full h-[90vh]">
      <div className="flex flex-col gap-12 p-12 w-[30%] bg-slate-900">
        <span className="font-semibold text-4xl">Legal Tutor</span>
        <div className="flex flex-col gap-4 justify-center items-center">
          <button className="border rounded-md border-indigo-500 bg-slate-900 transition-colors duration-200 hover:bg-indigo-900 w-full">
            Dashboard
          </button>
          <button
            onClick={() => (window.location.href = "http://localhost:5000/")}
            className="border rounded-md border-indigo-500 bg-slate-900 transition-colors duration-200 hover:bg-indigo-900 w-full"
          >
            Modules
          </button>
          <button
            onClick={() => (window.location.href = "/quiz")}
            className="border rounded-md border-indigo-500 bg-slate-900 transition-colors duration-200 hover:bg-indigo-900 w-full"
          >
            Quiz
          </button>
          <button className="border rounded-md border-indigo-500 bg-slate-900 transition-colors duration-200 hover:bg-indigo-900 w-full">
            Leaderboard
          </button>
        </div>
      </div>
      <div className=" w-[70%] bg-slate-800 flex flex-col">
        <div className="w-full h-auto flex justify-start items-center p-6 gap-12 bg-slate-700">
          <div className="w-[8rem] h-[8rem] bg-slate-400 rounded-full ml-12 border-indigo-600 text-6xl flex justify-center items-center">
            👨‍🎓
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="font-semibold text-xl"> Shubham Vishwakarma</div>
            <div className="font-medium text-lg">Undergrad</div>
          </div>
        </div>
        <div className="flex flex-col p-12 gap-12  overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-2xl">Progress Chart</span>
            <div className="flex">
              <div className="flex w-[25%] items-center justify-center">
                <CircularProgressbar value={66} text={`${66}%`} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-2xl">Rating Graph</span>
            <div className="flex items-center justify-center">
              <div className="pr-12 w-[90%] pt-12 bg-white">
                <img className="" src={RatingGraph} alt="rating-graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
