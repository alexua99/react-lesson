import useFeatch from 'react-fetch-hook'
import CartRick from './component/Cart'
import './style.css'

export default function RickAndMorty() {


    const { isLoading, data } = useFeatch('https://rickandmortyapi.com/api/character?page=2')



    let RikAndMorty = data?.results.map(item => <CartRick key={item.id} item={item} />)

    return isLoading ? <h1>...isLoading</h1> : <div className='carts'>{RikAndMorty}</div>
}