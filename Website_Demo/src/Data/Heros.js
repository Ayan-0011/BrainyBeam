import ironman from "../assets/ironman.jpeg";
import spiderman from "../assets/spiderman.jpeg";
import thor from "../assets/thor.jpeg";
import captain from "../assets/captain.jpeg";
import hulk from "../assets/hulk.jpeg"
import strange from "../assets/dr.jpeg"
import blackPanther from "../assets/black.jpeg"
import wanda from "../assets/scarlet.jpeg"


export const heroes = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    image: ironman,
    team: "Avengers",
    powers: "Powered Armor Suit, Genius Intellect",
    description: "A billionaire inventor and founding member of the Avengers.",
    movies: ["Iron Man", "Avengers", "Endgame"],
  },
  {
    id: 2,
    name: "Spider-Man",
    realName: "Peter Parker",
    image: spiderman,
    team: "Avengers",
    powers: "Spider-Sense, Super Strength, Wall Crawling",
    description: "The friendly neighborhood superhero from Queens.",
    movies: ["Homecoming", "Far From Home", "No Way Home"],
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    image: thor,
    team: "Avengers",
    powers: "Thunder Manipulation, Super Strength",
    description: "The God of Thunder and prince of Asgard.",
    movies: ["Thor", "Ragnarok", "Love and Thunder"],
  },
  {
    id: 4,
    name: "Captain America",
    realName: "Steve Rogers",
    image: captain,
    team: "Avengers",
    powers: "Enhanced Strength, Leadership",
    description: "The first Avenger and symbol of courage.",
    movies: ["The First Avenger", "Winter Soldier", "Endgame"],
  },
  {
    id: 5,
    name: "Hulk",
    realName: "Bruce Banner",
    image: hulk,
    team: "Avengers",
    powers: "Unlimited Strength, Regeneration",
    description: "A brilliant scientist who transforms into the Hulk.",
    movies: ["The Incredible Hulk", "Avengers", "Ragnarok"],
  },
  {
    id: 6,
    name: "Doctor Strange",
    realName: "Stephen Strange",
    image: strange,
    team: "Masters of the Mystic Arts",
    powers: "Magic, Time Manipulation, Teleportation",
    description: "The Sorcerer Supreme and protector of reality.",
    movies: ["Doctor Strange", "Infinity War", "Multiverse of Madness"],
  },
  {
    id: 7,
    name: "Black Panther",
    realName: "T'Challa",
    image: blackPanther,
    team: "Avengers",
    powers: "Enhanced Senses, Vibranium Suit",
    description: "The king and protector of Wakanda.",
    movies: ["Black Panther", "Civil War", "Infinity War"],
  },
  {
    id: 8,
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    image: wanda,
    team: "Avengers",
    powers: "Chaos Magic, Telekinesis, Reality Manipulation",
    description: "One of the most powerful beings in the Marvel Universe.",
    movies: ["Age of Ultron", "WandaVision", "Multiverse of Madness"],
  },
];