import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handelBuyButtonClick=(event)=>{
    console.log( `${foodItem} being bought`)
  }
    return (
      <li className={`${styles['kgItem']} list-group-item `}> <span className={styles['kg-span']}>{foodItem}</span>
      <button className={styles.button}
      onClick={(event) => handelBuyButtonClick(event)}>Buy</button>
      </li>
    );
  }
  
  export default Item;
  