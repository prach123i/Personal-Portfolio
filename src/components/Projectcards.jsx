/* eslint-disable react/prop-types */

export default function Projectcards(props) {
  return (
    <div className="card bg-sky-950 shadow-md shadow-current hover:text-white p-5 rounded-md mb-5 mt-10 h-auto py-10 group">
      <div className="min-h-72"> {/* Removed fixed height */}
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl px-7 text-red-600 hover:scale-110 duration-100 cursor-pointer">{props.icon}</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <h1 className="text-2xl mt-5 text-left mx-6 text-red-600 font-bold">{props.title}</h1>
            <p className="text-3xl text-center mt-5 hover:cursor-pointer">{props.giticon}</p>
          </div>
          <p className="mx-6 text-left text-white text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
