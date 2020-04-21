import React, { Fragment, useState, useEffect } from 'react'
import ContactForm from './contactForm'
import firebaseDb from '../firebase'
function Contacts() {

    const addOrEdit = (contactInfo) => {
        firebaseDb.child('contacts').push(
            contactInfo, error=>{
                if(error)
                  console.log(error)
            }
        )
    }

    const [contacts, setContacts] = useState({})

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
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Contacts manager</h1>
                </div>
            </div>
            <div className='row'>
            <div className='col-md-5'>
                <ContactForm addOrEdit={addOrEdit}/>
            </div>
            <div className='col-md-7'>
                <table className='table table-borderless table-stripped'>
                  <thead className='thead-light'>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>address</th>
                    </tr>
                  </thead>
                    <tbody>
                        {
                         Object.keys(contacts).map((id)=>(
                            <tr>
                                <td>{contacts[id].fullName}</td>
                                <td>{contacts[id].mobile}</td>
                                <td>{contacts[id].email}</td>
                                <td>{contacts[id].address}</td>
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
