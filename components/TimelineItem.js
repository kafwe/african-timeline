import Link from 'next/link';

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">{date}</time>
      <h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 ">{description}</p>
      {link && (
        <Link href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-500">
            Learn more
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
        </Link>
      )}
    </li>
  );
};

export default TimelineItem;
