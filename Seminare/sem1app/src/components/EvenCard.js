function EvenCard({title,date,location,propsBoolean}) {
    return ( 
        <div className="evenCard">
            <h2 style={{color: propsBoolean ? 'green' : 'red'}}><snap className="evenCard_title">Группа </snap>"{title}"</h2>
            <h2><snap className="evenCard_date">Дата </snap>{date}</h2>
            <h2><snap className="evenCard_description">Адрес: </snap>{location}</h2>
        </div>
     );
}

export default EvenCard;