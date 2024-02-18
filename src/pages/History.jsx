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
        description: "Meet Mostafa Jarif Mohiuddin, a visionary in fashion & business. Leading Khoshroz Kitab Mahal & NDC Auto Brick, he's shaping industries.",
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