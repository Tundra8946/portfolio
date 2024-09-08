import StatusIcon from './StatusIcon'; // Adjust the import path if necessary
import statusStyles from './statusStyles'; // Adjust the import path if necessary

export default function Hero() {
    const cardData = [
        {
            image: TFRCH4,
            alt: "The Freedom Riders Chpt 4",
            title: "The Freedom Riders Chpt 4",
            description: "We created a website for a motorcycle group called TFR Chapter 4. They requested a simple website so they can advertise their group.",
            link: "https://tfrch4.org",
            project: "tfrch4",
            status: "Active" // Example status
        },
        {
            image: ChatManager,
            alt: "Chat Manager",
            title: "Chat Manager",
            description: "Simple bot made for some automation for a customer.",
            link: null,
            project: "chatmanager",
            status: "Pending" // Example status
        },
        {
            image: Stratos,
            alt: "Stratos Bot",
            title: "Stratos Bot",
            description: "Simple Discord bot for our server to handle some basic things just to make our lives a little easier.",
            link: null,
            project: "stratos-bot",
            status: "Disabled" // Example status
        },
        {
            image: Vector,
            alt: "Vector RP Bot",
            title: "Vector RP Bot",
            description: "We created a simple Discord bot for Vector RP to manage their whitelisted cars for a GTARP (Fivem) server and just to manage their Discord server.",
            link: null,
            project: "vectorrp-bot",
            status: "Default" // Example status
        }
    ];

    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="relative pt-10 pb-16 md:pt-16 md:pb-24">
                    <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cardData.map((card, index) => (
                                <div key={index} className={`group flex flex-col h-full bg-white border border-gray-200 shadow-lg rounded-xl dark:bg-gray-850 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-transform transform hover:scale-105 ${statusStyles(card.status)}`}>
                                    <div className="h-52 flex flex-col justify-center items-center bg-slate-700 rounded-t-xl">
                                        <Image src={card.image} alt={card.alt} height={112} width={112} />
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                                            {card.title.includes("Discord") ? "Discord Bot" : "Wordpress Website"}
                                        </span>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                            {card.title}
                                        </h3>
                                        <p className="mt-3 text-gray-500 dark:text-gray-400">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center p-4">
                                        <StatusIcon status={card.status} />
                                        <span className={`ml-2 ${statusStyles(card.status)}`}>{card.status}</span>
                                    </div>
                                    {card.link ? (
                                        <Links link={card.link} project={card.project} />
                                    ) : (
                                        <Link project={card.project} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
