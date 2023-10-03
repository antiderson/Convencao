import './Button.css';

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
import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface ButtonProps {
    number: number;
}
  
const ButtonComponent: React.FC<ButtonProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);


    const handleButtonClick = (image: string) => {
        // console.log(image)
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
            <button className="button" onClick={() => handleButtonClick(foto1)}>
                <img src={image1}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto2)}>
                <img src={image2}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto3)}>
                <img src={image3}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto4)}>
                <img src={image4}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto5)}>
                <img src={image5}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto6)}>
                <img src={image6}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto7)}>
                <img src={image7}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto8)}>
                <img src={image8}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto9)}>
                <img src={image9}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto10)}>
                <img src={image10}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto11)}>
                <img src={image11}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto12)}>
                <img src={image12}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto13)}>
                <img src={image13}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto14)}>
                <img src={image14}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto15)}>
                <img src={image15}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto16)}>
                <img src={image16}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto17)}>
                <img src={image17}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto18)}>
                <img src={image18}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto19)}>
                <img src={image19}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto20)}>
                <img src={image20}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto21)}>
                <img src={image21}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto22)}>
                <img src={image22}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto23)}>
                <img src={image23}></img>
            </button>
            <button className="button" onClick={() => handleButtonClick(foto24)}>
                <img src={image24}></img>
            </button>
        </>
    );
};
export default ButtonComponent;