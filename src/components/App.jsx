import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleSubmit = (contact) => {
    const isExist = this.state.contacts.find(item => item.name === contact.name)
    if (isExist) {
      alert('This name already in contacts')
      return
    }
    this.setState(prevState => ({contacts: [...prevState.contacts, contact]}))
  }

  deleteContact = (id => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  })
  
  handleFilterChange = (event) => {
    this.setState({filter:event.target.value})
  }
  
  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  render() {
    const contacts = this.getFilteredContacts();
    return (
    <>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleInputChange={this.handleFilterChange} />
        <ContactsList contacs={contacts} handleDelete={this.deleteContact}/>
    </>
  );}
};
