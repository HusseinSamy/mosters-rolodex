import Card from '../card/card.component';
import './card-list.component.css'

const CardList = ({ filteredMonsters }) =>
(
    <div className='container'>
        <h1 className="main-text">Monsters Rolodex</h1>
        <div className="cards-container">
            {filteredMonsters.map((monster) =>
                <Card monster={ monster } />
        )}
        </div>
    </div>
)
    
export default CardList;