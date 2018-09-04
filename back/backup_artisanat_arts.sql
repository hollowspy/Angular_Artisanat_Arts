-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 27 Juillet 2018 à 12:27
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `artisanat_arts`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id`, `mail`, `password`, `name`) VALUES
(1, 'muriel@muriel.fr', 'charlie', 'murielNiedzwiecki'),
(2, 'julien.niedzwiecki@neuf.fr', 'zozozo', 'julienNiedzwiecki');

-- --------------------------------------------------------

--
-- Structure de la table `bestiaire`
--

CREATE TABLE `bestiaire` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `materials` varchar(50) NOT NULL,
  `width` int(3) NOT NULL,
  `height` int(3) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) NOT NULL,
  `photo_annexe2` varchar(255) NOT NULL,
  `photo_annexe3` varchar(255) NOT NULL,
  `photo_annexe4` varchar(255) NOT NULL,
  `photo_annexe5` varchar(255) NOT NULL,
  `photo_annexe6` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `bestiaire`
--

INSERT INTO `bestiaire` (`id`, `name`, `materials`, `width`, `height`, `reproduction`, `photo_principale`, `photo_annexe2`, `photo_annexe3`, `photo_annexe4`, `photo_annexe5`, `photo_annexe6`) VALUES
(1, 'le chien', 'mosaique petit carré en grain de mouton', 50, 20, 'Reproduction d\'un chien, nommé Hâidi. Belle Golden retriever ! ', '../images/photo_principale.jpg', '../images/photo_annexe2.jpg', '../images/photo_annexe3.jpg', '../images/photo_annexe3.jpg', '../images/photo_annexe3.jpg', '../images/photo_annexe2.jpg'),
(2, 'Manon', 'Mosaiqué gros grain soufflé par verre', 100, 80, 'Portrait de Manon NIEDZWIECKI, faite au préalable par son super père ! ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEJFZVF4ghztl0SqFHbRmv51-9ePPhfu0OoCRnEuk-1LGQXcUCQ', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `photo_carousel`
--

CREATE TABLE `photo_carousel` (
  `id` int(3) NOT NULL,
  `name` varchar(20) NOT NULL,
  `source` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `photo_carousel`
--

INSERT INTO `photo_carousel` (`id`, `name`, `source`) VALUES
(1, 'mosaique_carousel1', '../images/mosaique_carousel1.jpeg'),
(2, 'mosaique_carousel2', '../images/mosaique_carousel2.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `vegetal`
--

CREATE TABLE `vegetal` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `materials` varchar(100) NOT NULL,
  `width` int(5) NOT NULL,
  `height` int(5) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `vegetal`
--

INSERT INTO `vegetal` (`id`, `name`, `materials`, `width`, `height`, `reproduction`, `photo_principale`) VALUES
(1, 'Julien', 'Mosaique brute', 50, 50, 'Reproduction de mon frère, tu sais, le beau goss là ? ', '../images/photo_portrait.jpg'),
(2, 'Charlie', 'Materiaux manuel ! :D', 50, 120, 'Reproduction fidèle du propre fiston !', '../images/photo_portrait2.jpg'),
(3, 'Muriel', 'Marbre', 50, 50, 'Portrait de l\'auteur elle même, comme Van Gogh', '../images/photo_portrait3.jpg\r\n');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bestiaire`
--
ALTER TABLE `bestiaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `photo_carousel`
--
ALTER TABLE `photo_carousel`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vegetal`
--
ALTER TABLE `vegetal`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `bestiaire`
--
ALTER TABLE `bestiaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `photo_carousel`
--
ALTER TABLE `photo_carousel`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `vegetal`
--
ALTER TABLE `vegetal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
