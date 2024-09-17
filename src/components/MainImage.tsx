import mainImage from '../assets/images/illustration-article.svg';

const MainImage = () => {
	return (
		<img
			className='w-full h-[12.5rem] object-cover object-center rounded-[0.625rem]'
			src={mainImage}
			alt=''
			aria-hidden='true'
		/>
	);
};

export default MainImage;
