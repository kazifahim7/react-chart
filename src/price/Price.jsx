import PropTypes from 'prop-types';
import { IoMdCheckmark } from "react-icons/io";

const Price = ({ oftion }) => {
    const { name, price, features } = oftion;
    return (
        <div className='bg-violet-600 text-white flex flex-col shadow-xl p-4 rounded-lg mt-3 duration-1000 hover:scale-x-75'>
            <h1>
                <span>{price}</span>

            </h1>
            <h2 className='text-3xl'>{name}</h2>
            <div className='flex-grow mb-2'>
                {
                    features.map((feature, idx) => <li className='flex items-center gap-3' key={idx}><IoMdCheckmark></IoMdCheckmark> {feature}</li>)
                }
            </div>
            <button className='w-full p-3 rounded-lg bg-green-700'>Buy now</button>

        </div>
    );
};
Price.propTypes = {
    oftion: PropTypes.object.isRequired,
}

export default Price;