interface MainFeaturedPostProps {
    post: {
        description: string;
        image: string;
        imageText: string;
        linkText: string;
        title: string;
    };
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
    const {post} = props;


    const mainFeaturedPost = {
        title: 'Welcome to Ayurveda',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };


    function MainFeaturedPost(props: {
        post: { imageText: string, image: string, description: string, linkText: string, title: string }
    }) {
        return null;
    }


    /*
    export default function Blog() {
        return (
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog" sections={sections} />
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                    </main>

        );
    }

     */
}