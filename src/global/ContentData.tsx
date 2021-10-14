import { IauthContentPage, IauthQuestion } from "./Interfaces";

export const questionData: Array<IauthQuestion> = [
    {
        title: 'What is Netflix?',
        content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        secondContent: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'
    },
    {
        title: 'How much does Netflix cost?',
        content: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.'
    },
    {
        title: 'Where can I watch?',
        secondContent: 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.',
        content: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
    },
    {
        title: 'How do I cancel?',
        content: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        title: 'How do I cancel?',
        content: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        title: 'What can I watch on Netflix?',
        content: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
        title: 'Is Netflix good for kids?',
        secondContent: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
        content: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
    }
]

export const authContentData: Array<IauthContentPage> = [
    {
        video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v?fbclid=IwAR0k2Mk4WZlYeb_5HKw7f_ZYssxeiGMiMw0Qz5W2zL3Ok4iYOPOQ4V0pb-4',
        title: 'Enjoy on your TV.',
        description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png?fbclid=IwAR3kXJMdN9ymijpBEFXI7zbDEez4q5mVg06M2aYWgWS82DZ-0b4MR1fR42w'
    },
    {
        reverse: true,
        title: 'Download your shows to watch offline.',
        description: 'Save your favorites easily and always have something to watch.',
        img: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
    },
    {
        title: 'Watch everywhere.',
        description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
    },
    {
        reverse: true,
        img: "https://occ-0-3687-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
        title: 'Create profiles for kids.',
        description: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
    },
]