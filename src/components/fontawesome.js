/**********************************
 * https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
 * https://github.com/FortAwesome/react-fontawesome
 */

import { library } from '@fortawesome/fontawesome-svg-core'
// import your icons
import { 
  faAngleDown,
  faAngleRight,
  faAngleUp,

  faBars,
  faBed,

  faCamera,
  faCaretDown,
  faChartArea,
  faCheck,
  faChevronDown,
  faChild,
  faCloud,

  faDumbbell,

  faEuroSign,

  faFax,
  faFilter,

  faHeartbeat,

  faInfoCircle,

  faLink,
  faListOl,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,

  faMapMarkerAlt,
  faMountain,
  faMoneyBill,

  faPaperclip,
  faPhone,
  faPhoneVolume,
  faPrint,

  faReply,
  faRss,

  faShieldAlt,

  faTag,
  faTags,
  faTh,
  faThList,
  faThumbtack,
  faTimes,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons'

import { 
  faCalendar,
  faCalendarCheck,
  faCheckCircle,
  faCircle,
  faClock,
  faComment,

  faEdit,
  faEnvelope, 
  faEye,

  faFile,
  faFolder,
  faFolderOpen,

  faMap,
  
  faSmileWink,

  faUser,
} from '@fortawesome/free-regular-svg-icons'

import { 
  faFacebook,
  faFacebookF,
  faInstagram,
  faTelegram,
  faTwitter, 
  faSkype,
  faViber,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faMountain,
  faDumbbell,
  faUser,
  faPhone,
  faFax,
  faCalendar,
  faLink,
  faPrint,
  faMoneyBill,
  faEnvelope, 
  faTh,
  faThList,
  faFilter,
  
  faClock,
  faChild,
  
  faFolder,
  faFolderOpen,
  
  faCaretDown,
  
  faChartArea,
  faBed,
  
  faEuroSign,
  faSmileWink,
  faShieldAlt,
  
  faCheckCircle,
  faCircle,
  
  faPhoneVolume,
  faMap,
  faCalendarCheck,
  faEdit,
  faReply,
  
  faTags,
  faThumbtack,
  faTimes,
  faBars,
  
  faAngleRight,
  faAngleUp,
  faAngleDown,
  
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  
  faCheck,
  faPaperclip,
  faFile,
  faTag,
  faRss,
  faCloud,
  faComment,
  
  faEye,
  faTshirt,
  faInfoCircle,
  faListOl,
  faCamera,
  faChevronDown,
  faMapMarkerAlt,
  faHeartbeat,
 
  faFacebook, 
  faFacebookF, 
  faTwitter, 
  faInstagram,
  faSkype,
  faViber,
  faWhatsapp,
  faTelegram,
)
