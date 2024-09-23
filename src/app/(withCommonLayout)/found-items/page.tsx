import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import AxiosInstance from "@/src/lib/AxiosInstance";

const FoundItems = async () => {

    const { data: posts } = await AxiosInstance.get("/items");

    const post = [
        {
            _id: "1",
            title: "Title 1",
            description: "Description 1",
            location: "Location 1",
            dateFound: new Date(),
            images: [],
        },

        {
            _id: "2",
            title: "Title 2",
            description: "Description 2",
            location: "Location 2",
            dateFound: new Date(),
            images: [],
        },

    ];
    return (
        <Container>
            <div className="mx-auto my-3 space-y-5 max-w-[720px]">
                {
                    posts?.data?.map((item: any) => (
                        <Post key={item._id} post={item} />
                    ))
                }
            </div>
        </Container>
    );
};

export default FoundItems;