function CardImage({image, title}){
    return (
        <div className="card_image">
            <img src={image} alt={title} />
        </div>
    )
}

export default CardImage;