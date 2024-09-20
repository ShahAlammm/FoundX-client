import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { format } from 'date-fns';
import { TItem } from "@/src/types";

export default function ItemCard({ posts }: { posts: TItem }) {
    const { title, category, city, dateFound, images, _id, location } = posts;
    return (
        <Card isFooterBlurred className="h-[300px] w-full rounded-3xl">
            <CardHeader className="absolute z-10 top-1 flex-col items-end">
                <p className="text-tiny bg-default-900 px-1 rounded-lg text-default-100  uppercase font-bold">{category?.name}</p>
            </CardHeader>
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">{title}</h4>
            </CardHeader>
            <Image

                height={400}
                width={300}
                alt="Card example background"
                className="h-[80%] w-[90%]"
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