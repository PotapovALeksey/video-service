import React, { Component } from 'react';
import axios from 'axios';
import FeaturedVideos from '../../components/FeaturedVideos/FeaturedVideos';
import styles from './Home.module.css';
import VideosSlider from '../../components/VIdeosSlider/VideosSlider';
import VideosList from '../../components/VideosList/VideosList';

const feturedVideo = [
  {
    name: 'Aleen Hauck',
    descr:
      "I didn't know that Cheshire cats always grinned; in fact, I didn't know it to be a person of authority among them, called out, 'Sit down, all of you, and must know better'; and this Alice would not.",
    created_at: '2018-12-19 15:51:17',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      'recusandae-molestiae-perspiciatis-rerum-magnam-porro-debitis-esse-nihil',
    views: 56728,
    likes_count: 40895,
    comments_count: 34259,
    duration: '00:01',
  },
  {
    name: 'Mariam Roberts',
    descr:
      "I'll have you executed on the top of her or of anything else. CHAPTER V. Advice from a Caterpillar The Caterpillar and Alice was just going to shrink any further: she felt that it would feel very.",
    created_at: '2018-12-09 14:45:37',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'veniam-commodi-numquam-earum-vel-qui',
    views: 25099,
    likes_count: 12110,
    comments_count: 48843,
    duration: '00:01',
  },
  {
    name: 'Dayna Franecki',
    descr:
      "Alice. 'Off with her head!' about once in a moment to think this a very deep well. Either the well was very glad she had someone to listen to her. The Cat seemed to follow, except a tiny little.",
    created_at: '2018-09-06 04:57:27',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'non-itaque-harum-et',
    views: 79792,
    likes_count: 61640,
    comments_count: 63935,
    duration: '00:01',
  },
];

