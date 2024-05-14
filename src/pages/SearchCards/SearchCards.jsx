import React, { useEffect, useState } from 'react';
import { useMainContext } from '../../Main/MainContext';
import MovieCard from '../../components/MovieCard/MovieCard';

const SearchCards = () => {
	const { searchCards, searchValue } = useMainContext();

	return (
		<section id="search">
			<div className="container">
				<div className="search">
					<MovieCard movie={searchCards} />
					<h3 style={{ display: searchCards?.length === 0 && searchValue !== '' ? 'block' : 'none' }}>Фильм не найден</h3>
				</div>
			</div>
		</section>
	);
};

export default SearchCards;
