const Alert = () => {
  return (
    <div className="p-[70px]">
      <div className="text-center mb-10">
        <h2 className="heading">Crisis Preparedness Hub</h2>
        <h3 className="subHeading">
          Learn How to Navigate National Emergencies
        </h3>
      </div>
      <div>
        <div className="flex justify-between">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GT9ShGE_qjg?si=O0h2NAoREBA_9irP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            width="560"
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
