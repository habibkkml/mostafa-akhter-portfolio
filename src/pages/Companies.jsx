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
        title: 'Companies | Mostafa Mohiuddin',
        description: "It was through Mostafa’s work at his grandfather’s publishing company during the summers that he discovered his love for the paper industry and assumed a full-time job as Deputy Managing Director. Mostafa says he owes most of his business acumen to his grandfather, who gave him his foundational training. This knowledge, paired with his love of nature, inspired Mostafa to open a business with his brother in 2021: Magura Agriculture Park Limited. This organic agriculture farm allows a one-stop solution for people to reach farmers and fresh products with ease.",
        name: "homeContent.title",
        type: 'website',
        image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831588/DMD_website/DMD_photo1_hsmn2l.jpg',
        socialLinks: [
            {
                icon: 'brands-facebook',
                link: 'https://www.facebook.com/mostafajmohiuddin/',
            },
            {
                icon: 'brands-linkedin',
                link: 'https://bd.linkedin.com/in/mostafajafirmohiuddin',
            },
            {
                icon: 'brands-youtube',
                link: 'https://www.youtube.com/@khoshrozkitabmahalltd',
            },
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