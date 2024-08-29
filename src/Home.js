import React from 'react'
import Feed from './Feed'

function Home({ posts, error, loading }) {
  return (
    <main className='Home'>
      {loading && <p className="statusMsg">Loading posts...</p>}
      {error && <p className="statusMsg" style={{ color: "red" }}>Error fetching posts...</p>}
      {!loading && !error && (posts.length ? <Feed posts={posts} /> :
        <p className="statusMsg">No posts to display.</p>)}

    </main>
  )
}

export default Home