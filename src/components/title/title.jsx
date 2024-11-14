/* eslint-disable react/prop-types */
import s from '../title/title.module.css'

const Title = ({children}) => {
  return (
    <>
    <h1 className={s.title}> {children} </h1>
    </>
  )
}

export default Title