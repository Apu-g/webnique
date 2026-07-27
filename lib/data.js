// ─── lib/data.js — All static data for the Truus website ─────────────────────
// ES Module exports — imported by React components

// Marquee brand logos
export const brands = [
    { name: "Car Fit", src: "/images/clients/carfit.png" },
    { name: "ELLZBURGER", src: "/images/clients/burger-2.png" },
    { name: "Camera Service Centre", src: "/images/clients/camera.png" },
    { name: "SU", src: "/images/clients/su.png" },
    { name: "My Fruit Bowl", src: "/images/clients/frute.png" },
    { name: "Lakeview Camp", src: "/images/clients/lakeview.png" },
    { name: "Proflex Window Profiles", src: "/images/clients/pwp.png" },
    { name: "Serene Aquatics", src: "/images/clients/serene.png" },
    { name: "Shri Venkateshwara Enterprises", src: "/images/clients/SVE.png" },
    { name: "Saravana Industries", src: "/images/clients/saravana.png" },
    { name: "Microbeworks Scientific", src: "/images/clients/microbework.png" },
    { name: "Only Frnz", src: "/images/clients/onlyfrnz.png" },
    { name: "Astratec", src: "/images/clients/ast.png" },
    { name: "KGK", src: "/images/clients/kgk.png" },
    { name: "Eventzr", src: "/images/clients/eventzr.png" },
    { name: "VVM Strategies & Solutions", src: "/images/clients/vvm.png" }
];

// Marquee background colors
export const colors = [
    "var(--color-green)",
    "var(--color-lightblue)",
    "var(--color-darkblue)",
    "var(--color-lightgreen)",
    "var(--color-orange)",
    "var(--color-maroon)",
    "var(--color-pink)"
];

