import './Button.css';
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import foto1 from '../../assets/Foto1.png'
import foto2 from '../../assets/Foto2.png'
import foto3 from '../../assets/Foto3.png'
import foto4 from '../../assets/Foto4.png'
import foto5 from '../../assets/Foto5.png'
import foto6 from '../../assets/Foto6.png'
import foto7 from '../../assets/Foto7.png'
import foto8 from '../../assets/Foto8.png'
import foto9 from '../../assets/Foto9.png'
import foto10 from '../../assets/Foto10.png'
import foto11 from '../../assets/Foto11.png'
import foto12 from '../../assets/Foto12.png'
import foto13 from '../../assets/Foto13.png'
import foto14 from '../../assets/Foto14.png'
import foto15 from '../../assets/Foto15.png'
import foto16 from '../../assets/Foto16.png'
import foto17 from '../../assets/Foto17.png'
import foto18 from '../../assets/Foto18.png'
import foto19 from '../../assets/Foto19.png'
import foto20 from '../../assets/Foto20.png'
import foto21 from '../../assets/Foto21.png'
import foto22 from '../../assets/Foto22.png'
import foto23 from '../../assets/Foto23.png'
import foto24 from '../../assets/Foto24.png'
////////
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'
import image5 from '../../assets/5.png'
import image6 from '../../assets/6.png'
import image7 from '../../assets/7.png'
import image8 from '../../assets/8.png'
import image9 from '../../assets/9.png'
import image10 from '../../assets/10.png'
import image11 from '../../assets/11.png'
import image12 from '../../assets/12.png'
import image13 from '../../assets/13.png'
import image14 from '../../assets/14.png'
import image15 from '../../assets/15.png'
import image16 from '../../assets/16.png'
import image17 from '../../assets/17.png'
import image18 from '../../assets/18.png'
import image19 from '../../assets/19.png'
import image20 from '../../assets/20.png'
import image21 from '../../assets/21.png'
import image22 from '../../assets/22.png'
import image23 from '../../assets/23.png'
import image24 from '../../assets/24.png'
interface ButtonProps {
}

const ButtonComponent: React.FC<ButtonProps> = () => {

    const [images, setImages] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleButtonClick = (image: string, nameImage: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        setImages(prevImages => [...prevImages, nameImage])
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
            <button className="button" onClick={() => handleButtonClick(foto1, "foto1")}>
                {images.includes("foto1") ? (
                    <img src={foto1} className='thumbnail-selected' />
                ) : (
                    <img src={image1} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto2, "foto2")}>
                {images.includes("foto2") ? (
                    <img src={foto2} className='thumbnail-selected' alt="thumb2"></img>
                ) : (
                    <img src={image2} className='thumbnail'></img>
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto3, "foto3")}>
                {images.includes("foto3") ? (
                    <img src={foto3} className='thumbnail-selected' />
                ) : (
                    <img src={image3} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto4, "foto4")}>
                {images.includes("foto4") ? (
                    <img src={foto4} className='thumbnail-selected' />
                ) : (
                    <img src={image4} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto5, "foto5")}>
                {images.includes("foto5") ? (
                    <img src={foto5} className='thumbnail-selected' />
                ) : (
                    <img src={image5} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto6, "foto6")}>
                {images.includes("foto6") ? (
                    <img src={foto6} className='thumbnail-selected' />
                ) : (
                    <img src={image6} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto7, "foto7")}>
                {images.includes("foto7") ? (
                    <img src={foto7} className='thumbnail-selected' />
                ) : (
                    <img src={image7} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto8, "foto8")}>
                {images.includes("foto8") ? (
                    <img src={foto8} className='thumbnail-selected' />
                ) : (
                    <img src={image8} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto9, "foto9")}>
                {images.includes("foto9") ? (
                    <img src={foto9} className='thumbnail-selected' />
                ) : (
                    <img src={image9} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto10, "foto10")}>
                {images.includes("foto10") ? (
                    <img src={foto10} className='thumbnail-selected' />
                ) : (
                    <img src={image10} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto11, "foto11")}>
                {images.includes("foto11") ? (
                    <img src={foto11} className='thumbnail-selected' />
                ) : (
                    <img src={image11} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto12, "foto12")}>
                {images.includes("foto12") ? (
                    <img src={foto12} className='thumbnail-selected' />
                ) : (
                    <img src={image12} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto13, "foto13")}>
                {images.includes("foto13") ? (
                    <img src={foto13} className='thumbnail-selected' />
                ) : (
                    <img src={image13} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto14, "foto14")}>
                {images.includes("foto14") ? (
                    <img src={foto14} className='thumbnail-selected' />
                ) : (
                    <img src={image14} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto15, "foto15")}>
                {images.includes("foto15") ? (
                    <img src={foto15} className='thumbnail-selected' />
                ) : (
                    <img src={image15} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto16, "foto16")}>
                {images.includes("foto16") ? (
                    <img src={foto16} className='thumbnail-selected' />
                ) : (
                    <img src={image16} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto17, "foto17")}>
                {images.includes("foto17") ? (
                    <img src={foto17} className='thumbnail-selected' />
                ) : (
                    <img src={image17} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto18, "foto18")}>
                {images.includes("foto18") ? (
                    <img src={foto18} className='thumbnail-selected' />
                ) : (
                    <img src={image18} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto19, "foto19")}>
                {images.includes("foto19") ? (
                    <img src={foto19} className='thumbnail-selected' />
                ) : (
                    <img src={image19} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto20, "foto20")}>
                {images.includes("foto20") ? (
                    <img src={foto20} className='thumbnail-selected' />
                ) : (
                    <img src={image20} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto21, "foto21")}>
                {images.includes("foto21") ? (
                    <img src={foto21} className='thumbnail-selected' />
                ) : (
                    <img src={image21} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto22, "foto22")}>
                {images.includes("foto22") ? (
                    <img src={foto22} className='thumbnail-selected' />
                ) : (
                    <img src={image22} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto23, "foto23")}>
                {images.includes("foto23") ? (
                    <img src={foto23} className='thumbnail-selected' />
                ) : (
                    <img src={image23} className='thumbnail' />
                )}
            </button>
            <button className="button" onClick={() => handleButtonClick(foto24, "foto24")}>
                {images.includes("foto24") ? (
                    <img src={foto24} className='thumbnail-selected' />
                ) : (
                    <img src={image24} className='thumbnail' />
                )}
            </button>
        </>
    );
};
export default ButtonComponent;