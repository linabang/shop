import s from '../header-text/header-text.module.css'
const HeaderText = () => {
  return (
    <div className={s.text__block}>
      <a href="#">Каталог</a>
      <a href="#">Корзина</a>
    </div>
  )
}

export default HeaderText