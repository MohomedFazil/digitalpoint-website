import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ArrowRight, Calendar, User, ChevronLeft } from 'lucide-react';

interface Comment {
    id: number;
    user: string;
    date: string;
    content: string;
    avatar: string;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
    author: string;
    excerpt: string;
    content: React.ReactNode;
    tags: string[];
    comments: Comment[];
    likes: number;
}

export const BLOG_DATA: BlogPost[] = [
    {
        id: 1,
        title: 'Creating Impactful Posters: How Prints Help Your Brand Stand Out',
        category: 'Printing',
        date: '5 Jan 2026',
        image: "/assets/projects-img/project01.jpeg",
        author: 'Digital Point',
        excerpt: 'Discover how high-quality posters can elevate your brand visibility and make your campaigns memorable.',
        content: (
            <>
                <p>Posters remain one of the most powerful tools for businesses to communicate messages clearly and create a lasting impression. At Digital Point, we design and print posters that combine bold visuals, clean typography, and cohesive branding. Each poster is thoughtfully crafted to ensure your message resonates with your audience and enhances overall brand visibility.</p>
                <p>Our design process prioritizes clarity, creativity, and impact. We select color palettes that evoke emotion, fonts that are readable from a distance, and graphics that strengthen your brand story. Collaboration with clients ensures that every poster meets the campaign’s purpose, whether for promotions, events, or awareness, leaving a memorable visual imprint.</p>
                <p>High-quality materials and professional printing techniques make our posters stand out. We use premium papers, durable finishes, and eco-friendly inks to maintain vibrancy and longevity. Digital Point ensures that whether displayed indoors or outdoors, your posters withstand handling and environmental factors, creating a professional and visually appealing representation of your brand.</p>
            </>
        ),
        tags: ['Printing', 'Posters', 'Branding'],
        comments: [],
        likes: 120
    },
    {
        id: 2,
        title: 'Banner Printing Tips: Make Your Event Unforgettable',
        category: 'Printing',
        date: '15 Jan 2026',
        image: "/assets/projects-img/project09.jpeg",
        author: 'Digital Point',
        excerpt: 'Learn how to design banners that draw attention and create a memorable impression for any event.',
        content: (
            <>
                <p>Banners are an essential medium for promoting events, products, or campaigns. At Digital Point, we craft banners that are visually striking, durable, and tailored to your specific needs. Every banner is designed to grab attention, convey messages effectively, and reinforce your brand presence in both indoor and outdoor environments.</p>
                <p>Design plays a crucial role in banner effectiveness. We focus on vibrant color schemes, readable typography, and balanced layouts that attract viewers from afar. Working closely with clients, we ensure the banner aligns with the event’s objectives, target audience, and branding guidelines, resulting in impactful communication and strong visual appeal.</p>
                <p>Material selection and finishing are critical for lasting results. Digital Point provides premium materials, eco-friendly inks, and professional mounting options to ensure durability and aesthetic quality. Our banners withstand weather conditions, wear and tear, and repeated usage, giving your events and campaigns a polished, professional look that leaves a lasting impression.</p>
            </>
        ),
        tags: ['Banners', 'Event', 'Printing'],
        comments: [],
        likes: 98
    },
    {
        id: 3,
        title: 'Sticker and Label Design: Boost Your Product’s Appeal',
        category: 'Printing',
        date: '22 Jan 2026',
        image: "/assets/projects-img/project18.jpeg",
        author: 'Digital Point',
        excerpt: 'Discover how well-designed stickers and labels can enhance product recognition and sales.',
        content: (
            <>
                <p>Custom stickers and labels are essential tools for branding and marketing. At Digital Point, we design and print labels that help products stand out on shelves and create memorable brand experiences. By integrating your brand colors, typography, and unique visuals, our labels capture attention and foster recognition across your customer base.</p>
                <p>Every design is carefully crafted to balance aesthetics and readability. We focus on font size, color contrast, and graphic placement to ensure the message is clear and visually appealing. Our team collaborates with clients to align designs with packaging requirements and marketing goals, producing labels that reinforce brand identity and customer engagement.</p>
                <p>High-quality printing materials and techniques are used to create durable, professional stickers and labels. Digital Point ensures that every product label is resistant to wear, moisture, and fading. Whether for retail products, promotional items, or packaging, our labels elevate your brand presentation and leave a lasting impression on customers.</p>
            </>
        ),
        tags: ['Stickers', 'Labels', 'Branding'],
        comments: [],
        likes: 110
    },
    {
        id: 4,
        title: 'Flex Banner Printing: Durable and Eye-Catching',
        category: 'Printing',
        date: '30 Jan 2026',
        image: "/assets/projects-img/project13.jpeg",
        author: 'Digital Point',
        excerpt: 'Flex banners are perfect for outdoor promotions. Learn how to make yours more effective.',
        content: (
            <>
                <p>Flex banners are a powerful way to promote brands, products, and events. At Digital Point, we specialize in producing high-quality flex banners that are durable, weather-resistant, and visually impactful. Our banners help businesses communicate effectively in outdoor spaces, attracting attention from a distance and leaving a lasting impression on viewers.</p>
                <p>The design process focuses on size, color, typography, and layout to maximize visibility and engagement. We work closely with clients to ensure that each banner reflects the brand’s message, aligns with the campaign objectives, and captures audience attention, making it an effective marketing tool for any occasion or event.</p>
                <p>Material quality and finishing are key to long-lasting banners. Digital Point uses premium materials, eco-friendly inks, and professional finishing techniques to ensure durability and vibrant colors. Our flex banners withstand outdoor conditions while maintaining visual appeal, providing reliable, professional, and impactful promotional displays for every business need.</p>
            </>
        ),
        tags: ['Flex Banner', 'Printing', 'Marketing'],
        comments: [],
        likes: 90
    },
    {
        id: 5,
        title: 'Light and Name Boards Printing: Make Your Business Shine',
        category: 'Printing',
        date: '5 Feb 2026',
        image: "/assets/projects-img/project05.jpeg",
        author: 'Digital Point',
        excerpt: 'Custom light boards and name signs help your business stand out in a crowded marketplace.',
        content: (
            <>
                <p>Light and name boards are essential for creating a strong business identity. Digital Point designs and prints illuminated signs and nameboards that stand out and communicate professionalism. Each board is carefully created to combine visibility, durability, and brand representation, helping businesses leave a memorable impression on clients and visitors alike.</p>
                <p>Design considerations include color, lighting, typography, and material selection. Our team works closely with clients to ensure that each board reflects the brand’s values, fits the intended space, and attracts attention effectively. These details enhance readability and visual appeal, increasing brand awareness and recognition.</p>
                <p>High-quality materials, advanced printing, and finishing techniques ensure long-lasting and vibrant results. Digital Point uses weather-resistant materials and premium finishes for both indoor and outdoor applications. Our light and name boards are not only functional but also visually captivating, elevating the professional appearance of any business or establishment.</p>
            </>
        ),
        tags: ['Signage', 'Printing', 'Business Branding'],
        comments: [],
        likes: 105
    },
    {
        id: 6,
        title: 'Event Orientation Kits: Impress Your Audience',
        category: 'Printing',
        date: '12 Feb 2026',
        image: "/assets/projects-img/project11.jpeg",
        author: 'Digital Point',
        excerpt: 'Customized orientation kits help your events look professional and leave a lasting impression.',
        content: (
            <>
                <p>Event orientation kits are essential for providing attendees with a memorable experience. Digital Point designs and prints high-quality kits including brochures, folders, and welcome items. These kits communicate your brand message, guide participants, and create a professional, cohesive impression for conferences, workshops, or corporate events.</p>
                <p>We focus on customization to ensure each kit aligns with event themes and branding. Carefully selected colors, typography, and layout make the materials visually appealing and easy to navigate. Our team works closely with clients to create kits that are both functional and memorable.</p>
                <p>Quality printing materials and finishing options enhance the overall impression of each kit. Digital Point uses durable papers, eco-friendly inks, and professional binding techniques to ensure that orientation kits withstand handling while maintaining visual quality. These thoughtful details reflect professionalism and leave attendees with a lasting positive experience.</p>
            </>
        ),
        tags: ['Events', 'Printing', 'Branding'],
        comments: [],
        likes: 88
    },
    {
        id: 7,
        title: 'Creative Flyer Design: Attract Your Customers',
        category: 'Printing',
        date: '20 Feb 2026',
        image: "/assets/projects-img/project07.jpeg",
        author: 'Digital Point',
        excerpt: 'Well-designed flyers can dramatically improve your outreach and engagement.',
        content: (
            <>
                <p>Flyers are a versatile and cost-effective way to promote products, services, and events. Digital Point designs and prints creative flyers that capture attention, communicate messages clearly, and reflect brand identity. Each flyer is carefully crafted to ensure readability, visual appeal, and maximum engagement with the target audience.</p>
                <p>We emphasize strong design elements including typography, imagery, layout, and color schemes that resonate with your audience. By aligning with brand guidelines, our flyers enhance recognition and encourage interaction. Collaboration with clients ensures that the final design meets marketing objectives and communicates key information effectively.</p>
                <p>Premium printing materials and finishing techniques ensure flyers look professional and durable. Digital Point uses high-quality paper, inks, and finishes to produce flyers that maintain visual appeal over time. Whether distributed physically or included in marketing packages, our flyers leave a lasting impression that supports your brand’s message.</p>
            </>
        ),
        tags: ['Flyers', 'Printing', 'Marketing'],
        comments: [],
        likes: 95
    },
    {
        id: 8,
        title: 'Custom Flag Printing: Showcase Your Brand Everywhere',
        category: 'Printing',
        date: '28 Feb 2026',
        image: "/assets/projects-img/project19.jpeg",
        author: 'Digital Point',
        excerpt: 'Flags are a great way to represent your brand at events and outdoor spaces.',
        content: (
            <>
                <p>Custom flags are an impactful tool for brand visibility at events, exhibitions, and outdoor spaces. Digital Point designs and prints high-quality flags that are durable, vibrant, and visually appealing. Each flag is tailored to reflect your brand colors, logos, and messaging, enhancing recognition and audience engagement wherever displayed.</p>
                <p>Design is essential to creating attention-grabbing flags. We focus on bold colors, striking graphics, and readable typography that maintain clarity even in motion or from a distance. Collaborating with clients ensures each flag aligns with marketing objectives and communicates the intended message effectively.</p>
                <p>Premium materials and professional printing techniques guarantee that flags withstand weather conditions and retain vibrant colors. Digital Point uses high-quality fabrics, eco-friendly inks, and durable finishing to ensure long-lasting, visually appealing results. Custom flags create a professional presence and maximize brand exposure wherever they are displayed.</p>
            </>
        ),
        tags: ['Flags', 'Printing', 'Branding'],
        comments: [],
        likes: 102
    },
    {
        id: 9,
        title: 'Transparent Sticker Printing: Creative and Versatile',
        category: 'Printing',
        date: '8 Mar 2026',
        image: "/assets/projects-img/project20.jpeg",
        author: 'Digital Point',
        excerpt: 'Transparent stickers are perfect for product packaging and promotional items.',
        content: (
            <>
                <p>Transparent stickers are a flexible branding tool that enhances product packaging and marketing items. Digital Point designs and prints creative, high-quality transparent stickers that effectively showcase logos, graphics, and messages without obstructing the product. Each sticker is crafted to complement the item while maximizing visual appeal and brand recognition.</p>
                <p>Design considerations include color contrast, die-cut shapes, and typography, ensuring clarity and aesthetic appeal. Digital Point collaborates with clients to create stickers that align with brand identity and marketing objectives. Proper design increases visibility, customer engagement, and overall product presentation.</p>
                <p>We use premium materials, durable inks, and professional finishing to produce stickers that withstand wear, moisture, and handling. Transparent stickers maintain clarity and vibrancy over time, providing a professional and polished branding solution that leaves a lasting impression on customers across products and promotional materials.</p>
            </>
        ),
        tags: ['Stickers', 'Printing', 'Design'],
        comments: [],
        likes: 97
    },
    {
        id: 10,
        title: 'Marketing Collateral: Elevate Your Brand Identity',
        category: 'Printing',
        date: '15 Mar 2026',
        image: "/assets/projects-img/project10.jpeg",
        author: 'Digital Point',
        excerpt: 'From brochures to business cards, cohesive marketing materials strengthen your brand presence.',
        content: (
            <>
                <p>Marketing collateral is a critical component of brand communication. Digital Point designs and prints high-quality brochures, business cards, and promotional materials that maintain visual consistency and effectively convey your brand message. Cohesive collateral ensures that every touchpoint reinforces brand identity and engages customers meaningfully.</p>
                <p>Design is tailored to each client’s objectives, focusing on typography, color schemes, layout, and imagery. We collaborate closely with clients to create materials that are visually appealing, informative, and aligned with marketing campaigns, ensuring each piece enhances brand recognition and supports business goals.</p>
                <p>Premium materials, professional printing techniques, and attention to finishing details ensure durable, high-quality results. Digital Point produces collateral that looks and feels professional, withstands handling, and makes a positive impression. Our approach elevates brand visibility and leaves a lasting, memorable impact on your audience.</p>
            </>
        ),
        tags: ['Marketing', 'Printing', 'Branding'],
        comments: [],
        likes: 115
    }
];


