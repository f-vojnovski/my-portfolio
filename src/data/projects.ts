import gameEngineImage from "../assets/gameengine.png";
import callOfBubbleImage from "../assets/callofbubble.png";
import documentTimestampingImage from "../assets/timestamping.png";
import rectSlayerImage from "../assets/rectslayer.jpg";
import ghostGameImage from "../assets/ghostgame.png";
import blenderShopImage from "../assets/3dshop.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Marzanna",
    description: "An experimental game engine built using C++ and Vulkan.",
    imageUrl: gameEngineImage.src,
  },
  {
    id: "2",
    title: "Call of Bubble",
    description:
      "A game made in the Unity Engine. It is a 3D shooter game made by my team Hatsune Miku Fanclub. Global Game Jam 2025 entry.",
    imageUrl: callOfBubbleImage.src,
  },
  {
    id: "3",
    title: "Document Timestamping",
    description:
      "The project enables users to upload documents and prove their original existence using a Java Spring backend with PostgreSQL and a React frontend for uploads.",
    imageUrl: documentTimestampingImage.src,
  },
  {
    id: "4",
    title: "Rect Slayer",
    description:
      "A level based 2d puzzle game partially inspired by Bbtan. The player aims to break descending bricks before they reach the bottom of the screen. Developed in Windows Forms with C#.",
    imageUrl: rectSlayerImage.src,
  },
    {
    id: "5",
    title: "Ghost Game",
    description:
      `A game made in the Unity Engine. A 2D "cat and mouse" game where two players collect powerups and see who can be the last to play as the ghost when the timer runs out. Global Game Jam 2024 entry.`,
    imageUrl: ghostGameImage.src,
  },
  {
    id: "6",
    title: "3D Shop",
    description:
      "A web application that allows users to browse, purchase and upload 3D models. It leverages the powers for displaying 3D in the Browser using three.js and React, while the back-end uses Laravel (a pHp framework).",
    imageUrl: blenderShopImage.src,
  },
];
