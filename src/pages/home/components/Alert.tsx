const Alert = () => {
  return (
    <div className="md:p-[70px] p-5">
      <div className="text-center mb-10">
        <h2 className="heading text-secondary">Crisis Preparedness Hub</h2>
        <h3 className="subHeading text-secondary-foreground">
          Learn How to Navigate National Emergencies
        </h3>
      </div>
      <div>
        <div className="flex lg:flex-row flex-col justify-between">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/GT9ShGE_qjg?si=O0h2NAoREBA_9irP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/TYKx86gq2Pc?si=8V_-BWDrofguNZBp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Alert;
