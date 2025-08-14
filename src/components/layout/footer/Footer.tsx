import scss from "./Footer.module.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer id={scss.footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footerFirst}>
            <h1>MovieMood</h1>
            <p>
              Онлайн-кинотеатр с лучшими фильмами и сериалами планеты в отличном
              качестве и профессиональном озвучивании!
            </p>
            <div className={scss.icons}>
              <InstagramIcon className={scss.icon} />
              <TelegramIcon className={scss.icon} />
              <YouTubeIcon className={scss.icon} />
              <FacebookIcon className={scss.icon} />
            </div>
          </div>
          <div className={scss.footerDiv}>
            <h3>Movies</h3>
            <span className={scss.gradient_border}></span>
            <ul>
              <li>Action</li>
              <li>Comedies</li>
              <li>Dramas</li>
              <li>Science Fiction</li>
              <li>Horror</li>
              <li>Melodramas</li>
            </ul>
          </div>
          <div className={scss.footerDiv}>
            <h3>TV Series</h3>
            <span className={scss.gradient_border}></span>
            <ul>
              <li>Criminal</li>
              <li>Detectives</li>
              <li>Documentaries</li>
              <li>Family</li>
              <li>Historical</li>
              <li>Sports</li>
            </ul>
          </div>

          <div className={scss.footerDiv}>
            <h3>Support</h3>
            <span className={scss.gradient_border}></span>
            <ul>
              <li>Help</li>
              <li>Contacts</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Advertising</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
