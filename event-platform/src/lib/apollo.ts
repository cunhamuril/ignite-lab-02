import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o97htn1dfn01xm1a16h2c3/master",
  cache: new InMemoryCache(),
});