// Footer social icon links + SVG markup
export const SOCIAL_ICONS = [
    {
        href: 'https://www.linkedin.com/company/webnique-digital-solutions/',
        label: 'LinkedIn',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M35.9969 11.5666C35.9721 11.0166 35.8451 10.4418 35.9164 9.88408C36.0248 9.1955 36.0031 8.51315 35.856 7.82457C35.5029 5.31796 33.4912 3.9003 31.0288 4.22901C29.4848 4.3365 27.9935 4.33494 26.4603 4.23212C25.0355 4.21654 23.6092 4.20875 22.1845 4.11528C21.5278 4.06855 20.8511 4.18695 20.213 4.17604C18.5869 4.09503 16.9299 4.00623 15.3007 4C14.2074 4.07634 13.1063 3.96417 12.0222 4.12775C10.5943 4.13553 9.13087 3.81617 7.73089 4.21966C5.8756 4.53902 4.31146 5.98317 4.46013 7.96166C4.47717 8.73593 4.34089 9.50084 4.30217 10.2735C4.37186 11.3469 4.32385 12.4234 4.32076 13.4952C4.33624 13.9049 4.40283 14.3162 4.39974 14.7259C4.39354 15.2992 4.12408 15.8289 4.16434 16.3991C4.26346 18.0115 4.23093 19.6379 4.17828 21.2596C4.19067 22.3315 4.25107 23.4064 4.22009 24.4689C4.25262 25.6404 4.08226 26.801 4.00018 27.9647C3.99399 29.1814 4.14421 30.4075 4.39664 31.5992C4.5004 32.2489 4.50969 32.9608 4.89066 33.5248C5.22517 34.0716 5.81366 34.4766 6.32471 34.8895C6.64838 35.1465 6.98134 35.4098 7.3778 35.5391C8.50522 35.7946 9.69768 35.5827 10.8437 35.7042C11.9804 35.8024 13.0985 35.8647 14.2383 35.8117C16.5799 35.98 18.9416 35.9161 21.294 35.8818C23.2283 35.8008 25.1703 36.0376 27.1045 35.8678C28.9227 35.846 30.7795 36.2168 32.5651 35.8039C33.7064 35.3646 34.9128 34.6246 35.3341 33.4017C35.5695 32.7131 35.6066 31.9778 35.6531 31.2565C35.7956 29.0334 35.8018 26.8166 35.7042 24.5982C35.8467 23.1073 35.7971 21.5852 35.8715 20.0835C36.0232 17.2512 35.8513 14.4097 36 11.5915V11.5619L35.9969 11.5666ZM9.43286 12.1227C9.42666 11.5681 9.50255 10.9948 9.82157 10.5353C10.4209 9.63793 11.7047 9.08177 12.651 9.64884C14.0928 10.339 14.3901 12.4951 13.289 13.5996C13.0459 13.8551 12.716 13.9657 12.366 13.9844C11.6846 13.9844 10.8421 14.2041 10.2691 13.7741C9.81693 13.3519 9.42821 12.7802 9.43286 12.1492V12.1212V12.1227ZM13.9936 18.7452C13.9782 18.9493 13.9209 19.1503 13.8775 19.3513C13.718 20.0944 13.8883 20.8624 13.8574 21.6164C13.7861 23.6292 13.7335 25.6544 13.8109 27.6703C13.8403 28.4149 13.8728 29.1658 13.8992 29.9105C13.9658 30.624 13.5848 31.1272 12.86 31.1926C12.0423 31.2752 11.22 31.2783 10.3961 31.1817C10.1886 31.1552 9.97024 31.0851 9.82931 30.9371C9.52578 30.6084 9.57069 30.0211 9.55985 29.5833C9.57688 28.7312 9.6187 27.8401 9.54127 26.9879C9.49945 26.5362 9.57998 26.089 9.56295 25.6373C9.40189 24.1417 9.37866 22.6259 9.3229 21.121C9.34613 20.1177 9.47003 19.1145 9.501 18.1081C9.55675 17.5675 9.40808 16.7013 10.057 16.5066C11.0961 16.3742 12.1415 16.4162 13.2255 16.3601C13.7613 16.3477 13.9472 16.6639 13.9038 17.2045C13.8465 17.7155 14.0076 18.2125 13.9967 18.7203V18.7484L13.9936 18.7452ZM31.1667 27.6111C31.097 28.3713 31.1403 29.1658 31.0877 29.9292C31.0877 30.3561 30.795 30.6957 30.366 30.7299C29.4074 30.8795 28.4395 30.7408 27.4514 30.7814C27.0689 30.8187 26.7561 30.691 26.7638 30.2501C26.7437 28.6112 26.8552 26.9568 26.5377 25.335C26.4634 24.9518 26.468 24.5639 26.4928 24.176C26.5439 23.3784 26.2884 22.5979 26.2698 21.808C26.2466 21.3422 26.2698 20.7923 25.957 20.4215C24.9984 19.5164 23.6371 19.2905 22.519 20.0492C20.9533 21.0088 21.3126 23.1182 21.1624 24.6994C21.1701 25.2743 21.0617 25.8336 21.0183 26.4006C21.1747 27.7264 21.0369 29.1082 21.0648 30.4402C21.0849 30.853 20.7411 31.0555 20.3663 31.0524C19.3752 31.1256 18.4243 31.2004 17.4673 31.269C17.3031 31.2783 17.1126 31.2643 16.9856 31.1771C16.8432 31.0883 16.7998 30.8686 16.8075 30.6848C16.8199 30.3358 16.8633 29.9697 16.8463 29.6098C16.7162 28.0909 16.6233 26.5844 16.7146 25.0515C16.7502 23.6074 16.6914 22.1601 16.5737 20.7222C16.7162 19.4151 16.6279 18.0909 16.5814 16.773C16.5706 16.3944 16.8122 16.2137 17.1544 16.1919C18.333 16.061 20.0938 16.1124 20.9858 16.3041C21.5139 16.4022 21.1004 16.8244 21.0462 17.2918C21.0354 17.3821 21.0307 17.4834 21.0431 17.5706C21.0725 17.904 21.3343 17.9492 21.5557 17.7389C22.1922 17.0908 22.9325 16.4131 23.8229 16.1265C25.2601 15.6124 26.959 15.6389 28.1127 16.7574C29.7249 17.9352 29.8735 18.1221 30.7067 19.9666C31.3246 21.1475 31.3355 22.4623 31.2023 23.746C31.1729 24.3785 31.1883 25.0297 31.145 25.6747C31.1465 26.3305 31.3091 26.9412 31.1744 27.5799L31.1713 27.6095L31.1667 27.6111Z" fill="currentColor"/></svg>'
    },
    {
        href: 'https://www.instagram.com/webniquedigitalsolutions',
        label: 'Instagram',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M37.5 12.5C37.5 10.7 36.1 9.3 34.3 9.3H27.8L24.5 4.8C23.7 3.7 22.4 3.1 21.1 3.1H18.9C17.6 3.1 16.3 3.7 15.5 4.8L12.2 9.3H5.7C3.9 9.3 2.5 10.7 2.5 12.5V29.2C2.5 31 3.9 32.4 5.7 32.4H34.3C36.1 32.4 37.5 31 37.5 29.2V12.5ZM17.2 27.2V14.3L27.2 20.7L17.2 27.2Z" fill="currentColor"/></svg>'
    },
    {
        href: 'https://www.youtube.com/@WebniqueDigitalSolutions',
        label: 'YouTube',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M35.7673 17.7056C35.5701 16.7041 35.4805 15.6928 35.2035 14.7093C34.9706 13.9378 34.6056 13.2315 34.2195 12.5366C33.5922 11.3378 32.7581 10.2775 31.8962 9.22711C31.2087 8.3773 30.4299 7.59599 29.5322 6.96965C27.8932 5.91758 26.1075 5.03189 24.2519 4.4349C23.302 4.17392 22.3277 4.03038 21.3404 4.04996C20.4753 4.04506 19.6102 3.9733 18.7483 4.01081C17.049 4.05975 15.4019 4.61922 13.8166 5.16074C12.51 5.59951 11.363 6.38082 10.26 7.19148C9.825 7.50628 9.50404 7.9369 9.12769 8.31531C7.22801 10.0394 5.69979 12.2332 4.89495 14.6848C4.6082 15.6194 4.47135 16.572 4.19763 17.5115C4.051 18.0057 3.99398 18.5147 4.0005 19.0285C4.00701 20.1311 3.97117 21.2011 4.15202 22.2874C4.49253 24.9608 5.62973 27.2362 7.15632 29.3844C7.60599 30.0221 8.15504 30.5718 8.61774 31.1982C8.97128 31.6794 9.35741 32.154 9.84455 32.5047C10.304 32.857 10.8351 33.0479 11.3386 33.3431C11.899 33.6693 12.3976 34.1081 13.0069 34.3185C13.4468 34.4653 13.8769 34.6349 14.2858 34.8551C15.3237 35.382 16.5407 35.3624 17.6502 35.6805C18.9389 36.0181 20.2521 36.0899 21.5441 35.8876C22.3799 35.8061 23.2271 35.7637 24.0172 35.457C24.7048 35.1667 25.4835 35.1145 26.176 34.8682C26.4643 34.7605 26.7283 34.6039 26.9906 34.4441C27.8117 33.9319 28.7062 33.529 29.4638 32.9043C30.3468 32.141 31.2413 31.4102 32.0624 30.5718C32.5381 30.0303 32.8069 29.3469 33.3576 28.8641C34.0191 28.1072 34.3205 27.1188 34.8419 26.269C35.2785 25.4208 35.4414 24.4715 35.6402 23.5026C36.0605 21.5632 36.1224 19.7331 35.7738 17.7382L35.7689 17.7056H35.7673ZM28.4602 16.8591C28.3103 17.2326 28.4227 17.8459 28.1425 18.1085C27.204 18.575 25.9984 17.6159 25.2669 17.0467C24.8009 16.6405 24.4571 16.9178 24.4213 17.4805C24.3936 17.7823 24.4474 18.0857 24.4848 18.3874C24.6152 19.3155 24.5793 20.2551 24.5419 21.188C24.4278 23.9071 24.3105 27.4254 21.7282 29.0109C21.0227 29.4284 20.2097 29.5866 19.4049 29.6796C18.5805 29.8329 17.7887 29.8982 16.9887 29.6258C14.3966 29.0386 12.3633 26.7795 12.5784 24.0262C12.5572 23.4031 12.4513 22.7376 12.668 22.1439C13.0981 21.1587 13.6227 20.1833 14.4357 19.4297C15.5518 18.6158 16.8698 17.965 18.2775 17.9372C18.8086 17.9063 19.0676 18.3401 19.0367 18.8246C19.0236 19.3563 19.0106 19.8815 18.9471 20.4019C18.8118 21.1815 17.7968 21.1375 17.2347 21.4849C15.9118 22.139 15.1053 24.7439 15.9607 25.9786C17.0164 27.4287 19.4277 27.2134 20.4997 25.9036C20.648 25.6883 20.7295 25.4273 20.8077 25.1794C21.052 24.3687 21.3714 23.5662 21.3534 22.6985C21.342 22.2532 21.3241 21.8095 21.3925 21.3675C21.6125 19.8962 21.4691 18.4266 21.4561 16.952C21.4561 15.8021 21.6532 14.6522 21.6891 13.5039C21.7102 12.8808 21.6793 12.2642 21.6565 11.6346C21.6418 11.359 21.6923 11.0442 21.9807 10.9332C22.6943 10.7669 23.5659 10.594 24.317 10.6674C24.8221 10.7636 24.9149 11.359 25.0665 11.7798C26.0326 14.9197 29.397 14.078 28.4683 16.8297L28.4602 16.8607V16.8591Z" fill="currentColor"/></svg>'
    }
];

