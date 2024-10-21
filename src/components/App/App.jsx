import React, {useState} from 'react';

import VideoList from '../VideoList/VideoList';
import data from '../data/data';
import './app.css';

export default function App() {
	const [list, setList] = useState(data);

	return (
		<VideoList list={list} />
	);
}