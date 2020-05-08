const initialState = [
  {
    id: 0,
    title: "Sunday",
    cards: [
      {
        id: 0,
        text: "Rough draft a bio on A. Lincoln"
      },
      {
        id: 1,
        text: "Edit A. Lincoln bio rough draft"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      state;
  }
};

export default listsReducer;