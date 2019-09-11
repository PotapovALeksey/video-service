import React from "react";
import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategoriesList from "../CategoriesList/CategoriesList";
import PopularVideosSl from "../PopularVideosSl/PopularVideosSl";
import LatestVideoF from "./LastestVideoF/LastestVideoF";
import Information from "./Information/Information";
import PopularVideos from "./PopularVideos/PopularVideos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const popularVideos = [
  {
    name: "Mr. Gavin Boehm DDS",
    descr:
      "Queen. 'Well, I should be raving mad--at least not so mad as it lasted.) 'Then the words a little, 'From the Queen. 'Can you play croquet with the end of every line: 'Speak roughly to your little.",
    created_at: "2019-01-08 02:43:50",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "nisi-quidem-sed-qui-reiciendis-laudantium-sint",
    views: 99713,
    likes_count: 94244,
    comments_count: 22809,
    duration: "00:01"
  },
  {
    name: "Ms. Winona Crooks",
    descr:
      "Alice thought she might as well as she left her, leaning her head to hide a smile: some of them didn't know that cats COULD grin.' 'They all can,' said the Caterpillar. 'Is that the Gryphon.",
    created_at: "2019-03-13 20:50:44",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "at-repellendus-similique-at",
    views: 99548,
    likes_count: 35770,
    comments_count: 658,
    duration: "00:01"
  },
  {
    name: "Miss Zaria Friesen",
    descr:
      "I don't like them!' When the sands are all pardoned.' 'Come, THAT'S a good deal to ME,' said Alice in a very decided tone: 'tell her something worth hearing. For some minutes it seemed quite dull.",
    created_at: "2018-11-02 11:28:17",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "voluptatem-numquam-debitis-molestiae-aut-omnis",
    views: 99538,
    likes_count: 15662,
    comments_count: 12789,
    duration: "00:01"
  },
  {
    name: "Adela Kreiger",
    descr:
      "Adventures, till she heard one of them attempted to explain the paper. 'If there's no use in the lap of her little sister's dream. The long grass rustled at her with large round eyes, and half.",
    created_at: "2019-01-06 19:11:03",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      "corporis-asperiores-est-autem-expedita-repellendus-beatae-ipsum-similique",
    views: 99421,
    likes_count: 8508,
    comments_count: 86466,
    duration: "00:01"
  },
  {
    name: "Kay Nader",
    descr:
      "Hearts, she made out what it was: at first was in managing her flamingo: she succeeded in getting its body tucked away, comfortably enough, under her arm, with its wings. 'Serpent!' screamed the.",
    created_at: "2018-07-05 11:06:44",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "saepe-aut-dicta-suscipit-illum",
    views: 99419,
    likes_count: 87202,
    comments_count: 33422,
    duration: "00:01"
  },
  {
    name: "Ronaldo Bartell",
    descr:
      "Queen. 'Never!' said the Dormouse, and repeated her question. 'Why did they draw?' said Alice, who always took a minute or two, it was too late to wish that! She went in without knocking, and.",
    created_at: "2018-08-12 00:18:46",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "et-maiores-ratione-non-consectetur-fuga-cum-fugiat-aut",
    views: 99379,
    likes_count: 17135,
    comments_count: 10846,
    duration: "00:01"
  },
  {
    name: "Chasity Roberts",
    descr:
      "March Hare was said to the whiting,' said the King. 'Nearly two miles high,' added the Queen. First came ten soldiers carrying clubs; these were ornamented all over crumbs.' 'You're wrong about the.",
    created_at: "2018-08-01 16:06:39",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "quis-sed-quisquam-nobis",
    views: 99339,
    likes_count: 14195,
    comments_count: 71379,
    duration: "00:01"
  },
  {
    name: "Dr. Mayra Terry",
    descr:
      "I shall have somebody to talk to.' 'How are you getting on now, my dear?' it continued, turning to the other, looking uneasily at the number of cucumber-frames there must be!' thought Alice. 'I've.",
    created_at: "2019-06-07 06:55:19",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "consectetur-quisquam-atque-iure-occaecati-fugit",
    views: 99265,
    likes_count: 45494,
    comments_count: 57052,
    duration: "00:01"
  },
  {
    name: "Shane Denesik",
    descr:
      "I say--that's the same size: to be an old crab, HE was.' 'I never said I didn't!' interrupted Alice. 'You did,' said the Duchess; 'and that's why. Pig!' She said the Caterpillar. 'I'm afraid I can't.",
    created_at: "2019-04-02 12:06:18",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "sit-voluptatum-et-sapiente-sapiente-occaecati",
    views: 99247,
    likes_count: 53253,
    comments_count: 33978,
    duration: "00:01"
  },
  {
    name: "Benjamin Stokes",
    descr:
      "Mock Turtle went on. 'We had the best cat in the sun. (IF you don't like them raw.' 'Well, be off, then!' said the others. 'Are their heads downward! The Antipathies, I think--' (for, you see.",
    created_at: "2018-12-25 19:43:16",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "consectetur-ipsum-earum-rerum-omnis-a-dolores-dolorem",
    views: 99226,
    likes_count: 98632,
    comments_count: 26696,
    duration: "00:01"
  },
  {
    name: "Abelardo Monahan",
    descr:
      "Alice, a little scream, half of anger, and tried to say 'creatures,' you see, Alice had not got into it), and handed them round as prizes. There was a child,' said the Dodo, 'the best way to fly up.",
    created_at: "2018-11-29 20:37:19",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      "excepturi-veritatis-rerum-cum-non-reprehenderit-reprehenderit-rerum-autem",
    views: 99202,
    likes_count: 39821,
    comments_count: 47159,
    duration: "00:01"
  },
  {
    name: "Prof. Matteo Marquardt PhD",
    descr:
      "It was as much right,' said the Cat. 'I said pig,' replied Alice; 'and I do so like that curious song about the twentieth time that day. 'No, no!' said the King eagerly, and he hurried off. Alice.",
    created_at: "2018-10-08 16:44:23",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "et-velit-et-qui-facilis-ut-voluptatem-iure",
    views: 99176,
    likes_count: 78091,
    comments_count: 82200,
    duration: "00:01"
  }
];

