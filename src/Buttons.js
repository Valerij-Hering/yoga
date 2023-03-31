const Buttons = ({chosenTrainings}) => {
    return (
        <div className="filterBtn-box" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <button className="filter-btn-left" onClick={() => chosenTrainings('novice')}>Novice</button>
            <button className="filter-btn-right" onClick={() => chosenTrainings('profe')}>Profe</button>
        </div>
    )
}

export default Buttons;