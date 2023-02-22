import { renderHook } from '@testing-library/react-hooks'
import { usePost } from '../posts'
import MockQueryProvider from '../../test-config/MockQueryProvider'

describe('post service test', () => {
  it('get post test', async () => {
    const { result, waitFor } = renderHook(
      () => usePost({ params: { limit: 10, page: 1 } }),
      {
        wrapper: MockQueryProvider
      }
    )
    await waitFor(() => result.current.posts.isSuccess)
    expect(result.current.posts.isSuccess).toBe(true)
  })

  it('create post test', async () => {
    const { result, waitFor } = renderHook(() => usePost(), {
      wrapper: MockQueryProvider
    })

    result.current.createMutation.mutate({
      data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    })

    await waitFor(() => {
      return result.current.createMutation.isSuccess
    })

    expect(result.current.createMutation.isSuccess).toBe(true)
  })
})
