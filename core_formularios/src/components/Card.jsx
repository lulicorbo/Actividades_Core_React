import styles from '../css/Card.module.css';

const Card = ({ nombre, apellido }) => {
    return (
        
            <div className={styles.card}>
            <h3 className={styles.title}>
                {nombre} {apellido}
            </h3>
            </div>
        
    );
};

export default Card;
