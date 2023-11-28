import { Box, Container } from "@mui/material";
import React from "react";
import BookItem from "./components/BookItem";
import SearchField from "./components/SearchField";
import Header from "./components/Header";
import { useBooks } from "./useBooks";
import FiltersDialog from "./components/FiltersDialog";


function App() {
  const {
    books,
    sorters,
    categories,
    priceBetween,
    yearBetween,
    search,
    handleSearch,
  } = useBooks();

  return (
    <Container disableGutters maxWidth="sm">
      <Header />
      <StickyContainer>
        <SearchField {...{ search, handleSearch }} />
        <FiltersDialog {...{ sorters, categories, priceBetween, yearBetween }} />
      </StickyContainer>
      {/* show list of books */}
      <Container maxWidth="sm">
        {books.map((book) => (
          <BookItem {...{ book, key: book.title }} />
        ))}
      </Container>
    </Container>
  );
}

function StickyContainer({ children }) {
  return (
    <Box
      position="sticky"
      top={0}
      bgcolor="white"
      p={3}
      zIndex={100}
      borderBottom={2}
      borderColor="#1111"
    >
      {children}
    </Box>
  )
}

export default App;
