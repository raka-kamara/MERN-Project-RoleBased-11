import { Parallax } from "react-parallax";

const Cover = ({ img, title, description, design, opacity }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className={`hero ${design?.height}`}>
                <div className={`hero-overlay ${design?.opacity}`}></div>
                <div className="hero-content text-center text-neutral-content text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 ">{description}</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;