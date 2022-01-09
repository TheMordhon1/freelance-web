export default function ArrowGroup({ next, previous }) {
  return (
    <div className=" flex gap-2 justify-center">
      <div
        onClick={() => previous()}
        className=" border px-5 py-2 border-blue rounded-xl text-center cursor-pointer bg-pink-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 md:w-4 text-blue w-full"
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
      <div
        onClick={() => next()}
        className=" border px-5 py-2 border-blue rounded-xl text-center cursor-pointer bg-pink-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 md:w-4 text-blue w-full"
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
  );
}
