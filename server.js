const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const { parseAllOKF } = require('./src/lib/okfParser.js');
const { resolveCulturalContext } = require('./src/lib/culturalEngine.js');
const { applySafeSpaceFilter } = require('./src/lib/safeSpaceEngine.js');

const typeDefs = `#graphql
  type Vendor {
    id: ID!
    name: String
    type: String
    cultural_origin: String
    cultural_context: CulturalContext
  }

  type CulturalContext {
    tags: [String]
    meaning: String
  }

  input SafeSpaceProfile {
    required_alignments: [String]
    dealbreakers: [String]
  }

  type Query {
    vendors(safeSpaceProfile: SafeSpaceProfile): [Vendor]
    vendor(id: ID!): Vendor
    culturalOntology: String
  }
`;

const resolvers = {
  Query: {
    vendors: (_, { safeSpaceProfile }) => {
      const okfData = parseAllOKF();
      let allVendors = okfData.vendors || [];
      if (safeSpaceProfile) {
        allVendors = applySafeSpaceFilter(allVendors, safeSpaceProfile);
      }
      return allVendors;
    },
    vendor: (_, { id }) => {
      const okfData = parseAllOKF();
      return okfData.vendors.find(v => v.id === id);
    },
    culturalOntology: () => {
      return "Maroon Cultural Ontology loaded from OKF.";
    }
  },
  Vendor: {
    cultural_context: (parent) => {
      return resolveCulturalContext(parent.cultural_tags);
    }
  }
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  
  await server.start();
  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log('🚀 Maroon Intelligence API ready at http://localhost:4000/graphql');
  });
}

startServer();
