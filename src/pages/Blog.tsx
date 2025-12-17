import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Calendar, User, MessageCircle, Share2, ChevronLeft, Send, Heart } from 'lucide-react';

interface Comment {
    id: number;
    user: string;
    date: string;
    content: string;
    avatar: string;
}

interface BlogPost {
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

const BLOG_DATA: BlogPost[] = [
    {
        id: 1,
        title: 'Welcoming Freshman Kit: Helps Students Connect With University',
        category: 'Video Design',
        date: '5 Jun 2024',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
        author: 'Sarah Jenkins',
        excerpt: 'Discover how carefully curated freshman kits are bridging the gap between new students and university culture.',
        content: (
            <>
                <p className="mb-6">The transition to university life is a monumental step for any student. It marks the beginning of independence, academic challenges, and new social circles. However, it can also be a time of anxiety and disconnection. Enter the "Freshman Kit" – a thoughtful initiative that is changing how students interact with their new alma mater from day one.</p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Than Just Swag</h3>
                <p className="mb-6">A well-designed freshman kit is not just about free pens and hoodies. It's a tangible representation of the university's brand and values. When a student receives a high-quality kit, they feel valued and welcomed. It sets a positive tone for their entire academic journey.</p>

                <blockquote className="border-l-4 border-[#1b63bb] pl-4 italic text-gray-700 mb-6">
                    "The freshman kit was my first real connection to the campus community. It made me feel like I belonged before classes even started."
                </blockquote>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Building Community</h3>
                <p className="mb-6">These kits often include guides to campus life, maps of local hangouts, and even vouchers for local businesses. This encourages students to explore their new environment together, fostering early friendships and a sense of belonging. The psychological impact of these "welcome gifts" cannot be understated in reducing homesickness and dropout rates.</p>
            </>
        ),
        tags: ['University', 'Student Life', 'Design', 'Branding'],
        comments: [
            { id: 1, user: 'Alex Thompson', date: '2 days ago', content: 'This is such a great initiative! I wish my uni did this.', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop' },
            { id: 2, user: 'Maria Garcia', date: '5 days ago', content: 'Totally agree. The design of these kits really matters.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop' }
        ],
        likes: 124
    },
    {
        id: 2,
        title: 'The Importance of Physical Outreach for Universities',
        category: 'Trends',
        date: '29 Aug 2024',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
        author: 'Dr. James Wilson',
        excerpt: 'In a digital-first world, physical outreach remains a powerful tool for universities to build lasting relationships.',
        content: (
            <>
                <p className="mb-6">While digital marketing is essential, physical outreach offers a personal touch that screens cannot replicate. University fairs, campus tours, and face-to-face counseling sessions build trust and allow prospective students to experience the campus atmosphere firsthand.</p>
                <p className="mb-6">Physical presence in local communities demonstrates commitment and accessibility. It allows universities to engage with parents and guardians directly, addressing their concerns and showcasing the support systems available for their children.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid is the Future</h3>
                <p className="mb-6">The most successful institutions are blending physical and digital strategies. A physical brochure might lead to a QR code for a virtual tour, creating a seamless omni-channel experience.</p>
            </>
        ),
        tags: ['Marketing', 'Education', 'Outreach'],
        comments: [],
        likes: 89
    },
    {
        id: 3,
        title: '5 Universities With Unique Graduation Traditions',
        category: 'Video Design',
        date: '23 Apr 2024',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
        author: 'Emily Chen',
        excerpt: 'From throwing hats to jumping in fountains, explore the most unique ways students celebrate their graduation.',
        content: (
            <>
                <p className="mb-6">Graduation is a universal milestone, but how it's celebrated varies wildly. Some traditions are solemn, while others are downright quirky. Let's take a tour of 5 universities that do things a little differently.</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Kanazawa University, Japan:</strong> Students dress in cosplay instead of traditional gowns.</li>
                    <li><strong>Wellesley College, USA:</strong> The "Hoop Rolling" race where the winner is said to be the first to achieve success.</li>
                    <li><strong>University of Coimbra, Portugal:</strong> Students rip their ribbons to symbolize the end of academic life.</li>
                </ul>
                <p className="mb-6">These traditions not only create lasting memories but also strengthen the alumni bond.</p>
            </>
        ),
        tags: ['Tradition', 'Culture', 'International'],
        comments: [
            { id: 1, user: 'Kenji Tanaka', date: '1 week ago', content: 'The cosplay tradition is hilarious and awesome!', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop' }
        ],
        likes: 210
    }
];

export function Blog() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [commentText, setCommentText] = useState('');

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
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#E91E63] selection:text-white">
            <Header />

            {/* Removed pt-20 to fix the gap issue */}
            <main className="flex-grow">
                {!selectedPost ? (
                    /* ================= LIST VIEW ================= */
                    <>
                        {/* Hero Section (Matches Services/AboutUs) */}
                        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
                                    alt="Blog Hero"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60"></div>
                            </div>
                            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                                <div className="max-w-3xl">
                                    <div className="inline-flex items-center space-x-2 text-sm font-medium tracking-wider uppercase mb-4 text-[#E91E63]">
                                        <span>Home</span>
                                        <span className="text-gray-400">/</span>
                                        <span>Blog</span>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                        Our <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Blogs.</span>
                                    </h1>
                                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                                        Explore our thoughts on design, technology, and university trends. We share what we learn to help you grow.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            {/* Featured Post (First item) */}
                            <div
                                onClick={() => handlePostClick(BLOG_DATA[0])}
                                className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-xl mb-16 aspect-[21/9] w-full"
                            >
                                <img
                                    src={BLOG_DATA[0].image}
                                    alt={BLOG_DATA[0].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 text-white">
                                    <span className="inline-block px-3 py-1 bg-[#1b63bb] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                        Featured
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-[#E91E63] transition-colors duration-300">
                                        {BLOG_DATA[0].title}
                                    </h2>
                                    <div className="flex items-center text-sm md:text-base font-medium space-x-6 text-gray-300">
                                        <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {BLOG_DATA[0].author}</span>
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {BLOG_DATA[0].date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {BLOG_DATA.slice(1).map((blog) => (
                                    <div
                                        key={blog.id}
                                        onClick={() => handlePostClick(blog)}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col"
                                    >
                                        <div className="relative h-60 overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-[#1b63bb] uppercase rounded-full shadow-sm">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {blog.date}</span>
                                                <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> {blog.comments.length} Comments</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#1b63bb] transition-colors">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                                {blog.excerpt}
                                            </p>
                                            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                                <span className="text-sm font-semibold text-gray-900">{blog.author}</span>
                                                <span className="text-[#1b63bb] text-sm font-bold flex items-center group-hover:underline">
                                                    Read More <ArrowRight className="ml-1 w-4 h-4" />
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
                        {/* Hero Image (Starts at top) */}
                        <div className="relative h-[60vh] min-h-[500px] w-full">
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute bottom-0 w-full p-8 md:p-16">
                                <div className="max-w-7xl mx-auto text-white">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center text-sm font-bold uppercase tracking-wider mb-8 hover:text-[#E91E63] transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4 mr-2" /> Back to Blogs
                                    </button>
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-6 text-gray-300">
                                        <span className="px-3 py-1 bg-[#E91E63] text-white rounded-full">{selectedPost.category}</span>
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {selectedPost.date}</span>
                                        <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {selectedPost.author}</span>
                                    </div>
                                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl">
                                        {selectedPost.title}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Content & Sidebar */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                                {/* Main Content */}
                                <div className="lg:col-span-2">
                                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
                                        {selectedPost.content}
                                    </div>

                                    {/* Tags & Share */}
                                    <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {selectedPost.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">#{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center text-gray-500 hover:text-[#E91E63] transition-colors">
                                                <Heart className="w-5 h-5 mr-2" /> {selectedPost.likes} Likes
                                            </button>
                                            <button className="flex items-center text-gray-500 hover:text-[#1b63bb] transition-colors">
                                                <Share2 className="w-5 h-5 mr-2" /> Share
                                            </button>
                                        </div>
                                    </div>

                                    {/* Comments Section */}
                                    <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                            <MessageCircle className="w-6 h-6 mr-3 text-[#1b63bb]" />
                                            Comments ({selectedPost.comments.length})
                                        </h3>

                                        {/* Comment List */}
                                        <div className="space-y-8 mb-10">
                                            {selectedPost.comments.length > 0 ? (
                                                selectedPost.comments.map(comment => (
                                                    <div key={comment.id} className="flex gap-4">
                                                        <img src={comment.avatar} alt={comment.user} className="w-10 h-10 rounded-full object-cover" />
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="font-bold text-gray-900">{comment.user}</span>
                                                                <span className="text-xs text-gray-500">• {comment.date}</span>
                                                            </div>
                                                            <p className="text-gray-700 text-sm">{comment.content}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 italic text-center py-4">No comments yet. Be the first to share your thoughts!</p>
                                            )}
                                        </div>

                                        {/* Add Comment Form */}
                                        <form onSubmit={handlePostComment} className="relative">
                                            <textarea
                                                value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                                placeholder="Write a comment..."
                                                className="w-full bg-white border border-gray-200 rounded-xl p-4 pr-12 focus:ring-2 focus:ring-[#1b63bb] focus:border-transparent outline-none resize-none transition-all"
                                                rows={3}
                                            />
                                            <button
                                                type="submit"
                                                disabled={!commentText.trim()}
                                                className="absolute bottom-4 right-4 p-2 bg-[#1b63bb] text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <Send className="w-4 h-4" />
                                            </button>
                                        </form>
                                    </div>

                                </div>

                                {/* Sidebar (Recommended) */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Recommended</h4>
                                        <div className="space-y-6">
                                            {BLOG_DATA.filter(b => b.id !== selectedPost.id).map(blog => (
                                                <div
                                                    key={blog.id}
                                                    onClick={() => handlePostClick(blog)}
                                                    className="group cursor-pointer flex gap-4 items-start"
                                                >
                                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-[#1b63bb] transition-colors">
                                                            {blog.title}
                                                        </h5>
                                                        <span className="text-xs text-gray-500">{blog.date}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                )}
            </main>

            <Footer />
        </div>
    );
}
