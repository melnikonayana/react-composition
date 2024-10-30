import PropTypes from 'prop-types';

/**
 * Верхнее меню новостей */

function Menu(props) {
    const { text, link } = props;

    return (
        <ul className="Menu">
            <li>
                <a href=".">Сейчас в СМИ</a>
            </li>
            <li>
                <a href={link}>{text}</a>
            </li>
            <li>
                <a href="https://ya.ru">Рекомендуем</a>
            </li>
        </ul>
    );
}

Menu.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Menu;
