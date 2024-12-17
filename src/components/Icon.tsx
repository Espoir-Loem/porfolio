const Instagram = ({ color = "#F0E8FF" }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.8829 7.08371C23.8683 6.07651 23.682 5.07728 23.3254 4.13527C22.7014 2.52667 21.4308 1.25468 19.8222 0.631999C18.8921 0.282071 17.9089 0.0944673 16.9136 0.0731789C15.6337 0.0159664 15.2279 0 11.9787 0C8.72957 0 8.31312 8.92186e-08 7.04247 0.0731789C6.04856 0.0944673 5.06531 0.282071 4.13527 0.631999C2.52667 1.25468 1.25468 2.52667 0.631999 4.13527C0.282071 5.06531 0.0931367 6.04856 0.0745094 7.04247C0.0172968 8.32376 0 8.72957 0 11.9787C0 15.2279 -9.91318e-09 15.643 0.0745094 16.915C0.0944672 17.9102 0.282071 18.8921 0.631999 19.8248C1.25602 21.4321 2.52667 22.7041 4.1366 23.3268C5.06265 23.6887 6.0459 23.8936 7.0438 23.9255C8.32509 23.9827 8.7309 24 11.98 24C15.2292 24 15.6456 24 16.9163 23.9255C17.9102 23.9055 18.8934 23.7179 19.8248 23.368C21.4334 22.744 22.7041 21.472 23.3281 19.8647C23.678 18.9334 23.8656 17.9514 23.8856 16.9549C23.9428 15.6749 23.9601 15.2691 23.9601 12.0186C23.9574 8.76949 23.9574 8.35703 23.8829 7.08371ZM11.9707 18.1231C8.57257 18.1231 5.81971 15.3702 5.81971 11.9721C5.81971 8.5739 8.57257 5.82104 11.9707 5.82104C15.3662 5.82104 18.1217 8.5739 18.1217 11.9721C18.1217 15.3702 15.3662 18.1231 11.9707 18.1231ZM18.3666 7.02783C17.5722 7.02783 16.9323 6.38652 16.9323 5.59353C16.9323 4.80053 17.5722 4.15922 18.3666 4.15922C19.1582 4.15922 19.7995 4.80053 19.7995 5.59353C19.7995 6.38652 19.1582 7.02783 18.3666 7.02783Z"
                fill={color} />
            <path
                d="M11.9704 15.9677C14.1771 15.9677 15.966 14.1788 15.966 11.9721C15.966 9.76544 14.1771 7.97656 11.9704 7.97656C9.76373 7.97656 7.97485 9.76544 7.97485 11.9721C7.97485 14.1788 9.76373 15.9677 11.9704 15.9677Z"
                fill={color} />
        </svg>

    );
}

const LinkedIn = ({ color = "#F0E8FF" }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                fill={color}
            />
            <path
                d="M4 10V20"
                stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M10 10V20"
                stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M10 15C10 12.24 12.24 10 15 10C17.76 10 20 12.24 20 15V20"
                stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

const Whatsapp = ({ color = "#F0E8FF" }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.001 2C17.524 2 22.001 6.477 22.001 12C22.001 17.523 17.524 22 12.001 22C10.2337 22.003 8.49757 21.5353 6.97099 20.645L2.00499 22L3.35699 17.032C2.46595 15.5049 1.99789 13.768 2.00099 12C2.00099 6.477 6.47799 2 12.001 2ZM8.59299 7.3L8.39299 7.308C8.26368 7.31691 8.13734 7.35087 8.02099 7.408C7.91257 7.46951 7.81355 7.5463 7.72699 7.636C7.60699 7.749 7.53899 7.847 7.46599 7.942C7.09611 8.4229 6.89696 9.01331 6.89999 9.62C6.90199 10.11 7.02999 10.587 7.22999 11.033C7.63899 11.935 8.31199 12.89 9.19999 13.775C9.41399 13.988 9.62399 14.202 9.84999 14.401C10.9534 15.3724 12.2683 16.073 13.69 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1052 16.5056 15.3895 16.4268 15.647 16.29C15.7778 16.2223 15.9056 16.1489 16.03 16.07C16.03 16.07 16.0723 16.0413 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.569 15.6053 16.639 15.5047 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.723 13.137C14.6673 13.1128 14.6077 13.0989 14.547 13.096C14.4786 13.0888 14.4094 13.0965 14.3442 13.1184C14.279 13.1403 14.2192 13.176 14.169 13.223C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2753 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9408 14.2666 12.877 14.2446 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.11C11.9889 13.8599 11.4574 13.5215 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88874 11.958 9.60499 11.493L9.54599 11.398C9.50425 11.3338 9.47003 11.265 9.44399 11.193C9.40599 11.046 9.50499 10.928 9.50499 10.928C9.50499 10.928 9.74799 10.662 9.86099 10.518C9.97099 10.378 10.064 10.242 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93699 8.925 9.64766 8.24467 9.34899 7.568C9.28999 7.434 9.11499 7.338 8.95599 7.319C8.90199 7.31233 8.84799 7.307 8.79399 7.303C8.65972 7.2953 8.52508 7.29664 8.39099 7.307L8.59299 7.3Z"
                fill={color} />
        </svg>

    )
}

