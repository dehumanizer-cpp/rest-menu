import React from 'react'

interface MenuProductProps {
  title: string;
  firstProductTitle: string;
  firstProductDesc: string;
  secondProductTitle: string;
  secondProductDesc: string;

}


export default function ProductCard(props:MenuProductProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-normal text-gray-800 mb-4">{props.title}</h2>
      <ul className="space-y-4">
          <li className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-extrabold tracking-widest font-crimson-text text-gray-800 ">{props.firstProductTitle}</h3>
              <p className="text-gray-600 font-roboto italic">{props.firstProductDesc}</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-extrabold tracking-widest font-crimson-text text-gray-800">{props.secondProductTitle}</h3>
              <p className="text-gray-600 font-roboto italic">{props.secondProductDesc}</p>
          </li>
      </ul>
    </section>
  )
}
 //   <div className="bg-gray-500/10 w-[20rem] h-[30rem] rounded-lg">
  //   <div className="p-5 grid gap-5">
  //     <h1>Breakfast</h1>
  //     <div className=" w-full h-40 bg-gray-200 flex justify-center items-center rounded-xl ">EGGS</div>
  //     <div>
  //       <h1 className="font-bold text-2xl opacity-70">Eggs Benedict</h1>
  //       <p className="font-serif opacity-60 my-2">Gay one the what walk then she. Demesne mention pr</p>
  //     </div>
  //     <h1 className="font-bold text-5xl text-center opacity-70">₺8.99</h1>
  //   </div>
  // </div>