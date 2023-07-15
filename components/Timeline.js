const Timeline = ({ children }) => {
    return (
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {children}
      </ol>
    );
  };


export default Timeline;