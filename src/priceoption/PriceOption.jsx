import Price from "../price/Price";


const PriceOption = () => {
   const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$50/month",
            "features": [
                "Access to gym facilities",
                "Limited equipment usage",
                "No personal trainer sessions"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$80/month",
            "features": [
                "Access to gym facilities",
                "Full equipment usage",
                "1 personal trainer session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$120/month",
            "features": [
                "Access to gym facilities",
                "Full equipment usage",
                "3 personal trainer sessions per month",
                "Access to premium classes"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-center text-3xl font-extrabold capitalize">best price in town</h2>
           <div className="grid grid-cols-3 gap-4 ">
                {
                    priceOptions.map(oftion => <Price key={oftion.id} oftion={oftion}></Price>)
                }
           </div>
            
        </div>
    );
};

export default PriceOption;