import { useQuery } from '@apollo/client';

import { GET_POST } from './data/Post'

import Cart from './component/cart'

import './index.css'

function App() {

  const { loading, error, data } = useQuery(GET_POST);

  console.log(data?.posts.data);

  const Posts = data?.posts.data.map(item => <Cart key={item.id} item={item} />)

  if (loading) return <h1>...Loading</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <div className='posts'>
        {Posts}
      </div>
    </div>
  );
}

export default App;
