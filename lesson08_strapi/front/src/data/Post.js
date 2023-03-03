import { gql } from '@apollo/client';

export const GET_POST = gql`
  query GetLocations {
    posts { 
        data {
          id
          attributes {
            title
            description
            noOff
            category
            img {
              data {
               attributes {
                url
              } 
              }
            }
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
  }
`;