const GitHub = ({ color = "#F0E8FF" }: { color?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.02399 2.31031C7.7753 2.56384 8.48982 2.91555 9.14899 3.35631C10.0805 3.11788 11.0384 2.99826 12 3.00031C12.993 3.00031 13.951 3.12431 14.849 3.35531C15.5079 2.91498 16.2221 2.56361 16.973 2.31031C17.67 2.07331 18.663 1.68931 19.253 2.34231C19.653 2.78631 19.753 3.53031 19.824 4.09831C19.904 4.73231 19.923 5.55831 19.713 6.37831C20.516 7.41531 21 8.65231 21 10.0003C21 12.0423 19.894 13.8153 18.257 15.0433C17.4688 15.6262 16.5951 16.0836 15.667 16.3993C15.881 16.8893 16 17.4313 16 18.0003V21.0003C16 21.2655 15.8946 21.5199 15.7071 21.7074C15.5196 21.8949 15.2652 22.0003 15 22.0003H8.99999C8.73477 22.0003 8.48041 21.8949 8.29288 21.7074C8.10534 21.5199 7.99999 21.2655 7.99999 21.0003V20.0093C7.04499 20.1263 6.24399 20.0223 5.56299 19.7333C4.85099 19.4313 4.35499 18.9633 3.98199 18.5153C3.62799 18.0913 3.24199 17.1353 2.68399 16.9493C2.55936 16.9078 2.44413 16.8422 2.34487 16.7561C2.24562 16.6701 2.16427 16.5654 2.1055 16.4479C1.98678 16.2107 1.96718 15.936 2.05099 15.6843C2.13479 15.4326 2.31515 15.2245 2.55239 15.1058C2.78962 14.9871 3.06429 14.9675 3.31599 15.0513C3.98199 15.2733 4.41599 15.7533 4.71299 16.1393C5.19299 16.7593 5.58299 17.5693 6.34299 17.8923C6.65599 18.0253 7.11499 18.1123 7.83299 18.0143L7.99999 17.9803C8.00229 17.4361 8.1156 16.8982 8.33299 16.3993C7.40486 16.0836 6.53118 15.6262 5.74299 15.0433C4.10599 13.8153 2.99999 12.0433 2.99999 10.0003C2.99999 8.65431 3.48299 7.41831 4.28399 6.38231C4.07399 5.56231 4.09199 4.73431 4.17199 4.09931L4.17699 4.06131C4.24999 3.47931 4.33499 2.79431 4.74299 2.34231C5.33299 1.68931 6.32698 2.07431 7.02298 2.31131L7.02399 2.31031Z"
                fill={color} />
        </svg>

    );
}

const Menu = ({ color = "#F0E8FF" }: { color?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[20px]">
            <path
                d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"
                fill={color}
            />
        </svg>

    )
}
type NameType = "github" | "linkedin" | "Instagram" | "whatsapp" | "menu";

export const Icon = ({ name }: { name: NameType }) => {
    switch (name) {
        case "github":
            return <GitHub />;
        case "linkedin":
            return <LinkedIn />;
        case "Instagram":
            return <Instagram />
        case "whatsapp":
            return <Whatsapp />
        case "menu":
            return <Menu />

    }
}