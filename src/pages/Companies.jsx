import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { SEO } from "../components/SEO";

const Companies = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./company.json")
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                });
        };

        fetchData();

        const intervalId = setInterval(() => {
            setLoading(false);
            clearInterval(intervalId);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    if (loading) { return <Loading /> }
    const { company } = data;
    const seoProps = {
        title: 'Companies | Mostafa Akhter',
        description: "Meet Mostafa Jarif Mohiuddin, a visionary in fashion & business. Leading Khoshroz Kitab Mahal & NDC Auto Brick, he's shaping industries.",
        name: "Mostafa Akhter Mohiuddin",
        tags: [
            "Mostafa Jamal Mohiuddin",
            "Managing Director",
            "Khoshroz Kitab Mahal",
            "Magura Group",
            "NDC Auto Brick",
            "Magura Paper Mills Ltd",
            "Bangladesh Monospool Paper Manufacturing Company Ltd",
            "Paper Processing & Packaging Ltd",
            "Jatiya Mudran",
            "Business Leader",
            "Entrepreneurship",
            "Leadership Skills",
            "Business Acumen",
            "Community Involvement",
            "Bangladesh Business",
            "Leadership Excellence",
            "Visionary Leader",
            "Corporate Management",
            "Bangladesh Economy",
            "Business Ventures",
            "Community Impact"
        ],
        type: 'website',
        image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1706154545/DMD_website/chairman_mapl_up58li.jpg',
        socialLinks: [
            {
                icon: 'brands-facebook',
                link: 'https://www.facebook.com/profile.php?id=100088074433903',
            }
        ],
    };
    return (
        <>
            <SEO {...seoProps} />
            <section className="company">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="company__desc">
                                {company?.desc?.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company__wrapper">
                    <div className="wrapper">
                        <div className="row justify-content-center">
                            {company?.companies?.map((item, index) => (
                                <div className="col-lg-5" key={index}>
                                    <div className="company__container">
                                        <a href={item.url} target="/_blank">
                                            <div className="company__logo">
                                                <img src={item.logo} alt={item.alt} />
                                            </div>
                                            <div className="company__text">
                                                <p>{item.text}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Companies