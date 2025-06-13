import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const COUNTRIES_PER_PAGE = 12;

// Define the type for each country
type Country = {
  name: string;
  region: string;
  flag: string;
};

// Define the type for the slice state
type CountryState = {
  name: string;
  countryData: Country[];
  displayedCountries: Country[];
  currentPage: number;
  countriesPerPage: number;
  hasMore: boolean;
  loadingMore: boolean;
  filter: string;
};

// Initial state with correct types
const initialState: CountryState = {
  name: "India",
  countryData: [],
  displayedCountries: [],
  currentPage: 1,
  countriesPerPage: COUNTRIES_PER_PAGE,
  hasMore: true,
  loadingMore: false,
  filter: "All",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    countryDataSelected(state, action: PayloadAction<Country[]>) {
      state.countryData = action.payload;
      state.displayedCountries = action.payload.slice(
        0,
        state.countriesPerPage
      );
      state.currentPage = 1;
      state.hasMore = action.payload.length > state.countriesPerPage;
    },
    startLoadingMore(state) {
      state.loadingMore = true;
    },
    loadMoreCountries(state) {
      let filteredData: Country[];

      if (state.filter === "All") {
        filteredData = state.countryData;
      } else {
        filteredData = state.countryData.filter(
          (data) => data.region === state.filter
        );
      }

      const startIndex = state.currentPage * state.countriesPerPage;
      const endIndex = startIndex + state.countriesPerPage;

      const moreCountries = filteredData.slice(startIndex, endIndex);

      state.displayedCountries = [
        ...state.displayedCountries,
        ...moreCountries,
      ];
      state.currentPage += 1;
      state.hasMore = endIndex < filteredData.length;
      state.loadingMore = false;
    },

    filterCountrySelected(state, action: PayloadAction<string>) {
      const selectedFilter = action.payload;
      state.filter = selectedFilter;
      state.currentPage = 1;

      let filteredData: Country[];

      if (selectedFilter === "All") {
        filteredData = state.countryData;
      } else {
        filteredData = state.countryData.filter(
          (data) => data.region === selectedFilter
        );
      }

      state.displayedCountries = filteredData.slice(0, state.countriesPerPage);
      state.hasMore = filteredData.length > state.countriesPerPage;
    },
  },
});

export const countryActions = countrySlice.actions;
export default countrySlice;
