


// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


// function PLeft() {
//   return (
//     <div
//       className=" w-80 flex flex-col bg-sky-200 text-white gap-2 text-lg py-4 pl-4">
//       <div className="border-1 bg-blue-900  w-11/12 px-4 py-1 text-lg rounded-md">
//         {/* <p>All categories</p> */}
//         <Link
//           to="/"
//           className="w-fit p-2   text-white rounded-lg"
//         >
//           Home
//         </Link>
//       </div>
//       <div className="border-1 bg-blue-900  w-11/12 px-4 py-1 text-lg rounded-md">
//         <p>All categories</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Allegies</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Bath & Body</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Cough Cold & flu</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Digestive Health</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Drug</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Eye Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Ear Nose & Throat Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>First Aid </p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Foot Care</p>
//       </div>

//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Home Test Monitoring</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Incontinence</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Pain Relief & Management</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-mmd">
//         <p>Pediatric Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Personal Care</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Pet</p>
//       </div>
//       <div className="border-1 bg-blue-900 w-11/12 px-4 py-1 rounded-md">
//         <p>Presciption & Packaging</p>
//       </div>
//     </div>
//   );
// }

// export default PLeft;



import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Home",
  "All categories",
  "Allegies",
  "Bath & Body",
  "Cough Cold & flu",
  "Digestive Health",
  "Drug",
  "Eye Care",
  "Ear Nose & Throat Care",
  "First Aid",
  "Foot Care",
  "Home Test Monitoring",
  "Incontinence",
  "Pain Relief & Management",
  "Pediatric Care",
  "Personal Care",
  "Pet",
  "Presciption & Packaging"
];

function PLeft() {
  return (
    <div className="w-full overflow-y-scroll h-full bg-sky-200 text-white text-lg py-4 pl-4   ">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`border-1 bg-blue-900 w-[90%] px-4 py-1 rounded-md mb-2 ${
            category === "Home" ? "text-white" : ""
          }`}
        >
          {category === "Home" ? (
            <Link to="/" className="w-fit p-2 text-white rounded-lg">
              {category}
            </Link>
          ) : (
            <p>{category}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default PLeft;

