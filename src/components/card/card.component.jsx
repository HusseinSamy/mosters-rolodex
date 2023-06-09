import './card.styles.css'
const Card = ({filteredMonsters, monster})=>
(
    <div className='card-container'>
        <img src={`https://robohash.org/${monster.id}?set_set3/?size=180x180`} alt={'Monster ' + monster.name} />
        <h1 key={monster.name}>{monster.name}</h1>
        <p>{ monster.email }</p>
    </div>
)
export default Card;