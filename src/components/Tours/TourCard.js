import { tourData } from "../../Data/tourData";

export const TourCard = () => {
    return (
        <>
            {tourData.map((tours) => {
                return (
                    <article key={tours.id} className="tour-card">
                        <div className="tour-img-container">
                            <img src={tours.img} className="tour-img" alt="" />
                            <p className="tour-date">{tours.date}</p>
                        </div>
                        <div className="tour-info">
                            <div className="tour-title">
                                <h4>{tours.title}</h4>
                            </div>
                            <p>{tours.text}</p>
                            <div className="tour-footer">
                                <p>
                                    <span>
                                        <i className={tours.icon}></i>
                                    </span>
                                    {tours.destination}
                                </p>
                                <p>{tours.duration}</p>
                                <p>{tours.price}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </>
    );
};
