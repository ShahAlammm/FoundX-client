import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { format } from 'date-fns';
import { TItem } from "@/src/types";
import { Image } from "@nextui-org/image";

export default function ItemCard({ posts }: { posts: TItem }) {
    const { title, category, city, dateFound, images, _id, location } = posts;
    return (
        <Card isFooterBlurred className="h-[300px] w-full rounded-3xl">
            <CardHeader className="absolute top-1 z-10 flex-col items-start">
                <p className="absolute top-1 right-2 rounded-full bg-black px-2 text-tiny uppercase text-white/90">
                    {category?.name}
                </p>
                <h4 className="mt-2 rounded bg-black/30 p-1 text-xl font-medium text-white">
                    {title}
                </h4>
            </CardHeader>

            <Image
                removeWrapper
                alt="Card example background"

                className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
                src={images[0]}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-tiny">{location}, {city}</p>
                    <p className="text-black text-tiny">{format(new Date(dateFound), "dd MMMM yyyy")}</p>
                </div>
                <Button className="text-tiny text-default-100 bg-default-900" radius="full" size="sm">
                    Details
                </Button>
            </CardFooter>
        </Card>
    );
}