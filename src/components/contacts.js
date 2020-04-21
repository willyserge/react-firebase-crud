import React, { Fragment } from 'react'
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
                <div>Contact List</div>
            </div>
            </div>
        </Fragment>
    )
}

export default Contacts;
