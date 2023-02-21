const Buttons = ({chosenTrainings}) => {
    return (
        <div className="filterBtn-box">
            <button className="filter-btn-left" onClick={() => chosenTrainings('novice')}>Novice</button>
            <button className="filter-btn-right" onClick={() => chosenTrainings('profe')}>Profe</button>
        </div>
    )
}

export default Buttons;