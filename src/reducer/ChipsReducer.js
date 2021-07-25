const INITIAL_STATE = {
  originalList: [ // just hard coded list
    {
      name: 'Marina Augusteine',
      email: 'marina@example.com'
    },
    {
      name: 'Nick Giannopolouses',
      email: 'nik@example.com'
    },
    {
      name: 'Anita Gros',
      email: 'anita@example.com'
    },
    {
      name: 'Megan Smith',
      email: 'megan@example.com'
    },
    {
      name: 'Test User-1',
      email: 'tests@example.com'
    },
    {
      name: 'Test User-2',
      email: 'tests@example.com'
    }
  ],
  chips: [], // list which are added to input field of chips
  chipsList: [] // this array used for show available
};
const ChipsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CHIPS': {
      const index = action.payload;
      let chipsList = state.chipsList.slice();
      let chips = state.chips.slice();
      let selectedList = chipsList.splice(index, 1)[0];
      chips.push(selectedList);
      return {
        ...state,
        chipsList: chipsList,
        chips: chips
      }

    }

    case 'REMOVE_CHIPS': {
      const index = action.payload;
      let list = state.chips.slice();
      let chipsList = state.chipsList.slice();
      // removing object from chips and pushing back to chipsLIst
      let selectedList = list.splice(index, 1)[0];
      chipsList.push(selectedList);
      return {
        ...state,
        chipsList: chipsList,
        chips: list
      }
    }

    case 'ON_FOCUS_CHIPS_LIST': {
      const originalList = state.originalList.slice();
      if (state.chips.length > 0) {
        return { ...state }
      } else {
        return {
          ...state,
          chipsList: originalList

        }
      }
    }

    case 'ON_SEARCH_LIST': {
      const searchText = action.payload;
      let newArr = [];
      state.originalList.slice().map((search, index) => {
        // searching list from originalList array and adding to chipsList if any list has matched
        if (search.name.trim() !== '' && search.name.trim().toLowerCase().includes(searchText.trim().toLowerCase())) {
          newArr.push(search);
        }
      });
      return {
        ...state,
        chipsList: newArr
      }
    }

    case 'DELETE_CHIPS': {
      const index = state.chips.length - 1;
      const chips = state.chips.slice();
      const removedList = chips.splice(index, 1)[0];
      let chipsList = state.chipsList.slice();
      chipsList.push(removedList);
      return {
        ...state,
        chipsList: chipsList,
        chips: chips
      }
    }

    default:
      return ({ ...state });
  }
}
export default ChipsReducer;