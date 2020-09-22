import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Subscribe from './styles'
import arrow from '@asset/arrow.svg'


//Creating sign-up form

const Form = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  const onEnter = event => 
  event.key === 'Enter' && submit()

  return (
    <React.Fragment>
      <div
        style={{
          background: "#efefef",
          borderRadius: 2,
          padding: "5px 0px",
          display: "flex"
        }}
      >
      {/*Message to be played if succesful*/}
        {status === "success" ? (
          <Subscribe.Success>You are now subscribed</Subscribe.Success>
        ) : (
        <React.Fragment>
          <Subscribe.Email
            ref={ node => (email = node) }
            type="email"
            placeholder="Your email"
            onKeyPress={ onEnter }
          />
          <Subscribe.Image src={ arrow } onClick={ submit }/>
          <br/>
        </React.Fragment>
      )}
      </div>
      {/*Message to be played upon an error*/}
      {status === "error" && (
        <Subscribe.Success>Please use another email</Subscribe.Success>
      )}
    </React.Fragment>
  );
};

//Implementing the sign-up
export const SignUp = (props) => {
    //Link to mailchimp
    const url = "https://schoolofcontemplativelife.us10.list-manage.com/subscribe/post?u=20e256516535f06a8180af3e6&amp;id=1e805a9ae7"

    return(
      <Subscribe>
        <Subscribe.Body>
            <Subscribe.Text>Are you interested in knowing when we release new content?</Subscribe.Text>
            <MailchimpSubscribe
             url = { url }
             render={({ subscribe, status, message }) => (
                <Form
                status={ status }
                message={message}
                onValidated={ formData => subscribe(formData) }/>
              )}
            />
          </Subscribe.Body>
      </Subscribe>
    );
}
