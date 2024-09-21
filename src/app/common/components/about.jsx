export const AboutComponent = () => {
    return (
        <div className="absolute top-56 mt-10 w-[1100px] items-center justify-center z-[60]">
            <h2 className="text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px]">
                About
            </h2>
            <h3 className="text-4xl font-semibold text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-10">
                Pick up the phone
            </h3>
            <p className="text-4xl font-semibold text-text-primary uppercase duration-1000 ease-in-out text-center max-w-[970px] mt-10 cursor-pointer">
                <a href="tel:+971585428055">+971 5 85 42 8055</a>
            </p>
        </div>
    )
}