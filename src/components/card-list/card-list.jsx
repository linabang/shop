import { goodsItems } from "../../utils/goods";
import CatdItem from "../carf-item/catd-item";
import s from '../card-list/card-list.module.css'


const CardList = () => {
  return (
    <div className={s.Card_list}>
      {goodsItems.map((item, index) => (
        <CatdItem key={index} name={item.name} url={item.url} />
      ))}
    </div>
  )
}

export default CardList