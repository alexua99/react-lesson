import './cart.css'

export default function Cart({ item }) {
    function singlPost(item) {
        console.log(item);
    }

    //map tabs
    return (
        <div onClick={() => { singlPost(item) }} className="cart">
            <h2 className="cart__title">Імя: {item.attributes.title}</h2>
            <img src={`http://localhost:1337${item.attributes.img.data.attributes.url}`} alt="img" width='200' />
            <h4 className="cart__title">{item.attributes.description}</h4>
            <p>Категорія: {item.attributes.category}</p>
        </div>
    )
}
