import "./Tours.css";
import { Title } from "../Title/Title";
import { TourCard } from "./TourCard";

export const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="Featured" subtitle="Tours"></Title>

            <div className="section-center featured-center">
                <TourCard />
            </div>
        </section>
    );
};
