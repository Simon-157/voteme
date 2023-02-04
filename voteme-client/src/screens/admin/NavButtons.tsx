//utils
import {
  HOME,
  ADMIN,
  SETTINGS,
  EVENTS,
  ACCOUNTS,
  VOTE,
  FAQ,
  LOGOUT,
  ANALYTICS,
  UNPUBLISHED,
  RESULTS,
} from "@/utils/constants";

export const NavigationButtons = [
  {
    text: EVENTS,
    to: `${ADMIN}${HOME}${EVENTS}`,
  },
  {
    text: UNPUBLISHED,
    to: `${ADMIN}${HOME}${UNPUBLISHED}`,
  },
  {
    text: RESULTS,
    to: `${ADMIN}${HOME}${RESULTS}`,
  },
  {
    text: SETTINGS,
    to: `${ADMIN}${HOME}${SETTINGS}`,
  },
  {
    text: FAQ,
    to: `${ADMIN}${HOME}${ANALYTICS}`,
  },
  {
    text: LOGOUT,
    to: `${ADMIN}${HOME}${ANALYTICS}`,
  },
];