const newsVideo = [
  {
    name: 'Ward Raynor Jr.',
    descr:
      'No accounting for tastes! Sing her "Turtle Soup," will you, old fellow?\' The Mock Turtle in a trembling voice to a mouse, you know. Come on!\' So they got their tails fast in their mouths. So they.',
    created_at: '2019-05-16 02:58:14',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'error-id-odit-nemo-et-ipsam-id',
    views: 15218,
    likes_count: 40017,
    comments_count: 51625,
    duration: '00:01',
  },
  {
    name: 'Tierra Grant',
    descr:
      "I could not remember the simple and loving heart of her little sister's dream. The long grass rustled at her side. She was moving them about as much as she ran; but the Dodo said, 'EVERYBODY has.",
    created_at: '2019-02-20 18:03:50',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      'tenetur-voluptas-corrupti-numquam-dolores-numquam-earum-nulla-commodi',
    views: 14437,
    likes_count: 89008,
    comments_count: 29459,
    duration: '00:01',
  },
  {
    name: 'Dr. Lonnie Legros III',
    descr:
      "Miss, we're doing our best, afore she comes, to--' At this the whole pack of cards: the Knave 'Turn them over!' The Knave shook his head sadly. 'Do I look like one, but the three gardeners, but she.",
    created_at: '2018-08-04 17:16:40',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'ut-qui-commodi-omnis-consequatur-non-facilis',
    views: 76316,
    likes_count: 85739,
    comments_count: 83050,
    duration: '00:01',
  },
  {
    name: 'Mr. Jaylen Keebler',
    descr:
      "Caterpillar. 'Well, perhaps not,' said the Cat, 'a dog's not mad. You grant that?' 'I suppose they are the jurors.' She said it to annoy, Because he knows it teases.' CHORUS. (In which the March.",
    created_at: '2019-01-18 19:19:14',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'commodi-et-ex-aut-fugit-alias-at',
    views: 74150,
    likes_count: 88597,
    comments_count: 68042,
    duration: '00:01',
  },
  {
    name: 'Jonathan Harber',
    descr:
      "Caterpillar's making such a hurry that she had never forgotten that, if you please! \"William the Conqueror, whose cause was favoured by the hedge!' then silence, and then nodded. 'It's no use.",
    created_at: '2019-05-02 14:47:01',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'nobis-excepturi-et-quasi-beatae-enim',
    views: 59914,
    likes_count: 27791,
    comments_count: 91268,
    duration: '00:01',
  },
  {
    name: 'Jakayla Zieme',
    descr:
      "White Rabbit: it was talking in his turn; and both creatures hid their faces in their proper places--ALL,' he repeated with great emphasis, looking hard at Alice as he spoke, and then raised himself.",
    created_at: '2018-07-20 18:26:01',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'ut-ea-eum-nisi-est-deleniti',
    views: 82154,
    likes_count: 15481,
    comments_count: 49491,
    duration: '00:01',
  },
  {
    name: 'Prof. Jessie Runolfsson I',
    descr:
      "Alice to herself. At this moment the door began sneezing all at once. The Dormouse had closed its eyes were getting so far off). 'Oh, my poor little thing was waving its tail about in the sea!'.",
    created_at: '2019-04-20 06:42:58',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'esse-quos-est-quia-eum',
    views: 39079,
    likes_count: 96115,
    comments_count: 57215,
    duration: '00:01',
  },
  {
    name: 'Alexie Koelpin',
    descr:
      "Queen jumped up in great disgust, and walked a little pattering of footsteps in the middle. Alice kept her eyes immediately met those of a well--' 'What did they draw?' said Alice, who was peeping.",
    created_at: '2019-06-26 02:37:07',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'sequi-iusto-accusantium-sint-porro-quo-recusandae',
    views: 47238,
    likes_count: 37187,
    comments_count: 37864,
    duration: '00:01',
  },
  {
    name: 'Prof. Maximillia Feil II',
    descr:
      "So they got their tails in their paws. 'And how many hours a day is very confusing.' 'It isn't,' said the Duchess: 'and the moral of that is--\"Be what you like,' said the Duchess; 'and the moral of.",
    created_at: '2018-12-29 08:39:33',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'commodi-reprehenderit-explicabo-consequatur-sint-magnam-vitae-culpa',
    views: 34921,
    likes_count: 80947,
    comments_count: 79298,
    duration: '00:01',
  },
  {
    name: 'Maude Reichel',
    descr:
      "I'M a Duchess,' she said to Alice, flinging the baby was howling so much already, that it would all come wrong, and she was quite pale (with passion, Alice thought), and it was empty: she did not.",
    created_at: '2019-04-15 09:29:42',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'quis-quaerat-ipsam-ea-iusto-iste-quas-aut',
    views: 54687,
    likes_count: 39390,
    comments_count: 2539,
    duration: '00:01',
  },
  {
    name: 'Bridgette McDermott Sr.',
    descr:
      "MINE.' The Queen turned angrily away from him, and very soon had to leave off being arches to do anything but sit with its head, it WOULD twist itself round and get in at the March Hare. 'Yes.",
    created_at: '2018-08-04 15:59:36',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'cum-eaque-tenetur-esse-optio',
    views: 51693,
    likes_count: 41691,
    comments_count: 75036,
    duration: '00:01',
  },
  {
    name: 'Dr. Gretchen Kunze II',
    descr:
      "EVEN finish, if he were trying to fix on one, the cook tulip-roots instead of the words did not quite like the look of the house!' (Which was very like having a game of play with a soldier on each.",
    created_at: '2018-11-30 04:32:51',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link:
      'culpa-consequuntur-est-repellendus-nesciunt-error-voluptate-deserunt',
    views: 22923,
    likes_count: 8030,
    comments_count: 9243,
    duration: '00:01',
  },
];

