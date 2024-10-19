
import React from 'react';
import collegeImage from './college.jfif'; 
import Cards from './Cards';

const Home = () => {
    const cardData = [
        { id: 1, title: 'Explore Campus Life', description: 'Discover the vibrant culture at Harvard' },
        { id: 2, title: 'World-Class Faculty', description: 'Learn from the best in the world.' },
        { id: 3, title: 'Innovative Courses', description: 'Stay ahead with cutting-edge curriculum.' }
    ];

  
    const handleCardClick = (title) => {
        alert(`You clicked on ${title}`);
    };

    return (
        <div className="home">
            <h2>Welcome to Harvard Edu</h2>
            <img 
                src={collegeImage} 
                alt="College" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
            />
            <p>Explore our world-class courses, renowned faculty, and vibrant campus life.</p>
            <Cards data={cardData} onCardClick={handleCardClick} /> {/* Passing props */}
        </div>
    );
};

export default Home;
