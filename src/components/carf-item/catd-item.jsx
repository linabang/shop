/* eslint-disable react/prop-types */
import s from './card-item.module.css'

const CatdItem = ({name,url,}) => {
  return (
      <div className={s.card_list}>
        <img src={url} alt="" />
        <h2 className={s.card__name}>{name}</h2>
        <button className={s.button}>В корзину</button>
      </div>
  )
}

export default CatdItem