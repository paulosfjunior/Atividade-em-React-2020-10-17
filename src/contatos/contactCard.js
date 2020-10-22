import React from 'react'

export default function ContactCard (props) { 
  let { id, name, email, company, office } = props.data;

  return (
    <div className="mb-2 flex flex-col p-4 bg-white items-start text-gray-600 rounded-lg w-6/12">
      <span className="block text-2xl font-semibold">{id}</span>
      <span className="block text-2xl font-semibold">{name}</span>
      <span className="block text-base text-gray-500">{email}</span>
      <span className="block text-base text-gray-500">{company}</span>
      <span className="block text-base text-gray-500">{office}</span>
      <button onClick={() => props.update(props.data)}>Editar</button>
      <button onClick={() => props.delete(props.data)}>Deletar</button>
    </div>
  )
}
