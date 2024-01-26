const Promotion = ({ promotion }) => {
    return (
        <div>
            <img src={promotion.background}></img>
            <div>
                <p>{promotion.day}</p>
                <h2>{promotion.title}</h2>
                <p>{promotion.discount}</p>
                <h3>{promotion.price}</h3>
            </div>
        </div>
    )
}

export default Promotion
