import Image from 'next/image';
import React from 'react';
import nextImage from '@/assets/'
const AlbumPage = () => {
    return (
        <div>
            <h2>Using image component</h2>
            <Image width={500} height={500} src="https://i.ibb.co/NsZL9zQ/cursor.png" alt='cursor logo' />
            <h2>Using img tag</h2>
            <img width='500px' height='500px' src="https://i.ibb.co/NsZL9zQ/cursor.png" alt='cursor logo' />
        </div>
    );
};

export default AlbumPage;