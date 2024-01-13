import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/pages/home/HomeContainer";
import Venue from "../../components/pages/venue/VenueContainer";
import RSVP from "../../components/pages/rsvp/RSVPContainer";
import SongSuggestions from "../../components/pages/song-suggestions/SongSuggestionsContainer";
import Contact from "../../components/pages/contact/ContactContainer";
import { RouteUrls } from "../../constants/RouteUrls";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={RouteUrls.home} element={<Home />} />
      <Route path={RouteUrls.venue} element={<Venue />} />
      <Route path={RouteUrls.rsvp} element={<RSVP />} />
      <Route path={RouteUrls.songSuggestions} element={<SongSuggestions />} />
      <Route path={RouteUrls.contact} element={<Contact />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default PageRoutes;