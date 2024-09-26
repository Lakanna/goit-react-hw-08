import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.Loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
    return visibleContacts;
  }
);

export const selectFilteredContactsByNumber = createSelector(
  [selectContacts, selectNumberFilter],
  (contacts, filterNumber) => {
    const visibleContacts = contacts.filter((contact) =>
      contact.number.includes(filterNumber)
    );
    return visibleContacts;
  }
);
