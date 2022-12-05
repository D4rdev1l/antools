import React from 'react'

import './testimonial.scss'
import human from '../../assets/human.png'

const Testimonial = () => {
  return (
    <div className="testimonials-container">
        <div className="testimonials-container__img">
            <img src={human} alt="" />
        </div>
        <div className="testimonials-container__text">
            <div className="testimonials-container__text-decor">
                <svg width="101" height="97" viewBox="0 0 101 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.5006 6.57674L48.9333 14.5524C46.4355 16.1545 43.4521 18.6465 39.9828 22.0283C36.671 25.4648 33.4312 29.4557 30.2634 34.001C27.3077 38.4435 25.2453 43.1083 24.076 47.9953C26.2388 47.8648 28.2647 48.1278 30.1538 48.7844C33.6173 49.9882 36.1193 52.1812 37.66 55.3634C39.4128 58.4429 39.6052 61.9505 38.2373 65.8862C36.6505 70.4516 34.0265 73.6861 30.3653 75.5896C26.7588 77.3357 22.909 77.4974 18.8158 76.0748C12.6761 73.9408 8.77067 70.2013 7.09947 64.8564C5.64042 59.4088 6.0326 53.4577 8.27602 47.0031C9.75339 42.7525 12.1854 38.0397 15.5721 32.8648C19.1162 27.7445 23.2901 22.8431 28.0936 18.1606C32.8972 13.4781 38.0328 9.6168 43.5006 6.57674ZM86.9509 21.6788L92.3836 29.6544C89.8858 31.2565 86.9024 33.7485 83.4331 37.1303C80.1213 40.5669 76.8815 44.5578 73.7137 49.103C70.758 53.5456 68.6956 58.2103 67.5263 63.0973C69.6891 62.9668 71.715 63.2299 73.6041 63.8865C77.0676 65.0903 79.5696 67.2832 81.1103 70.4654C82.8631 73.5449 83.0555 77.0525 81.6876 80.9882C80.1008 85.5537 77.4768 88.7881 73.8156 90.6916C70.2091 92.4377 66.3593 92.5994 62.2661 91.1768C56.1264 89.0428 52.221 85.3034 50.5498 79.9584C49.0907 74.5108 49.4829 68.5597 51.7263 62.1051C53.2037 57.8546 55.6357 53.1418 59.0224 47.9668C62.5665 42.8465 66.7404 37.9452 71.5439 33.2626C76.3475 28.5801 81.4831 24.7188 86.9509 21.6788Z" fill="url(#paint0_linear_68_8)"/>
                    <defs>
                    <linearGradient id="paint0_linear_68_8" x1="66.9416" y1="2.11655" x2="-251.985" y2="320.507" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FCFCFC" stop-opacity="0"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.5"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <p>
                Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint 
                occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur 
                veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.
            </p>
        </div>
    </div>
  )
}

export default Testimonial