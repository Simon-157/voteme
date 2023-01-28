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
} from "@/utils/constants";

export const NavigationButtons = [
  {
    text: EVENTS,
    to: `${ADMIN}${HOME}${EVENTS}`,
  },
  {
    text: SETTINGS,
    to: `${ADMIN}${HOME}${SETTINGS}`,
  },
  {
    text: VOTE,
    to: `${ADMIN}${HOME}${VOTE}`,
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
