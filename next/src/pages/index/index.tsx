
import style from '@/styles/index/index.module.scss' 


export default function home(){

  const handleClick = () => {
    alert("正解");
  }

  return(
  <>
    <div>
      <div className={style.content}>
        <div className={style.question}>
          <p  className={style.sentence}>mffbhslfbjealbkamfkvbknesbneauyfbvjhvbnfeugberdkngbjrthguihgetntriujvmtibnwavggiurghiugwgsjgi</p>
        </div>
        <div className={style.choices}>
          <div className={style.answer}>
            <a href="#" onClick={handleClick}>A_~~~~~~~~~~~~~~~~~~</a>
            <a href="#">B_~~~~~~~~~~~~~~~~~~</a>
            <a href="#">C_~~~~~~~~~~~~~~~~~~</a>
            <a href="#">D_~~~~~~~~~~~~~~~~~~</a>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}