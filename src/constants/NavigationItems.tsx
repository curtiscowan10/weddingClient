import { Home, Info, PhotoLibrary, LocationOn, EventNote, MusicNote, Mail } from "@mui/icons-material";
import React, { ReactElement } from "react";
import { RouteUrls } from "./RouteUrls";

export type NavigationItemType = {
  icon: ReactElement
  text: string,
  url: string
}

export const NavigationItems: Array<NavigationItemType> = [
  {icon: <Home />, text: "Home", url: RouteUrls.home},
  {icon: <LocationOn />, text: "Venue", url: RouteUrls.venue},
  {icon: <EventNote />, text: "RSVP", url: RouteUrls.rsvp},
  {icon: <MusicNote />, text: "Song Suggestions", url: RouteUrls.songSuggestions},
  {icon: <Mail />, text: "Contact", url: RouteUrls.contact},
];