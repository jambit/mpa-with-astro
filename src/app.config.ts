type Config = {
    presentation: {
        title: string;
        subTitle: string;
        date: string;
        city: string;
        footerText: string;
    };
    speakers: Array<{ avatar: string; lines: string[] }>;
    content: {
        footerText: string;
    };
    last: {
        ownerLines: string[];
        locations: Array<string[]>;
        contactLines: string[];
        notice: string;
    };
};

export const config: Config = {
    presentation: {
        title: "Multi Page Applications mit Astro",
        subTitle: "Zero JS by Default!",
        date: "05. Mai 2025",
        city: "Kassel",
        footerText: "© jambit | Multi Page Applications mit Astro, 05. Mai 2025",
    },
    speakers: [
        {
            avatar: "/mpa-with-astro/avatar.png",
            lines: ["Santo Pfingsten", "santo.pfingsten@jambit.com", "blog.lusito.info"],
        },
    ],
    content: {
        footerText: "Where Innovation Works",
    },
    last: {
        ownerLines: ["Geschäftsführer:", "Franz Haßlberger &", "Thomas Rottach"],
        locations: [
            ["Friedenheimer Brücke 20", "80639 München", "+49.89.45 23 47 - 0"],
            ["Friedrichstraße 45", "70174 Stuttgart", "+49.711.21 95 28 - 0"],
            ["Klostergasse 3", "04109 Leipzig", "+49.341.22 178 - 0"],
            ["Anger 81", "99084 Erfurt", "+49.89.45 23 47 - 0"],
            ["6/4 Abelyan Street", "Yerevan 0038", "Armenia"],
        ],
        contactLines: ["office@jambit.com", "www.jambit.com"],
        notice: "", // "Dieses Dokument ist vertraulich. Eine Weitergabe an Dritte ist nur mit Zustimmung von jambit gestattet.",
    },
};
