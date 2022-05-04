import NavbarImg from "../components/Navbar/Navbar.png";
import NavbarZip from "../components/Navbar/Navbar.zip";

export const components = [
  {
    title: "Navigation",
    id: "navigation",
    children: [
      {
        title: "Clean Navbar",
        id: "clean-navbar",
        link: "/docs/navigation/clean-navbar",
        previewImage: NavbarImg,
        requiredDependencies: [],
        downloads: [
          {
            name: "Download for React",
            url: NavbarZip,
          },
        ],
        description:
          "This Navbar is the one from my personal portfolio site. It's a clean and minimalistic navbar with a customizable menu.",
      },
    ],
  },
];
