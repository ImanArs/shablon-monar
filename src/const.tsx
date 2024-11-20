import { BriefcaseBusiness, CalendarDays, Clapperboard, Newspaper, StarHalf, User } from "lucide-react"

export const userDetail = {
  name: 'John Jason',
  nickname: '@jason.john',
  price: 90000,
  city: 'Москва',
  avatar: 'https://t4.ftcdn.net/jpg/02/15/59/31/360_F_215593150_IpAxkHMsVEPdsc44Sbr4Paug58eYANqJ.jpg',
  quote: 'Для осмысленных прокрастинаторов, увлекающихся и вдохновленных.',
  portfolio: [
    'https://i.pinimg.com/736x/05/fe/29/05fe29e5df871939b4ec0a66bf8879ad.jpg',
    'https://i.pinimg.com/736x/33/48/96/334896d568ccee1f07d13a0a70d470e9.jpg',
    'https://i.pinimg.com/736x/a7/eb/c3/a7ebc3c1ad6f6bcf72bd26e7d305060f.jpg',
    'https://i.pinimg.com/736x/4d/f1/be/4df1bed9fa07a23362d9ac6ee5a224d9.jpg',
    'https://i.pinimg.com/736x/6b/3d/c7/6b3dc744a88f7d2f0f89eed5fcbd24c9.jpg',
    'https://i.pinimg.com/736x/3c/cb/19/3ccb1970898769eb32238bb6fb53da83.jpg',
    'https://i.pinimg.com/736x/90/e3/0a/90e30a8926f979823ee8993e2b98f78a.jpg',
    'https://i.pinimg.com/736x/04/f0/b5/04f0b54a057728e01d6ba1e3bf8abed4.jpg',
    'https://i.pinimg.com/736x/bc/e7/8e/bce78e09aabf0c266f914f7692123b28.jpg',
    'https://i.pinimg.com/736x/e6/11/08/e61108b04fb3bd7abfa35b0fcff34a1d.jpg',
  ],
  video: [
    {
      id: 1,
      video: 'https://www.youtube.com/embed/7404r8iX270',
      caption: 'Промо. Ведущий Макс Ильяш',
    },
    {
      id: 2,
      video: 'https://www.youtube.com/embed/7404r8iX270',
      caption: 'Промо. Ведущий Макс Ильяш',
    },
  ],
  reviews: [
    {
      id: 1,
      name: '',
      description: '',
      rating: 3,
      avatar: '',
    },
  ],
  articles: [

  ],
  projects: [

  ],
  relocate: 'Китай, ОАЭ, Турция, Египет, Кипр',
  calendar: '',
}

export const tabs = [
  {
    value: 'portfolio',
    label: 'портфолио',
    icon: <BriefcaseBusiness />,
  },
  {
    value: 'video',
    label: 'видео',
    icon: <Clapperboard />,
  },
  {
    value: 'reviews',
    label: 'отзывы',
    icon: <StarHalf />,
  },
  {
    value: 'articles',
    label: 'статьи',
    icon: <Newspaper />,
  },
  {
    value: 'about',
    label: 'о себе',
    icon: <User />,
  },
  {
    value: 'calendar',
    label: 'календарь',
    icon: <CalendarDays />,
  },
]