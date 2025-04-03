import { getCollection, type AnyEntryMap } from "astro:content";

export type SlideCollectionEntry = AnyEntryMap["slides"][string];

export type Slide = {
    params: { slug: string };
    props: {
        slide: SlideCollectionEntry;
        slideNumber: number;
        index: string;
        slidePaths: string[];
        agendaHeadings: string[];
    };
};

export async function getSlides(): Promise<Slide[]> {
    const slidesCollection = await getCollection("slides");
    const slidePaths: string[] = ["/"];
    const agendaHeadings: string[] = [];

    const sortedCollection = slidesCollection.sort((a, b) => a.id.localeCompare(b.id));
    const slides: Slide[] = [];
    let lastIndex: string = "";
    for (const entry of sortedCollection) {
        const [index, _, ...slugParts] = entry.id.split("-");
        const slug = slugParts.join("-");
        if (lastIndex !== index && entry.data.type !== "agenda") {
            lastIndex = index;
            agendaHeadings.push(entry.data.title);
        }

        slides.push({
            params: { slug },
            props: {
                slide: entry,
                slideNumber: slides.length + 1,
                index,
                slidePaths,
                agendaHeadings,
            },
        });
        slidePaths.push(`/slide/${slug}`);
    }

    slidePaths.push("/end");

    return slides;
}
