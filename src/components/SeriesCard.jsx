// import './seriescard.css';
import styles from "./Netflix.module.css"
export const SeriesCard = (props)=>{
    //here most of the time props currelem is repeating so we will destructure the data
    const {img_url,name,rating,description,genre,cast,watch_url} =props.currElem;
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize:"1.6rem",
        backgroundColor: `${rating>=8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--bg-color)",

    };
    // superhit and average are alos claasNames but they are already in javascript so 
    const rating_condi = rating>=8.5 ? styles.super_hit : styles.average;
    return(
        <li className={styles.card} >
            
            <div>
                <img src = {img_url} alt="qot.jpg" width="40%" height="40%"/>
            </div>
            <div className={styles["card-content"]}>
            <h2>Name : {name}</h2>
            <h3>Rating : <span className={`${styles.rating} ${rating_condi}`}> {rating}</span></h3>
            <p>Summary : <span className={styles.summary}>{description}</span></p>
            <p>Genre : {genre}</p>
            <p>Cast : {cast}</p>
            <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
            </a>    
            </div>
        </li>
    );
}