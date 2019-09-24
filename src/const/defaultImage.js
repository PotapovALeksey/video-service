import { PREVIEW_IMG } from '../middlewars/api';

const DEFAULT_IMG = 'https://leatherfighter.com/preview/preview1.jpg';

export default img => (img ? PREVIEW_IMG + img : DEFAULT_IMG);
