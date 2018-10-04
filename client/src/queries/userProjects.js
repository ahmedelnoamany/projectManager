import gql from 'graphql-tag';

export default gql`
{
  user {
    id
    projects {
      id
      title
      dueDate
      priority
      client
    }
  }
}
`;