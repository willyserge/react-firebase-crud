/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect } from 'react'
import ContactForm from './contactForm'
import firebaseDb from '../firebase'
function Contacts() {

    const addOrEdit = (contactInfo) => { if (currentId === '')
    firebaseDb.child('contacts').push(
        contactInfo,
        err => {
            if (err)
                console.log(err)
            else
                setCurrentId('')
        })
else
    firebaseDb.child(`contacts/${currentId}`).set(
        contactInfo,
        err => {
            if (err)
                console.log(err)
            else
                setCurrentId('')
        })
    }

    const handleDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }

    const [contacts, setContacts] = useState({})
    const [currentId, setCurrentId] = useState('')
    useEffect(()=>{
        firebaseDb.child('contacts').on( 'value', snapshot =>{
            snapshot.val()
            if (snapshot.val() != null) {
                setContacts({
                    ...snapshot.val()
                })
            }
        })
    },[])
    return (
        <Fragment>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4 text-center">Contacts manager</h1>
                </div>
            </div>
            <div className='row'>
            <div className='col-md-4'>
                <ContactForm {...({addOrEdit,currentId,contacts})}/>
            </div>
            <div className='col-md-8'>
                <table className='table table-borderless table-stripped'>
                  <thead className='thead-light'>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>address</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                    <tbody>
                        {
                         Object.keys(contacts).map((id)=>(
                            <tr key={id}>
                                <td>{contacts[id].fullName}</td>
                                <td>{contacts[id].mobile}</td>
                                <td>{contacts[id].email}</td>
                                <td>{contacts[id].address}</td>
                                <td>
                                    <a className='btn text-primary' onClick={()=>{setCurrentId(id)}}>
                                     <i className='fas fa-pencil-alt'></i>
                                    </a>
                                    <a className='btn text-danger'>
                                     <i className='fas fa-trash-alt' onClick={()=>handleDelete(id)}></i>
                                    </a>
                                </td>
                            </tr>
                         ))
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </Fragment>
    )
}

export default Contacts;
