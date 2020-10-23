import React, { useState, useEffect } from 'react'

function getId () {
  return (5999 - Math.round(Math.random() * 392));
}

function IsEmail (email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateContact (dados) {
  let msg = '';

  msg += dados.name === '' ? '\nPreencha o campo "Nome".' : '';
  msg += dados.company === '' ? '\nPreencha o campo "Empresa".' : '';
  msg += dados.email !== '' ? ( IsEmail(dados.email) ? '' : '\n"Email" inválido.') : '';

  if (msg) {
    alert(msg);
    return false;
  }
  return true;
}

export default function ContactForm (props) {
  const [data, setData] = useState(props.data);
  const atualizar = data.id > 0

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const changeField = (field) => {
    const change = (evt) => setData({ ...data, [field]: evt.target.value });

    return change;
  }

  const hangleSubmit = (evt) => {
    evt.preventDefault();

    if (validateContact(data)) {
      props.save({ ...data, id: (atualizar ? data.id : getId()) }, atualizar ? data.id : 0);

      setData({ id: 0, name: '', email: '', company: '', office: '' })
    } else {
      console.log('Preencha os dados obrigatorios');
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <form onSubmit={hangleSubmit} className="bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Nome
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              type="text"
              maxLength={50}
              value={data.name}
              onChange={changeField('name')} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              type="text"
              value={data.email}
              onChange={changeField('email')} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Empresa
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              type="text"
              maxLength={50}
              value={data.company}
              onChange={changeField('company')} />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Cargo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              type="text"
              maxLength={50}
              value={data.office}
              onChange={changeField('office')} />
          </div>
        </div>

        <div className="mx-auto">
          <input
            className="w-full shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            value={atualizar ? 'Atualizar' : 'Adicionar'} />
        </div>
      </form>
    </div>
  );
}
