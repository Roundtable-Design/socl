//Imports from Styles
import { A, ColumnData, Data, Grid } from "./styles";

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
const Row = (value) => (
  <React.Fragment>
    <ColumnData>{value.name}</ColumnData>
    <ColumnData>{showDate(value.date)}</ColumnData>
    <ColumnData>{value.author}</ColumnData>
    <ColumnData>
      <A href={value.link}>{getDomain(value.link)}</A>
    </ColumnData>
  </React.Fragment>
);

//The format of each table
const EventTable = (props) => (
  <div>
    <Heading>{props.name}</Heading>
    <Grid cellPadding={0} cellSpacing={0}>
      {props.first && (
        <React.Fragment>
          <ColumnData bold>Event title</ColumnData>
          <ColumnData bold>Date</ColumnData>
          <ColumnData bold>Ran by</ColumnData>
          <ColumnData bold>Link to event</ColumnData>
          <ColumnData spanAll>
            <div style={{ opacity: 0, height: "18px" }} />
          </ColumnData>
        </React.Fragment>
      )}

      {Boolean(props.events) && Object.values(props.events).map(Row)}
    </Grid>
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
