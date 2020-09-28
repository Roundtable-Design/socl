//Imports from Styles
import { A, Data, TH, Table } from "./styles";

//Imports from package.json
import React from "react";
//Imports from components
import Section from "@component/Section";
import access from "@helper/access";
import getDomain from "@helper/getDomain";
import parseEvent from "@helper/parseEvent";
//Imports from helpera
import showDate from "@helper/showDate";
import sortEvents from "@helper/sortEvents";
import styled from "styled-components";
//Import from theme
import theme from "@/theme";

const breakpoint = theme.breakpoint;

//Heading for events table
const Heading = styled(Section.Heading)`
  padding-bottom: 0.55rem;
  padding-top: 1.67rem;
`;

//The format to store data in the row
const Row = (value, index) => (
  <tr key={index}>
    <Data>{value.name}</Data>
    <Data>{showDate(value.date)}</Data>
    <Data>{value.author}</Data>
    <Data>
      <A href={value.link}>{getDomain(value.link)}</A>
    </Data>
  </tr>
);

//The format of each table
const EventTable = (props) => (
  <div>
    <Heading>{props.name}</Heading>
    <Table cellPadding={0} cellSpacing={0}>
      {props.first && (
        <React.Fragment>
          <tr>
            <TH>Event title</TH>
            <TH>Date</TH>
            <TH>Ran by</TH>
            <TH>Link to event</TH>
          </tr>
          <tr>
            <TH colSpan="4">
              <div style={{ opacity: 0, height: "18px" }} />
            </TH>
          </tr>
        </React.Fragment>
      )}

      {Boolean(props.events) && Object.values(props.events).map(Row)}
    </Table>
  </div>
);

//Wrapper around the table
const EventWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 2rem;

  ${breakpoint("md")`
    padding-left: calc(1 * 100%/12);
    padding-right: calc(1 * 100%/12);
  `}
`;

//Function that collects the data from prismic, sorts it into past and presentand then creates two tables for each using the formats above
export default (props) => {
  //Gets the data from prismic
  const [allEvents, setAllEvents] = React.useState([]);
  React.useEffect(function () {
    access("calendar").then((events) => {
      setAllEvents(events.map(parseEvent));
    });
  }, []);

  let eventsAll = sortEvents(allEvents);
  //Returning the tables with the correct arrays
  return (
    <EventWrapper>
      {allEvents ? (
        <div>
          <EventTable first name="Upcoming events" events={eventsAll[0]} />
          <EventTable name="Past events" events={eventsAll[1]} />
          <div style={{ "padding-bottom": "5rem" }}></div>
        </div>
      ) : (
        <div>...</div>
      )}
    </EventWrapper>
  );
};
