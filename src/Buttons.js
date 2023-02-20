const Buttons = ({chosenTrainings}) => {
    return (
        <div className="filterBtn-box">
            <button className="filter-btn" onClick={() => chosenTrainings('novice')}>Novice</button>
            <button className="filter-btn" onClick={() => chosenTrainings('profe')}>Profe</button>
        </div>
    )
}

export default Buttons;