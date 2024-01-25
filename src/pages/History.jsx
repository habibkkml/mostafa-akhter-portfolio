import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { SEO } from '../components/SEO';

const About = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch("./history.json")
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
    const history = data?.history;
    const seoProps = {
        title: 'History of | Mostafa Akhter',
        description: "It was through Mostafa’s work at his grandfather’s publishing company during the summers that he discovered his love for the paper industry and assumed a full-time job as Deputy Managing Director. Mostafa says he owes most of his business acumen to his grandfather, who gave him his foundational training. This knowledge, paired with his love of nature, inspired Mostafa to open a business with his brother in 2021: Magura Agriculture Park Limited. This organic agriculture farm allows a one-stop solution for people to reach farmers and fresh products with ease.",
        name: "homeContent.title",
        type: 'website',
        image: 'https://res.cloudinary.com/dfaw271y6/image/upload/v1705831588/DMD_website/DMD_photo1_hsmn2l.jpg',
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
            <section className="history">
                {history?.map((item, index) => (

                    <div className="history__content" key={index}>

                        <div className="history__image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="history__description">
                            <div className="history__description--top">
                                <h3>{item.designation}</h3>
                                <a href={item.webUrl} target='/_blank'>{item.name}</a>
                                <p>{item.company}</p>
                            </div>
                            <div className="history__description--main">
                                <h4>{item.descTitle}</h4>
                                {item.description && item.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default About