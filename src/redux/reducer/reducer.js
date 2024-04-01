let initialState = {
  contactList: [],
  filterName: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            uploadImgUrl: payload.uploadImgUrl,
          },
        ],
      };
    case "SEARCH":
      return { ...state, filterName: payload.filterName };
    default:
      return { ...state };
  }
}

export default reducer;
