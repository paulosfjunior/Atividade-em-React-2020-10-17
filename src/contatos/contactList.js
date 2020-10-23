import React, { useState } from 'react';
import { getContacts } from './data';
import ContactCard from './contactCard';
import ContactForm from './contactForm';

export default function ContactList () {
  const dataDefault = { id: 0, name: '', email: '', company: '', office: '' };
  let [data, setData] = useState(dataDefault);
  let [lista, setList] = useState(getContacts());

  let updateLista = (item) => lista.map((i) => i.id === item.id ? item : i);

  let updateItem = (item) => setData(item);
  
  let deleteItem = (item) => {
    setData(dataDefault);
    setList(lista.filter((i) => i.id !== item.id));
  };

  let addItem = (item, id) => id === 0 ? setList([...lista, item]) : setList(updateLista(item));

  let card = lista.map((contato) => {
    return (
      <ContactCard key={contato.id} data={contato} update={updateItem} delete={deleteItem} />
    )
  });

  return (
    <div className="mx-auto">
      <ContactForm save={addItem} data={data} />
      <div> {card} </div>
    </div>
  );
}
