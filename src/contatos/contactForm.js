import React, { useState, useEffect } from 'react'

function getId () {
  return (5999 - Math.round(Math.random() * 392));
}

// function IsEmail (email) {
//   var exclude = `/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/`;
//   var check = `/@[w-]+./`;
//   var checkend = `/.[a-zA-Z]{2,3}$/`;

//   if (email.search(exclude) !== -1 || email.search(check) === -1 || email.search(checkend) === -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

function validateContact (dados) {
  let msg = '';

  msg += dados.name === '' ? '\nPreencha o campo "Nome".' : '';
  msg += dados.company === '' ? '\nPreencha o campo "Empresa".' : '';
  // msg += dados.email !== '' && IsEmail(dados.email) ? '' : '\n"Email" inválido.';

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
    <form onSubmit={hangleSubmit} className="p-2 flex flex-col">
      <div className="flex flex-row items-stretch mb-2 justify-between">
        <label className="text-lg">Nome</label>
        <input type="text" className="p-2 rounded text-gray-600 text-lg"
          maxLength={35}
          value={data.name}
          onChange={changeField('name')} />
      </div>

      <div className="flex flex-row mb-2 items-stretch justify-between">
        <label className="text-lg">E-mail</label>
        <input type="text" className="p-2 rounded text-gray-600 text-lg "
          maxLength={50}
          value={data.email}
          onChange={changeField('email')} />
      </div>

      <div className="flex flex-row mb-2 items-stretch justify-between">
        <label className="text-lg">Empresa</label>
        <input type="text" className="p-2 rounded text-gray-600 text-lg "
          maxLength={50}
          value={data.company}
          onChange={changeField('company')} />
      </div>

      <div className="flex flex-row mb-2 items-stretch justify-between">
        <label className="text-lg">Cargo</label>
        <input type="text" className="p-2 rounded text-gray-600 text-lg "
          maxLength={50}
          value={data.office}
          onChange={changeField('office')} />
      </div>

      <div>
        <input type="submit" value="Adicionar"></input>
      </div>
    </form>
  )
}