const freeVideo = [
  {
    name: 'Antonia Schinner',
    descr:
      "Though they were lying on the top of his tail. 'As if I can creep under the window, and some of them say, 'Look out now, Five! Don't go splashing paint over me like a writing-desk?' 'Come, we shall.",
    created_at: '2018-09-17 06:39:27',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'consequatur-porro-cum-iste-explicabo-corporis',
    views: 91329,
    likes_count: 13146,
    comments_count: 60937,
    duration: '00:01',
  },
  {
    name: 'Dr. Ronny Cummings DVM',
    descr:
      "Alice. 'Why?' 'IT DOES THE BOOTS AND SHOES.' the Gryphon as if a fish came to the law, And argued each case with my wife; And the Eaglet bent down its head impatiently, and walked a little timidly.",
    created_at: '2019-01-23 12:11:26',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'et-reiciendis-qui-est-quis-iusto-id',
    views: 92355,
    likes_count: 73405,
    comments_count: 49197,
    duration: '00:01',
  },
  {
    name: 'Markus Crist',
    descr:
      "Alice caught the flamingo and brought it back, the fight was over, and she felt sure it would make with the grin, which remained some time without interrupting it. 'They were learning to draw,' the.",
    created_at: '2019-04-26 10:27:42',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'iste-magni-et-nisi-nam-corrupti-ullam',
    views: 84234,
    likes_count: 87119,
    comments_count: 50616,
    duration: '00:01',
  },
  {
    name: 'Christopher Labadie',
    descr:
      "Cat again, sitting on a little shaking among the people near the centre of the bill, \"French, music, AND WASHING--extra.\"' 'You couldn't have done just as if it wasn't very civil of you to learn?'.",
    created_at: '2018-11-26 09:53:41',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'praesentium-fuga-minima-modi-autem-eum-rem',
    views: 79840,
    likes_count: 27590,
    comments_count: 96566,
    duration: '00:01',
  },
  {
    name: 'Bobbie Kovacek',
    descr:
      "A secret, kept from all the time he was obliged to have got into a line along the sea-shore--' 'Two lines!' cried the Mouse, turning to Alice. 'Only a thimble,' said Alice a good deal worse off than.",
    created_at: '2018-12-06 06:37:48',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'et-ducimus-commodi-veniam-voluptas-asperiores-hic-illum',
    views: 22785,
    likes_count: 76017,
    comments_count: 17899,
    duration: '00:01',
  },
  {
    name: 'Haven Hand V',
    descr:
      "The Cat only grinned a little shriek, and went on growing, and very nearly carried it off. * * 'Come, my head's free at last!' said Alice in a low trembling voice, 'Let us get to the heads of the.",
    created_at: '2018-08-15 11:47:02',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'maiores-nobis-alias-necessitatibus-nobis-tempora-omnis',
    views: 99134,
    likes_count: 88877,
    comments_count: 98274,
    duration: '00:01',
  },
  {
    name: 'Werner DuBuque',
    descr:
      "Alice; 'I can't go no lower,' said the Duchess. 'I make you dry enough!' They all made a snatch in the world! Oh, my dear Dinah! I wonder who will put on your head-- Do you think you might knock.",
    created_at: '2019-05-02 16:54:26',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'incidunt-sit-magni-vero-natus-doloremque-id-dicta',
    views: 93673,
    likes_count: 93255,
    comments_count: 65264,
    duration: '00:01',
  },
  {
    name: 'Ilene Farrell',
    descr:
      "I'll manage better this time,' she said to herself; 'his eyes are so VERY much out of a dance is it?' Alice panted as she leant against a buttercup to rest herself, and nibbled a little snappishly.",
    created_at: '2019-03-17 13:01:09',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'vero-eum-pariatur-eum',
    views: 24208,
    likes_count: 272,
    comments_count: 17741,
    duration: '00:01',
  },
  {
    name: 'Alvena DuBuque',
    descr:
      "Next came the royal children, and make THEIR eyes bright and eager with many a strange tale, perhaps even with the Duchess, it had made. 'He took me for his housemaid,' she said to herself 'It's the.",
    created_at: '2019-04-30 09:42:14',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'assumenda-repellat-magnam-optio-iste',
    views: 38982,
    likes_count: 89005,
    comments_count: 7526,
    duration: '00:01',
  },
  {
    name: 'Gonzalo Konopelski PhD',
    descr:
      "Alice thought she had read about them in books, and she had drunk half the bottle, she found herself falling down a very grave voice, 'until all the first day,' said the Footman, 'and that for the.",
    created_at: '2018-10-27 19:26:03',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'corporis-ut-possimus-suscipit-quaerat',
    views: 42204,
    likes_count: 64262,
    comments_count: 79007,
    duration: '00:01',
  },
  {
    name: 'Dr. Colten Schimmel',
    descr:
      "Alice! when she next peeped out the proper way of nursing it, (which was to eat or drink under the hedge. In another minute the whole party swam to the table for it, you may stand down,' continued.",
    created_at: '2018-08-17 16:00:28',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'consequatur-aliquam-libero-harum-eum-sed-non',
    views: 8417,
    likes_count: 73158,
    comments_count: 43605,
    duration: '00:01',
  },
  {
    name: 'Jayde Jacobson',
    descr:
      "There was a good deal frightened at the moment, 'My dear! I shall have to fly; and the baby joined):-- 'Wow! wow! wow!' 'Here! you may nurse it a little shriek, and went back for a long breath, and.",
    created_at: '2018-09-30 19:17:09',
    preview_images:
      '["/preview1.jpg", "/preview2.jpg", "https://cdn1.imggmi.com/uploads/2019/7/1/b17fe6d725a1938b1f05fe8e4f8e2020-full.png"]',
    link: 'unde-inventore-molestiae-iure-impedit-vero-ut',
    views: 15644,
    likes_count: 28849,
    comments_count: 2225,
    duration: '00:01',
  },
];

export default class Home extends Component {
  render() {
    return (
      <div className={styles.content}>
        <FeaturedVideos videos={feturedVideo} />
        <VideosSlider videos={newsVideo} title={"What's new"} />
        <VideosList
          videos={freeVideo}
          title={'Free videos'}
          buttonLabel={'View all'}
          buttonLink={'/'}
        />
      </div>
    );
  }
}
