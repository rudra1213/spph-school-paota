import logo from "@/assets/SCHOOL_LOGO.jpg";
import exteriorMain from "@/assets/SCHOOL_EXTERIOR_IMAGE.jpg";
import outsideAlt from "@/assets/SCHOOL_OUTSIDE_IMAGE.jpg";
import mainOne from "@/assets/school_main_image_1.jpg";
import mainTwo from "@/assets/school_main_image_2.jpg";
import insideCollage from "@/assets/SCHOOL_INSIDE_IMAGES.jpg";
import classroomOne from "@/assets/classroom_image_1.jpg";
import classroomTwo from "@/assets/classroom2.jpg";
import facultyCollage from "@/assets/faculty_image.jpg";
import facultyTwo from "@/assets/faculty_image_2.jpg";
import directorOne from "@/assets/DIRECTOR_IMAGE_3.jpg";
import directorTwo from "@/assets/director_image2.jpg";
import assembly from "@/assets/ASSEMBLY_TIME_1.jpg";
import tiffin from "@/assets/TIFIN_TIME_1.jpg";
import doubtSession from "@/assets/DOUBT_CLEAR_SESSION_1.jpg";
import republicDay from "@/assets/REPUBLIC_DAY_1.jpg";
import events from "@/assets/events1_1.jpg";
import awards from "@/assets/AWARDS.jpeg";
import picnic from "@/assets/PICNIC_TIME_1.jpg";
import bagDistribution from "@/assets/BAG_DISTRIBUTION_1.jpg";
import celebration from "@/assets/CELEBRATION_1.jpg";
import annualResult from "@/assets/Anual_result_image.jpg";
import animateVideo from "@/assets/ANIMATE_VIDEO.mp4";
import schoolVideoOne from "@/assets/school_video_1.mp4";
import schoolVideoTwo from "@/assets/school_video_2 (1).mp4";
import sportsActivityVideo from "@/assets/SPORTS ACTIVITY (1) (1).mp4";
import drawingActivityVideo from "@/assets/drawing activity.mp4";
import poonamBansal from "@/assets/dr. poonam bansal.jpg";


export const media = {
  logo,
  exteriorMain,
  outsideAlt,
  mainOne,
  mainTwo,
  insideCollage,
  classroomOne,
  classroomTwo,
  facultyCollage,
  facultyTwo,
  directorOne,
  directorTwo,
  poonamBansal,
  assembly,
  tiffin,
  doubtSession,
  republicDay,
  events,
  awards,
  picnic,
  bagDistribution,
  celebration,
  annualResult,
  animateVideo,
  schoolVideoOne,
  schoolVideoTwo,
  sportsActivityVideo,
drawingActivityVideo,
};

export const videos = [
  {
    src: schoolVideoOne,
    poster: assembly,
    title: "School Life at SPPH",
    caption:
      "A glimpse into our campus, classrooms and everyday school life.",
    tag: "School Life",
  },
  {
    src: schoolVideoTwo,
    poster: celebration,
    title: "Celebrations & Activities",
    caption:
      "Performances, festivals and joyful activities with our students.",
    tag: "Events",
  },
  {
    src: animateVideo,
    poster: mainOne,
    title: "SPPH Introduction",
    caption:
      "A short introduction to Shishu Pearl's Play House Academy.",
    tag: "School",
  },
  {
    src: sportsActivityVideo,
    poster: mainTwo,
    title: "Sports Activity",
    caption:
      "Students enjoying sports, physical activities and active learning.",
    tag: "Sports",
  },
  {
    src: drawingActivityVideo,
    poster: classroomTwo,
    title: "Drawing Activity",
    caption:
      "Creative drawing and art activities that encourage imagination.",
    tag: "Activities",
  },
];


export const school = {
  name: "Shishu Pearl's Play House Academy Paota",
  shortName: "SPPH School",
  altName: "SPPH School Paota",
  category: "Pre-School & Primary School",
  type: "Co-Education English Medium School",
  established: "March 2015",
  registration: "542JPR/2015-16",
  recognition: "350/328/2017-18",
  director: "Mrs. Poonam Bansal",
  secretary: "Mr. Omprakash Bansal",
  cashier: "Mrs. Sumitra Bansal",
  phonePrimary: "+91 9414061937",
  phoneSecondary: "+91 9414061938",
  phonePrimaryRaw: "919414061937",
  phoneSecondaryRaw: "919414061938",
  email: "bansalspph@gmail.com",
  addressLines: [
    "Bansal Villa,",
    "Behind Vishu Super Market,",
    "Near Ghantaghar,",
    "Paota (Jaipur),",
    "Rajasthan, India",
  ],
  timing: "Monday to Saturday",
  classes: [
    "Play Group (PG)",
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
  ],
  transport: ["School Bus Facility", "School Van Facility"],
};