export function Blog() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [commentText, setCommentText] = useState('');
    const location = useLocation();

    useEffect(() => {
        const state = location.state as { postId?: number } | null;
        if (state?.postId) {
            const post = BLOG_DATA.find(b => b.id === state.postId);
            if (post) {
                setSelectedPost(post);
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }
    }, [location]);

    // Handlers
    const handlePostClick = (post: BlogPost) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedPost(post);
    };

    const handleBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedPost(null);
    };

    const handlePostComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim() || !selectedPost) return;

        const newComment: Comment = {
            id: Date.now(),
            user: 'Guest User',
            date: 'Just now',
            content: commentText,
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop'
        };

        setSelectedPost({
            ...selectedPost,
            comments: [...selectedPost.comments, newComment]
        });
        setCommentText('');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-['Montserrat'] selection:bg-[#E91E63] selection:text-white">

            <main className="flex-grow">
                {!selectedPost ? (
                    /* ================= LIST VIEW ================= */
                    <>
                        {/* Hero Section */}
                        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505] font-['Outfit']">
                            {/* Background Visuals */}
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
                                    alt="Blog Hero"
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-[#1b63bb]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#E91E63]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 animate-pulse [animation-delay:1s]" />

                            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                                <div className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.5em] uppercase mb-12 text-[#E91E63] animate-fade-in-up bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                                    <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-ping"></span>
                                    <span>Latest Insights</span>
                                </div>

                                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-none animate-fade-in-up select-none uppercase overflow-visible">
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
                                        Our
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_50px_rgba(233,30,99,0.3)] italic mt-2 pr-8">
                                        Stories.
                                    </span>
                                </h1>

                                <div className="relative max-w-3xl animate-fade-in-up [animation-delay:0.4s]">
                                    <p className="text-white/95 text-lg md:text-2xl lg:text-3xl leading-relaxed font-bold tracking-wider [text-shadow:_0_4px_15px_rgba(0,0,0,0.5)]">
                                        <span className="opacity-80 font-light italic">Insights, trends, and innovation.</span><br />
                                        <span>Mastering the art of print.</span>


                                    </p>
                                </div>
                            </div>

                            {/* Bottom Gradient Fade */}
                            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
                        </section>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
                            {/* Featured Post */}
                            <div
                                onClick={() => handlePostClick(BLOG_DATA[0])}
                                className="group cursor-pointer relative rounded-[3rem] overflow-hidden shadow-2xl mb-24 aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] w-full border border-gray-100 transform transition-all duration-500 hover:-translate-y-2"
                            >
                                <img
                                    src={BLOG_DATA[0].image}
                                    alt={BLOG_DATA[0].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-100 sm:via-gray-900/40 sm:opacity-90" />
                                <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16 w-full lg:w-2/3 text-white">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                        <span className="px-4 py-1.5 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                                            Featured
                                        </span>
                                        <div className="flex items-center text-xs font-bold text-white/60 space-x-4">
                                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-[#E91E63]" /> {BLOG_DATA[0].date}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1b63bb] group-hover:to-[#E91E63] transition-all duration-500 uppercase tracking-tight">
                                        {BLOG_DATA[0].title}
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                            <User className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Authored by</p>
                                            <p className="font-black text-white uppercase tracking-tight">{BLOG_DATA[0].author}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-20">
                                <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-xs mb-4 block">Archive</span>
                                <h2 className="text-5xl font-black text-gray-900 tracking-tighter uppercase mb-2 overflow-visible">More <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] to-[#E91E63] italic pr-4">Insights</span></h2>
                            </div>

                            {/* Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {BLOG_DATA.slice(1).map((blog) => (
                                    <div
                                        key={blog.id}
                                        onClick={() => handlePostClick(blog)}
                                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group flex flex-col border border-gray-50"
                                    >
                                        <div className="relative h-72 overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-black text-[#1b63bb] uppercase tracking-[0.2em] rounded-full shadow-lg">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-10 flex-grow flex flex-col">
                                            <div className="flex items-center text-[10px] font-black text-gray-400 mb-6 space-x-6 uppercase tracking-widest">
                                                <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-2 text-[#E91E63]" /> {blog.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight group-hover:text-[#E91E63] transition-colors uppercase tracking-tight">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-500 font-medium line-clamp-3 mb-8 flex-grow leading-relaxed">
                                                {blog.excerpt}
                                            </p>
                                            <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                                                        <User className="w-4 h-4 text-[#1b63bb]" />
                                                    </div>
                                                    <span className="text-[10px] font-black text-gray-900 uppercase tracking-wider">{blog.author}</span>
                                                </div>
                                                <span className="text-[#1b63bb] font-black text-[10px] uppercase tracking-[0.3em] flex items-center group-hover:text-[#E91E63] transition-colors">
                                                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    /* ================= DETAIL VIEW ================= */
                    <article className="bg-white">
                        {/* Detail Hero Section */}
                        <div className="relative h-[80vh] min-h-[700px] w-full overflow-hidden flex items-end">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent sm:via-gray-900/40" />
                            <div className="relative z-10 w-full pb-20">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                                    <button
                                        onClick={handleBack}
                                        className="group inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:text-[#E91E63] transition-colors bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
                                    >
                                        <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                                    </button>
                                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                                        <span className="px-6 py-2 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] text-white rounded-full shadow-xl shadow-pink-500/20">{selectedPost.category}</span>
                                        <span className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10"><Calendar className="w-4 h-4 mr-3 text-[#E91E63]" /> {selectedPost.date}</span>
                                        <span className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10"><User className="w-4 h-4 mr-3 text-[#1b63bb]" /> {selectedPost.author}</span>
                                    </div>
                                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-none mb-8 max-w-5xl uppercase tracking-tighter">
                                        {selectedPost.title}
                                    </h1>
                                    <div className="w-32 h-2 bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content & Sidebar */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                                {/* Main Content */}
                                <div className="lg:col-span-8">
                                    <div className="prose prose-xl prose-gray max-w-none text-gray-600 font-medium leading-[2] first-letter:text-7xl first-letter:font-black first-letter:text-[#E91E63] first-letter:mr-4 first-letter:float-left first-letter:uppercase first-letter:leading-none">
                                        {selectedPost.content}
                                    </div>

                                    {/* Tags */}
                                    <div className="mt-20 pt-10 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-3">
                                            {selectedPost.tags.map(tag => (
                                                <span key={tag} className="px-6 py-2 bg-gray-50 text-gray-400 text-[10px] uppercase font-black tracking-widest rounded-xl border border-gray-100 hover:border-[#1b63bb]/20 transition-colors">#{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4">
                                    <div className="sticky top-32 space-y-10">
                                        <div>
                                            <div className="mb-6">
                                                <span className="text-[#1b63bb] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Recommended</span>
                                                <h4 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Must <span className="text-[#E91E63] italic">Reads</span></h4>
                                            </div>
                                            <div className="space-y-4">
                                                {BLOG_DATA.filter(b => b.id !== selectedPost.id).slice(0, 4).map(blog => (
                                                    <div
                                                        key={blog.id}
                                                        onClick={() => handlePostClick(blog)}
                                                        className="group cursor-pointer flex gap-4 items-center p-3 rounded-[2rem] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                                                    >
                                                        <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                                                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                        </div>
                                                        <div>
                                                            <span className="text-[10px] font-black text-[#E91E63] uppercase tracking-widest block mb-2">{blog.category}</span>
                                                            <h5 className="font-black text-gray-900 text-sm leading-tight mb-2 group-hover:text-[#1b63bb] transition-colors uppercase tracking-tight line-clamp-2">
                                                                {blog.title}
                                                            </h5>
                                                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{blog.date}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                            </div>
                        </div>
                    </article>
                )}
            </main>

            <Footer />
        </div>
    );
}

