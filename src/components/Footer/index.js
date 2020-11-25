import Container from "./Container";
import Footer from "./styles";
import Instagram from "@icon/instagram.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Medium from "@icon/medium.png";
import Podcasts from "@icon/podcasts.png";
import React from "react";
import Spotify from "@icon/spotify.jpg";
import Text from "@component/Text";
import Twitter from "@icon/twitter.png";

const mailchimp_endpoint =
  "https://schoolofcontemplativelife.us10.list-manage.com/subscribe/post?u=20e256516535f06a8180af3e6&amp;id=1e805a9ae7";

const FooterSubscribe = ({ status, onValidated }) => {
  let email;

  // submit to Mailchimp

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({ EMAIL: email.value });

  // when the user presses the enter key

  const onEnter = (event) => event.key === "Enter" && submit();

  return (
    <React.Fragment>
      {status === "success" ? (
        <Footer.Message>Thank you</Footer.Message>
      ) : (
        <div style={{ display: "flex" }}>
          <Footer.Input
            placeholder="Enter your email"
            ref={(node) => (email = node)}
            type="email"
            onKeyPress={onEnter}
          />
        </div>
      )}
    </React.Fragment>
  );
};

const Foot = (props) => (
  <Container>
    <Footer>
      <Footer.Contact>
        <Footer.Heading>Contact</Footer.Heading>
        <p>
          <Text.Italic>Phone</Text.Italic> 07952 917995
        </p>
        <p>
          <Text.Italic>Email</Text.Italic> info@schoolofcontemplativelife.com
        </p>
        <p>
          <Text.Italic>Social</Text.Italic> @schoolofclife
        </p>
      </Footer.Contact>

      <Footer.UpToDate>
        <Footer.Heading>Keep up-to-date</Footer.Heading>
        <p>
          From new content to events, we’ll only send you emails when we have
          something to say.
        </p>

        <MailchimpSubscribe
          url={mailchimp_endpoint}
          render={({ subscribe, status }) => (
            <FooterSubscribe
              status={status}
              onValidated={(data) => subscribe(data)}
            />
          )}
        />
      </Footer.UpToDate>

      <Footer.Socials>
        <Footer.Heading>Social</Footer.Heading>
        <p>
          Keep up-to-date with what’s happening at the school on our social
          channels.
        </p>
        <p>
          {/* <a
            target="_blank"
            href="https://apps.apple.com/us/app/apple-podcasts/id525463029"
          > */}
          {/* <Footer.Icon src={Podcasts} /> */}
          {/* </a> */}
          <a target="_blank" href="https://medium.com/@schoolofclife">
            <Footer.Icon src={Medium} />
          </a>
          {/* <a target="_blank" href="https://www.spotify.com/uk/"> */}
          {/* <Footer.Icon src={Spotify} /> */}
          {/* </a> */}
          <a target="_blank" href="https://twitter.com/SchoolofCLife">
            <Footer.Icon src={Twitter} />
          </a>
          <a target="_blank" href="https://instagram.com/SchoolofCLife">
            <Footer.Icon src={Instagram} />
          </a>
        </p>
      </Footer.Socials>
    </Footer>
  </Container>
);

export default Foot;
