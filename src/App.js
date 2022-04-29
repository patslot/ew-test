import styles from './app.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className={styles.container}>
      <header>
        <div className={`${styles.leftHeader} `}>
          <div className={styles.logo} href="/">
            EWCon
          </div>
          <div className={styles.today}>
            <p>Apr 28, 2022</p>
            <div className={styles.weather}>
              <span>
                <img src="/images/weather.svg" alt="cloudy" />
              </span>
              <span>24°</span>
              <span>Toronto</span>
            </div>
          </div>
        </div>
        <div className={`${styles.rightHeader}`}>
          <span>
            <img src="/images/search.svg" alt="search" />
          </span>
          <span>
            <img src="/images/bell.svg" alt="bell" />
          </span>
          <div className={styles.accountInfo}>
            <p className={styles.amount}>5000</p>
            <p className={styles.history}>
              <span>
                <img src="/images/history.svg" alt="history" />
              </span>
              History
            </p>
          </div>
        </div>
      </header>
      <div className={`${styles.main} container`}>
        <nav>
          <ul>
            <li>
              <a href="/">
                <img src="/images/nav1.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav2.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav3.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav4.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav5.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav6.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav7.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/nav8.svg" alt="home"></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/profilepic.png" alt="home"></img>
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.leading}>
          <span>
            <img src="/images/nav3.svg" alt="learn"></img>
          </span>
          <p>Learn & Earn > Ask The Expert</p>
        </div>
        <div className={styles.thisMonthFeatured}>
          <h2>
            <span>this Month's Theme is :</span>Health
          </h2>
          <button>
            <img src="/images/info.svg" alt="info" />
          </button>
          <div className={styles.video}>
            <img src="/images/thismonthkeyvisual.png" alt="doctor" />
            <img
              src="/images/playbutton.svg"
              className={styles.playbtn}
              alt="play"
            />
          </div>
          <div className={styles.articleTitleContainer}>
            <p className={styles.bluetext}>Discussion Topic</p>
            <p className={styles.title}>“Coping with Anxiety and Depression”</p>
            <p className={styles.transcript}>Transcript</p>
          </div>
          <div className={styles.expertContainer}>
            <p className={styles.bluetext}>This Month's Expert</p>
            <p className={styles.title}>Dr. Sarah Polsner</p>
            <p className={styles.smalltext}>Mental Health Specialist</p>
            <div className={styles.starRatings}>
              <span className={styles.starChecked}></span>
              <span className={styles.starChecked}></span>
              <span className={styles.starChecked}></span>
              <span className={styles.star}></span>
              <span className={styles.star}></span>
            </div>
            <p className={styles.smalltext}>Watch & Rate 25pts!</p>
          </div>
        </div>
        <div className={styles.thisMonth}>
          <h2>New This Month</h2>
          <div className={styles.articleContainer}>
            <article>
              <span>watched</span>
              <img
                src="/images/featured.svg"
                alt="featured"
                className={styles.featured}
              />
              <img src="/images/thismonth.png" alt="thismonth"></img>
              <h3>
                This is a question for the expert. The question goes right
                here...
              </h3>
            </article>
            <article>
              <img src="/images/thismonth.png" alt="thismonth"></img>
              <h3>
                This is a question for the expert. The question goes right
                here...
              </h3>
            </article>
            <article>
              <img src="/images/thismonth.png" alt="thismonth"></img>
              <h3>
                This is a question for the expert. The question goes right
                here...
              </h3>
            </article>
          </div>
        </div>
        <div className={styles.pastMonth}>
          <h2>Past Featured Video Series</h2>

          <div className={styles.searchgroup}>
            <input
              type="search"
              className={styles.customSearch}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="form-label" id="search-addon">
              <FontAwesomeIcon icon={faSearch} color="#ccc" />
            </span>
          </div>
          <div className={styles.pastArticlesCon}>
            <article>
              <img src="/images/pastArticle1.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle2.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle3.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle4.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle5.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle6.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle7.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
            <article>
              <img src="/images/pastArticle8.png" alt="pastmonth"></img>
              <h3>Dr. Sarah Polsner</h3>
              <p>13 ivdeos on Mental Health</p>
              <button>Watch The Series</button>
            </article>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <a href="/">Terms of service</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </ul>
        <p>Test Site | EW Development Center®</p>
      </footer>
    </div>
  );
}

export default App;
