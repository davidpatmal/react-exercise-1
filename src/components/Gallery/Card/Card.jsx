const Card = ({ card }) => {
    return (
        <div>
            {card.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.card.img}></img>
                        <div>
                            <p>{item.card.discount}</p>
                            <p>{item.card.title}</p>
                            <p>{item.card.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
