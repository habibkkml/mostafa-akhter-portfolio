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
        description: "As a successful businessman, Mr. Mostafa Jarif Mohiuddin has made a name for himself in the fashion industry and continues to be a key figure in the family business. His vision and drive have helped to expand the operations of Khoshroz Kitab Mahal and NDC Auto Brick, while also establishing new ventures in the fashion industry and agriculture sector.",
        name: "Mostafa Akhter",
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