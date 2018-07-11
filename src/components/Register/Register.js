import React from 'react'

class Register extends React.Component {
    constructor(props){
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
            
        }
    }

    render(){
        return (
            <article className=" pa3 mt5 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        </div>
    
                        </fieldset>
                        <div className="">
                        </div>
    
                    </div>
                </main>
            </article>
        );
    }

}

export default Register;