import gql from 'graphql-tag'

export const GET_FOLDERS = gql`
  query Folders($filter: ParamFolder!, $workspaceId: Float!) {
  folders(filter: $filter, workspace_id: $workspaceId) {
    name
    documents {
      name
    }
    color
    is_public
    my_role
    unfinished_job_count
  }
}
`
