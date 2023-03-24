import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShoeForm from 'src/components/Shoe/ShoeForm'

const CREATE_SHOE_MUTATION = gql`
  mutation CreateShoeMutation($input: CreateShoeInput!) {
    createShoe(input: $input) {
      id
    }
  }
`

const NewShoe = () => {
  const [createShoe, { loading, error }] = useMutation(CREATE_SHOE_MUTATION, {
    onCompleted: () => {
      toast.success('Shoe created')
      navigate(routes.shoes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createShoe({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Shoe</h2>
      </header>
      <div className="rw-segment-main">
        <ShoeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewShoe
