import MainImage from './components/MainImage';
import Tag from './components/Tag';
import Date from './components/Date';
import BlogTitle from './components/BlogTitle';
import BlogExcerpt from './components/BlogExcerpt';
import Avatar from './components/Avatar';
import AuthorName from './components/AuthorName';
import './App.css';

function App() {
	return (
		<main className='flex flex-col gap-6 bg-white p-6 rounded-[1.25rem] max-w-[24rem] border border-gray-950 shadow-solid'>
			<MainImage />
			<div className='flex flex-col gap-3'>
				<Tag />
				<Date />
				<BlogTitle />
				<BlogExcerpt />
			</div>
			<div className='flex gap-3 items-center'>
				<Avatar />
				<AuthorName />
			</div>
		</main>
	);
}

export default App;
