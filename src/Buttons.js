
const Buttons = ({chosenTrainings, training}) => {


    return (
        <div className="filterBtn-box" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <p>Novice</p>
            <div className="filter_btn_box2">
                <button className={training[0].searchTerm === 'novice' ? "filter-btn2" : "filter-btn"} onClick={() => chosenTrainings('novice')}></button>
                <button className={training[0].searchTerm === 'profe' ? "filter-btn2" : "filter-btn"} onClick={() => chosenTrainings('profe')}></button>
            </div>
            <p>Profe</p>
        </div>
    )
}

export default Buttons;