const latestVideos = [
  {
    name: "Clinton Altenwerth",
    descr:
      "Ugh, Serpent!' 'But I'm not particular as to prevent its undoing itself,) she carried it off. * * * * * * * * * * CHAPTER II. The Pool of Tears 'Curiouser and curiouser!' cried Alice again, in a.",
    created_at: "2019-07-01 10:03:01",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "sequi-neque-assumenda-sed",
    views: 97422,
    likes_count: 49351,
    comments_count: 59684,
    duration: "00:01"
  },
  {
    name: "Prof. Sadye Bogisich DDS",
    descr:
      "And I declare it's too bad, that it might be hungry, in which case it would feel very queer to ME.' 'You!' said the Footman, and began to feel which way it was neither more nor less than no time.",
    created_at: "2019-07-01 09:50:40",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "necessitatibus-voluptatibus-eius-rem-praesentium",
    views: 57981,
    likes_count: 73625,
    comments_count: 11337,
    duration: "00:01"
  },
  {
    name: "Luz Rolfson",
    descr:
      "Hatter. He came in sight of the ground, Alice soon began talking again. 'Dinah'll miss me very much pleased at having found out a history of the e--e--evening, Beautiful, beautiful Soup! 'Beautiful.",
    created_at: "2019-06-30 23:59:50",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "voluptate-voluptates-error-magnam-optio-placeat-ut-voluptate",
    views: 26502,
    likes_count: 22509,
    comments_count: 39472,
    duration: "00:01"
  }
];

const cat = [
  {
    name: "GAME",
    videos_count: 910,
    icon: "",
    link: "game"
  },
  {
    name: "KOMBAT",
    videos_count: 2312,
    icon: "",
    link: "kombat"
  },
  {
    name: "MOVIE",
    videos_count: 998,
    icon: "",
    link: "movie"
  },
  {
    name: "MUSIC",
    videos_count: 992,
    icon: "",
    link: "music"
  },
  {
    name: "NEWS",
    videos_count: 9127,
    icon: "",
    link: "news"
  },
  {
    name: "FREE",
    videos_count: 22123,
    icon: "",
    link: "free"
  },
  {
    name: "WHATS NEW",
    videos_count: 1512,
    icon: "",
    link: "whats-new"
  }
];

const inf = [
  { name: "About us", link: "asd1" },
  { name: "Get a Video", link: "asd2" },
  { name: "Terms and Privacy", link: "asd3" },
  { name: "For Advertisers", link: "asd4" },
  { name: "Contact Us", link: "asd5" }
];

const popular = [
  {
    name: "GAME",
    videos_count: 910,
    icon: "",
    link: "game",
    views_sum: 1234124
  },
  {
    name: "NEWS",
    videos_count: 9127,
    icon: "",
    link: "news",
    views_sum: 221125
  },
  {
    name: "FREE",
    videos_count: 22123,
    icon: "",
    link: "free",
    views_sum: 64423
  }
];

const Footer = () => (
  <footer className={styles.footer}>
    <PopularVideosSl videos={popularVideos} />
    <div className={styles.footerInner}>
      <Container fluid={true}>
        <Row>
          <Col className={styles.block} xl={3} lg={4} md={6} sm={6} xs={12}>
            <h3 className={styles.title}>Leather Fighter</h3>
            <p className={styles.text}>
              This jacket will seduce with the sportive and modern design and
              with the price positioning. PPE Ce certified, Fighter is made of
              thick full grain leather, features a removable warm lining and can
              be fully connected thanks to a zip around waist, to make a 2 pc
              suit with Fighter Pant.{" "}
            </p>
            <ul className={styles.socialList}>
              <li className={styles.socialItem}>
                <NavLink
                  className={`${styles.socialLink} ${styles.facebook}`}
                  to="/"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                </NavLink>
              </li>
              <li className={styles.socialItem}>
                <NavLink
                  className={`${styles.socialLink} ${styles.youtube}`}
                  to="/"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
                </NavLink>
              </li>
              <li className={styles.socialItem}>
                <NavLink
                  className={`${styles.socialLink} ${styles.twitter}`}
                  to="/"
                >
                  <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col className={styles.block} xl={3} lg={4} md={6} sm={6} xs={12}>
            <h3 className={styles.title}>Latest</h3>
            <LatestVideoF videos={latestVideos} />
          </Col>
          <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
            <h3 className={styles.title}>Categories</h3>
            <CategoriesList cat={cat} isFooter={true} />
          </Col>
          <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
            <h3 className={styles.title}>Information</h3>
            <Information information={inf} />
          </Col>
          <Col className={styles.block} xl={2} lg={4} md={4} sm={6} xs={12}>
            <h3 className={styles.title}>Popular</h3>
            <PopularVideos videos={popular} />
          </Col>
        </Row>
      </Container>
    </div>
    <div className={styles.footerBottom}>
      <p className={styles.text}>
        Developed By Blanc Studio © 2019 Leather Fighter. All rights reserved.
      </p>
      <div>
        <NavLink className={styles.link} to="/">
          Privacy policy
        </NavLink>
        <NavLink className={styles.link} to="/">
          Cookies
        </NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;
