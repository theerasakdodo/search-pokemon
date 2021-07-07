import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
 
} from "@apollo/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Search } from "./components/Search";
function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache()
  });
  
  return (
    <ApolloProvider client={client}>
      <main>
        <Search/>
        {/* <PokemonsContainer /> */}
      </main>
    </ApolloProvider>
  );
}

export default App;
