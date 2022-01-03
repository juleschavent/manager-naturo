import { gql } from '@apollo/client';

// GET ALL SYSTEMES
export const GET_SYSTEMES = gql`
query GETSYSTEME {
  systemes {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}
`;

// GET ALL ORGANES
export const GET_ORGANES = gql`
query GETORGANE {
  organes {
    data {
      attributes {
        name
        description
      }
    }
  }
}
`;

// GET ORGANES RELATED TO A SYSTEME
export const GET_FILTER_ORGANES = gql`
query GET_FILTER_ORGANES($systeme: String) {
  organes(filters: { systeme: { name: { eq: $systeme } } }) {
    data {
      id
      attributes {
        name
        description
        systeme {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`;

// GET ALL MALADIES
export const GET_MALADIE = gql`
query GETMALADIE {
  maladies {
    data {
      attributes {
        name
        description
      }
    }
  }
}
`;

// GET ALL MALADIES RELATED TO AN ORGANE
export const GET_FILTER_MALADIE = gql`
query GET_FILTER_MALADIE($organe: String) {
  maladies(filters: { organes: { name: { eq: $organe } } }) {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}
`;

// GET ALL TRAITEMENTS
export const GET_TRAITEMENT = gql`
query GETTRAITEMENT {
  traitements {
    data {
      attributes {
        name
        description
      }
    }
  }
}
`;

// GET ALL MALADIES RELATED TO AN ORGANE
export const GET_FILTER_TRAITEMENT = gql`
query GET_FILTER_TRAITEMENT($maladie: String) {
  traitements(filters: { maladies: { name: { eq: $maladie } } }) {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}
`;