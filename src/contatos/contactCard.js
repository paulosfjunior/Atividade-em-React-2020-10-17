import React from 'react'

export default function ContactCard (props) { 
  let { name, email, company, office } = props.data;

  return (
    <div className="mt-2 mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4 text-left">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-700 text-base">{company}</p>
        <p className="text-gray-700 text-base">{office}</p>
      </div>
      <div className="md:flex md:items-center mb-2">
        <div className="md:w-1/2 mx-2">
          <button 
            className="w-full shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={() => props.update(props.data)}>Editar</button>
        </div>
        <div className="md:w-1/2 mx-2">
          <button
            className="w-full shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={() => props.delete(props.data)}>Deletar</button>
        </div>
      </div>
    </div>
  )
}
