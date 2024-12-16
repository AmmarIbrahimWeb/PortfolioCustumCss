import React from 'react';
import Image from 'next/image';
import "../app/styles/card.css"


interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className={`card ${window.innerWidth >= 640 ? 'card-sm' : '' }`}  data-aos="zoom-in-up" >
        <div>
            {/* Corrected Tailwind CSS and image path */}
            <Image
              className={`card-image ${window.innerWidth >= 640 ? 'card-image-sm' : '' }`}
              src={img}
              width={350}
              height={350}
              alt={title}
              layout="responsive" 
            />
        </div>

        <div className="card-content">
            <div className="card-title">{title}</div>
            <div>{desc}</div>
            <div>
                {tags.map((el) => (
                    <div className="card-tags" key={el}>
                        {el}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Card;
