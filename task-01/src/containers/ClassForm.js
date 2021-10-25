import React, { Component } from 'react';
import { deleteAllContactData, submitContact } from '../libs/dataFlow';
import { Text } from '../libs/language';
import './ClassForm.css';

export default class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: { name: "", email: "", content: "" },
            isLoading: true
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.contactData);
        submitContact(e, this.state.contactData);
    }

    onChange(e) {
        console.log(e);
        this.setState({contactData: {...this.state.contactData, [e.target.name]: e.target.value}});
        const call = () => console.log("state", this.state);
        call();
    }

    onDelete() {
        deleteAllContactData();
    }

    render() {
        return (
            <div id={this.props.id} className={this.props.className}>
                <div className="classForm">
                    <form onSubmit={this.onSubmit}>
                        <input id="contactName" name="name" placeholder="Your name" onChange={this.onChange}/><br/>
                        <input id="contactEmail" name="email" placeholder="Your e-mail address" onChange={this.onChange}/><br/>
                        <textarea type="text" id="contactContent" name="content" placeholder="What's on your mind?" onChange={this.onChange}/><br/>
                        <button id="contactButton" onClick={onsubmit}><Text tid="submit" /></button>
                    </form>
                    <button id="deleteContactData" onClick={this.onDelete}>Delete contact data</button>
                </div>
            </div>
        )
    }
}
