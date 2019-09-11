import React from "react";
import PromotedVideo from "../PromotedVideo/PromotedVideo";
import LatestVideos from "../LatestVideos/LatestVideos";
import TopVideos from "../TopVideos/TopVideos";
import FormSubscribe from "../FormSubscribe/FormSubscribe";
import styles from "./RightSidebar.module.css";


const promotedVideo = [
  {
    name: "Ian Jast",
    descr:
      "The players all played at once took up the fan and a scroll of parchment in the common way. So they couldn't see it?' So she began again: 'Ou est ma chatte?' which was lit up by wild beasts and.",
    created_at: "2019-01-27 14:00:33",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      "delectus-veniam-molestias-exercitationem-eum-facere-pariatur-quibusdam",
    views: 3812,
    likes_count: 24105,
    comments_count: 23576
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
    comments_count: 59684
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
    comments_count: 11337
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
    comments_count: 39472
  },
  {
    name: "Devon Powlowski DVM",
    descr:
      "I was sent for.' 'You ought to speak, but for a minute, nurse! But I've got to do,' said the March Hare interrupted in a day is very confusing.' 'It isn't,' said the Caterpillar called after it; and.",
    created_at: "2019-06-30 14:56:50",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "omnis-et-quibusdam-sed-ullam-autem-sunt-aut",
    views: 82527,
    likes_count: 83141,
    comments_count: 66285
  },
  {
    name: "Shirley Mayert",
    descr:
      "Nobody moved. 'Who cares for fish, Game, or any other dish? Who would not stoop? Soup of the doors of the garden: the roses growing on it but tea. 'I don't know much,' said Alice, 'and why it is.",
    created_at: "2019-06-29 03:27:06",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "quo-eos-praesentium-reiciendis-at-est-praesentium-ipsam",
    views: 42759,
    likes_count: 82711,
    comments_count: 78684
  },
  {
    name: "Prof. Emanuel Bayer DDS",
    descr:
      "I know. Silence all round, if you were all writing very busily on slates. 'What are tarts made of?' 'Pepper, mostly,' said the Pigeon; 'but if they do, why then they're a kind of authority among.",
    created_at: "2019-06-28 14:50:43",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "aut-omnis-inventore-dicta-assumenda-commodi",
    views: 86954,
    likes_count: 56567,
    comments_count: 64252
  }
];

const topVideos = [
  {
    name: "Horacio Cronin II",
    descr:
      "AT ALL. Soup does very well as she did not answer, so Alice went on, 'What HAVE you been doing here?' 'May it please your Majesty,' said Alice angrily. 'It wasn't very civil of you to leave off this.",
    created_at: "2018-09-09 05:31:33",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "velit-et-sed-fuga-est-magni",
    views: 80661,
    likes_count: 99995,
    comments_count: 12597,
    duration: "00:01"
  },
  {
    name: "Dell Considine",
    descr:
      "I will tell you my history, and you'll understand why it is I hate cats and dogs.' It was opened by another footman in livery came running out of this ointment--one shilling the box-- Allow me to.",
    created_at: "2019-05-21 12:56:55",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "non-ipsam-aut-dolor",
    views: 7117,
    likes_count: 99810,
    comments_count: 73022,
    duration: "00:01"
  },
  {
    name: "Dr. Germaine Altenwerth",
    descr:
      "I've fallen by this time, and was just in time to wash the things I used to call him Tortoise, if he wasn't one?' Alice asked. 'We called him Tortoise because he was gone, and the happy summer days.",
    created_at: "2019-04-23 18:28:21",
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: "enim-quia-error-ut-nisi-similique",
    views: 90433,
    likes_count: 99678,
    comments_count: 57472,
    duration: "00:01"
  }
];

const RightSidebar = () => (
  <div  className={styles.rightSidebar}>
    <PromotedVideo promoted={promotedVideo[0]} />
    <LatestVideos videos={latestVideos} />
    <TopVideos videos={topVideos} />
    <FormSubscribe />
  </div>
);

export default RightSidebar;
