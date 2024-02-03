import React from 'react';
import ImageTextCard from './ImageTextCard';

const AboutHome: React.FC = () => {
    const cards = [
        {
            image: "plugin-explain.png",
            imageWidth: 550,
            title: "Unmatched expansion with PowerNukkitX plugins",
            description: "PowerNukkitX revolutionizes your Minecraft Bedrock server experience with advanced plugin support. This feature allows server administrators to customize and enrich their game environment with unique mechanics, advanced features and custom optimizations. Discover unrivalled flexibility in shaping your server to your community's preferences, making PowerNukkitX the ultimate solution for dynamic, adaptable Minecraft Bedrock servers.",
            imagePosition: "right"
        },
        {
            image: "servercounter.png",
            imageWidth: 450,
            title: "Powering 0k+ players",
            description: "PowerNukkitX stands as a robust force in the realm of Minecraft Bedrock server software. Empowered by the versatility of the Java language, PowerNukkitX not only caters to the needs of individual players but also scales seamlessly to meet the demands of expansive multiplayer networks. Crafted with a focus on utility and high-performance capabilities, PowerNukkitX confidently navigates the intricacies of Minecraft Bedrock, ensuring a reliable and responsive server environment for both smaller, single-server setups and larger, interconnected server networks.",
            imagePosition: "left"
        }
    ];

    return (
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-20">
                {cards.map((card, index) => (
                    <ImageTextCard
                        key={index}
                        image={card.image}
                        imageWidth={card.imageWidth}
                        title={card.title}
                        description={card.description}
                        imagePosition={card.imagePosition as "left" | "right"}
                    />
                ))}
            </div>
        </section>
    );
};

export default AboutHome;