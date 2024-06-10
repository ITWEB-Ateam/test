import style from '@/styles/question/index.module.scss'


export default function home(){
  return(
    <>
      <div>
        <div className={style.container}>
          <header className={style.chapter}>
            <p>CHAPTER</p>
            <h3>友人</h3>
            <div className={style.backArrow}>
              <figure>
                <img src="/images/backArrow.png" alt="" />
              </figure>
            </div>
          </header>
          <main>
            <div className={style.questionContent}>
              <div className={style.levelText}>
                <h4>レベル1</h4>
                <h4>朝</h4>
              </div>
              <nav className={style.gageContent}>
                <ul>
                  
                </ul>
              </nav>
              <div className={style.question}>
                <h3>お題お題お題お題でしょう？</h3>
                <p>問題問題問題問題問題問題問題問題問題問題問題問題問題問題。</p>
              </div>
            </div>
            <div className={style.answerContent}>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
              <div className={style.answer}>
                <a href="#">1.<span>休み時間</span></a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}