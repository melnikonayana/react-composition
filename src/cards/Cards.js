import flower from './img/flower.jpg';
import Card from './Card';

function Cards() {

    return (
        <div className="Cards">
            <Card
                title="Card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                button={{ link: "https://ya.ru", text: "Go somewhere" }}>
                <img src={flower} className="card-img-top" alt="Flower" />
            </ Card>
            <Card
                title="Special title treatment"
                text="With supporting text below as a natural lead-in to additional content."
                button={{ link: "https://ya.ru", text: "Go somewhere" }}>
            </ Card>
        </div>
    );
}

export default Cards;
