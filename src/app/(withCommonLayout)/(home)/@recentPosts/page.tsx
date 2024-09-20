import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { getRecentPosts } from "@/src/services/RecentPost";
import { TItem } from "@/src/types";
import Container from "@/src/components/UI/Container";
import ItemCard from "@/src/components/UI/Card";


const RecentPost = async () => {
    const { data: posts } = await getRecentPosts();
    return (
        <Container>
            <div className="section-title my-8">
                <h1 className="text-2xl text-center mb-2">Recently Found Items</h1>
                <p className="text-center">
                    A list of recently found items that have been found and reported.
                </p>
            </div>
            <div className="my-8 grid justify-center gap-10 grid-cols-1 md:grid-cols-3">

                {posts.map((item: TItem) => (
                    <ItemCard key={item._id} posts={item} />
                ))}

            </div>
            <div className="flex justify-center">
                <Button className="rounded-md bg-default-900 text-default" size="md">
                    <Link href="/found-items">See All</Link>
                </Button>
            </div>
        </Container>
    );
};

export default RecentPost;