// Service cards data
export const CARDS_DATA = [
    {
        color: 'green',
        image: '/images/services/1.png',
        title: 'Web Design & Development',
        services: ['Responsive Design', 'Visually Stunning', 'Functional UI', 'Brand Identity']
    },
    {
        color: 'darkblue',
        image: '/images/services/2.png',
        title: 'Custom Software Solutions',
        services: ['Scalable Apps', 'Tailored Software', 'Enterprise Solutions', 'Mobile Apps']
    },
    {
        color: 'orange',
        image: '/images/services/3.png',
        title: 'Digital Marketing',
        services: ['SEO Optimization', 'Google Ads', 'Analytics Insights', 'My Business']
    },
    {
        color: 'maroon',
        image: '/images/services/social-media-marketing.webp',
        title: 'Social Media Marketing',
        services: ['Strategic Management', 'Instagram & Facebook', 'Content Campaigns', 'Audience Connection']
    },
    {
        color: 'pink',
        image: '/images/services/5.png',
        title: 'Content Creation',
        services: ['Video Editing', 'Social Media Reels', 'Marketing Videos', 'Impactful Stories']
    },
    {
        color: 'charcoal',
        image: '/images/services/6.png',
        title: 'Creative Content & Branding',
        services: ['Logo Design', 'Content Strategy', 'Brand Identity', 'Business Growth']
    }
];

