import { servicesData } from "../../Data/servicesData";
import { Title } from "../Title/Title";
import "./Services.css";

export const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="Our" subtitle="Services"></Title>
            <div className="section-center services-center">
                {servicesData.map((service) => {
                    return (
                        <article key={service.id} className="service">
                            <span className="service-icon">
                                <i className={service.icon}></i>
                            </span>
                            <div className="service-info">
                                <h4 className="service-title">
                                    {service.title}
                                </h4>
                                <p className="service-text">{service.text}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
