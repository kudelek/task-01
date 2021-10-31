import React, { Component } from 'react';
import { setContactData, deleteContactData } from '../libs/contactAPI';
import { Text, Input, TextArea } from '../libs/language';
import './ClassForm.css';

export default class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: { name: "", email: "", content: "" },
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        setContactData(this.state.contactData, 1);
    }

    onChange(e) {
        this.setState({ contactData: { ...this.state.contactData, [e.target.name]: e.target.value } });
    }

    onDelete() {
        deleteContactData(1);
    }

    render() {
        return (this.props.isActive ? (
            <div className="classForm">
                <form onSubmit={this.onSubmit}>
                    <Input id="contactName" name="name" tid="contactName" onChange={this.onChange} /><br />
                    <Input id="contactEmail" name="email" tid="contactEmail" onChange={this.onChange} /><br />
                    <TextArea type="text" id="contactContent" name="content" tid="contactContent" onChange={this.onChange} /><br />
                    <button id="contactButton" onClick={onsubmit}><Text tid="submit" /></button>
                </form>
                <button id="deleteContactData" onClick={this.onDelete}><Text tid="deleteContactData" /></button>
            </div>) : null
        )
    }
}