// ─── Wiggle Intensity Config ────────────────────────────────────────────────
export const WIGGLE_CONFIG = {
    logoTruus: 4,
    socials: 5,
    jobHeading: 1,
    googleMap: 1,
    email: 1,
    whatsapp: 1,
};

// ─── Animation Configurations ─────────────────────────────────────────────
export const ANIMATION_CONFIG = {
    transitionScribble: {
        strokeWidthStart: "8%",
        strokeWidthMax: "31%",
        scale: 0.7,
        durationIn: 2.2,
        durationOut: 2.7
    }
};

// Testimonials data
export const TESTIMONIALS_DATA = [
    { 
        author: "MicrobeWorks Scientific", 
        color: "green",
        text: "Worked with Webnique Digital Solutions to develop and maintain our startup's website. They were prompt and professional. Very happy with the website!" 
    },
    { 
        author: "Karthikeyan Palanivelan", 
        color: "darkblue",
        text: "Webnique Digital Solutions Pvt. Ltd has been an absolute game-changer for my business. Their team is highly professional, creative, and truly understands digital marketing inside out. From website design to SEO and social media management, they delivered everything on time with exceptional quality. What I loved most was their attention to detail and their willingness to go the extra mile to ensure client satisfaction. If you're looking for reliable and result-driven digital solutions, I highly recommend Webnique Digital Solutions Private Limited!" 
    },
    { 
        author: "Gokul", 
        color: "orange",
        text: "Excellent service! The team at Webnique Digital Services delivered a clean, functional website on time and exactly as we envisioned. Highly professional and easy to work with. Highly recommended!" 
    },
    { 
        author: "Tarnishta Das", 
        color: "maroon",
        text: "Genuinely talking it is one of the best platform for quick detailed service. I really liked the services and will definitely recommend to more people." 
    },
    { 
        author: "Mohan", 
        color: "pink",
        text: "I highly recommend Webnique Digital Solution for anyone looking for top-notch website development services! Their team is incredibly professional, creative, and responsive. They understood my requirements perfectly and delivered a stunning, fully functional website on time. The design was modern, user-friendly, and tailored exactly to my brand. Communication was smooth throughout the process, and they went the extra mile to ensure everything was perfect. If you want the best website development partner, look no further than Webnique Digital Solution!" 
    },
    { 
        author: "Hari nath", 
        color: "charcoal",
        text: "Founder AriseEnergy - Working with Webnique Digital Solutions Private Limited was a game-changer for our business. Their team understood our unique needs and delivered a fully customized software solution that streamlined our operations. Their professionalism, prompt support, and technical expertise are top-notch. Highly recommended!" 
    },
    { 
        author: "Santhosh g", 
        color: "lightblue",
        text: "Wonderful service, within a few minutes I got result for logo." 
    }
];
