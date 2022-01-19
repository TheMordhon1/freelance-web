export default function ArrowGroup({ next, previous }) {
  return (
    <div className=" flex gap-2 justify-center">
      <div className="group">
        <div
          onClick={() => previous()}
          className=" border px-3 py-2 border-blue rounded-2xl  group-hover:bg-blue transition-all text-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 md:w-4 text-blue w-full group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      </div>
      <div className="group">
        <div
          onClick={() => next()}
          className=" border px-3 py-2 border-blue group-hover:bg-blue transition-all rounded-2xl text-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 md:w-4 text-blue group-hover:text-white w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
