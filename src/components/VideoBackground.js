import Background from "../assets/videos/background.mp4";

function VideoBackground(){
    return (
        <>
            <div className="fixed w-full">
                <video autoPlay muted loop className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0">
                    <source src={Background} type="video/mp4" />
                    {/* Add additional source tags for different video formats if needed */}
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-1"></div>
        </>
    );
}


export default VideoBackground;