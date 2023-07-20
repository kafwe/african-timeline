import Link from 'next/link';

const PopupCard = ({ name, locationName, region, description, period, type, year, imageUrl}) => {
    const capitalisedType = type.charAt(0).toUpperCase() + type.slice(1)

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={imageUrl} alt=""/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{name}</div>
                <div class="text-gray-700 text-base my-2">{locationName}, {region}</div>
                <p class="text-gray-600 text-base">
                    {description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{capitalisedType}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{period}</span>
                {year && <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{year}</span>}
            </div>
        </div>
    )
}

export default PopupCard;