export const whatsappLink = `https://wa.me/${school.phonePrimaryRaw}?text=${encodeURIComponent(
  "Hello SPPH School, I would like to know more about admissions.",
)}`;

export type Branch = {
  id: string;
  badge: string;
  name: string;
  subtitle?: string;

  type: string;
  classes: string;

  director: string;

  address: string[];

  phone: string;
  alternatePhone?: string;

  phoneRaw: string;
  alternatePhoneRaw?: string;

  note: string;

  facilities: string[];

  mapQuery: string;
  mapEmbed?: string;

  image: string;
};

export const branches: Branch[] = [
  {
    id: "main-campus",
    badge: "Head Campus",
    name: "Shishu Pearl's Play House Academy Paota",
    subtitle: "SPPH School Paota",

    type: "Co-Education English Medium School",

    classes: "Play Group (PG) to Class VIII",

    director: "Mrs. Poonam Bansal",

    address: school.addressLines,

    phone: "+91 9414061937",
    alternatePhone: "+91 9414061938",

    phoneRaw: "919414061937",
    alternatePhoneRaw: "919414061938",

    note: `Registration No. ${school.registration} • Recognition No. ${school.recognition} • Established ${school.established}`,

    facilities: [
      "English Medium Education",
      "Play Group (PG) to Class VIII",
      "Smart Classrooms",
      "Experienced Teachers",
      "Conference Hall",
      "Computer Education",
      "School Bus Facility",
      "School Van Facility",
      "Activity Based Learning",
      "Safe & Child-Friendly Campus",
      "Sports Activities",
      "Cultural Activities",
    ],

    mapQuery:
      "Shishu Pearl's Play House Academy, Bansal Villa, Behind Vishu Super Market, Near Ghantaghar, Paota, Rajasthan",

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.221162821754!2d76.0728999!3d27.5866721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d15333e237733%3A0x3f010781fc94f277!2sShishu%20Pearl%20Play%20House!5e0!3m2!1sen!2sin!4v1785946798513!5m2!1sen!2sin",

    image: media.exteriorMain,
  },

  {
    id: "pre-primary",
    badge: "Pre School Campus",

    name: "Play Pearl House Pre School",

    subtitle: "Play Group • Nursery • LKG • UKG",

    type: "Early Childhood Education Centre",

    classes: "Play Group (PG) • Nursery • LKG • UKG",

    director: "Mrs. Poonam Bansal",

    address: [
      "Shiv Mandir Road",
      "Shiv Colony",
      "Bhumika Plaza",
      "Paota",
      "Rajasthan, India",
    ],

    phone: "+91 9782780197",

    phoneRaw: "919782780197",

    note:
      "A dedicated pre-school campus focused on joyful learning, creativity, personality development and early childhood education.",

    facilities: [
      "Play Group (PG)",
      "Nursery",
      "LKG",
      "UKG",
      "Activity Based Learning",
      "Smart Classrooms",
      "Indoor Play Area",
      "Creative Learning",
      "Experienced Teachers",
      "Transport Facility",
      "Safe & Child-Friendly Campus",
      "Parent Communication",
    ],

    mapQuery:
      "Bhumika Plaza, Shiv Colony, Shiv Mandir Road, Paota, Rajasthan",

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3536.520657502715!2d76.07494927546279!3d27.577383276257315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzM4LjYiTiA3NsKwMDQnMzkuMSJF!5e0!3m2!1sen!2sin!4v1785948820770!5m2!1sen!2sin",

    image: media.outsideAlt,
  },
];

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const gallery = [
  { src: media.assembly, caption: "Morning Assembly", tag: "Daily Life" },
  { src: media.classroomOne, caption: "Classroom Learning", tag: "Academics" },
  { src: media.republicDay, caption: "Republic Day Celebration", tag: "Events" },
  { src: media.tiffin, caption: "Tiffin Time", tag: "Daily Life" },
  { src: media.events, caption: "Fancy Dress Performance", tag: "Events" },
  { src: media.doubtSession, caption: "Doubt Clearing Session", tag: "Academics" },
  { src: media.awards, caption: "Cultural Programme", tag: "Events" },
  { src: media.picnic, caption: "Annual Picnic", tag: "Trips" },
  { src: media.bagDistribution, caption: "School Bag Distribution", tag: "Care" },
  { src: media.celebration, caption: "Guru Purnima Celebration", tag: "Events" },
  { src: media.annualResult, caption: "Annual Result Day & PTM", tag: "Academics" },
  { src: media.classroomTwo, caption: "Pre-Primary Activity Room", tag: "Pre School" },
  { src: media.insideCollage, caption: "Inside Our Classrooms", tag: "Campus" },
  { src: media.facultyCollage, caption: "Our Teaching Team", tag: "Faculty" },
  { src: media.mainOne, caption: "Main Campus", tag: "Campus" },
  { src: media.mainTwo, caption: "School Entrance", tag: "Campus" },
];