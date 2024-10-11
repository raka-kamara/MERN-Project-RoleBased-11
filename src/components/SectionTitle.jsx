const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-8">
            <p className="text-yellow-500 mb-3 text-lg italic">~ {subHeading} ~</p>
            <h3 className="text-4xl font-bold tracking-wide">{heading}</h3>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
        </div>
    );
};

export default SectionTitle;
