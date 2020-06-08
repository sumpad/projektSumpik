import Layout from '../comps/MyLayout';
const { ApolloServer } = require('apollo-server');
const typeDefs = require('../lib/schema');
const server = new ApolloServer({ typeDefs });

export default function Index() {
  return (
      <Layout>
    
    <style jsx>{`
    *{
    font-family: sans-serif;
    }
    .contable {
      margin-left: 40%;
      margin-right: 30%;
    }
    @media screen and (max-width: 940px) {
      .contable {
        margin-left: 40%;
        margin-right: 30%;
      }
    }
    
    .nadpis{
      color: blue;
      text-decoration: none;
      padding: 10px 20px;
      border: 1px solid blue;
      width: 4em;
    }
    th{
      color: blue;
      padding: 10px 20px;
      border: 1px solid blue;
    }
    td {
      padding: 10px 20px;
      color: white;
      background-color: blue;
    }
  
  `}</style>
      </Layout>
  );
}
