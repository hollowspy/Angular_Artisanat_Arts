-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: artisanats_arts
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (0,'muriel@muriel.fr','$2b$10$TN85ea940.mRRmMa4gcHUuwkcpIs7vSh5H6r6bAEh3oLlQ14xUd0a','muriel','NIEDZWIECKI'),(1,'julien.niedzwiecki@neuf.fr','$2b$10$tNHvTQyl4DylhBWALZxOZ.nXz66Q/3m0fwDFfD6w2AEtwD9unJRJq','julien','Niedzwiecki');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bestiaire`
--

DROP TABLE IF EXISTS `bestiaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bestiaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `materials` varchar(50) NOT NULL,
  `width` int(3) NOT NULL,
  `height` int(3) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) DEFAULT NULL,
  `photo_annexe2` varchar(255) DEFAULT NULL,
  `photo_annexe3` varchar(255) DEFAULT NULL,
  `photo_annexe4` varchar(255) DEFAULT NULL,
  `photo_annexe5` varchar(255) DEFAULT NULL,
  `photo_annexe6` varchar(255) DEFAULT NULL,
  `Aphoto_principale` varchar(255) DEFAULT NULL,
  `Aphoto_annexe2` varchar(255) DEFAULT NULL,
  `Aphoto_annexe3` varchar(255) DEFAULT NULL,
  `Aphoto_annexe4` varchar(255) DEFAULT NULL,
  `Aphoto_annexe5` varchar(255) DEFAULT NULL,
  `Aphoto_annexe6` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_idx` (`owner`),
  CONSTRAINT `owner` FOREIGN KEY (`owner`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestiaire`
--

LOCK TABLES `bestiaire` WRITE;
/*!40000 ALTER TABLE `bestiaire` DISABLE KEYS */;
INSERT INTO `bestiaire` VALUES (100,'Chien méchant','Pâte de verre – grès cérame',19,28,'Reproduction libre : Prieuré de Ganagobie (Provence, France), XIIème siècle',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/100/1540150885116_chien2.jpg','http://localhost:4000/images/bestiaire/100/1540150885126_chien1.jpg','http://localhost:4000/images/bestiaire/100/1540150885142_chien2.jpg','http://localhost:4000/images/bestiaire/100/1540150885163_chien4.jpg','http://localhost:4000/images/bestiaire/100/1540150885174_chient.jpg','http://localhost:4000/images/bestiaire/100/1540150885192_chient3.jpg',0),(101,'Dragon fantastique','Pâte de verre, mortier peint ',46,16,'D’après « dragon sur tuile de faïence » de William De Morgan (Angleterre), vers 1882',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/101/1540151104537_dragon.jpg','http://localhost:4000/images/bestiaire/101/1540151104543_dragon1.jpg','http://localhost:4000/images/bestiaire/101/1540151104554_dragon3.jpg','http://localhost:4000/images/bestiaire/101/1540151104561_dragon4.jpg','http://localhost:4000/images/bestiaire/101/1540151104569_dragon5.jpg','http://localhost:4000/images/bestiaire/101/1540151104576_dragon6.jpg',0),(103,'Griffon','Marbre - Terre cuite',40,40,'Reproduction : Prieuré de Ganagobie (Provence, France), XIIème siècle',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/103/1540151480586_griffon.jpg','http://localhost:4000/images/bestiaire/103/1540151480603_griffon1.jpg','http://localhost:4000/images/bestiaire/103/1540151480631_griffon2.jpg','http://localhost:4000/images/bestiaire/103/1540151480658_griffon3.jpg','http://localhost:4000/images/bestiaire/103/1540151480673_griffon4.jpg','http://localhost:4000/images/bestiaire/103/1540151480692_griffon5.jpg',1),(104,'Méchants Celte','Marbre, pâte de verre ',45,18,'D’après dessins de symboles celtes',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/104/1540151747862_celte1.jpg','http://localhost:4000/images/bestiaire/104/1540151747890_celte.jpg','http://localhost:4000/images/bestiaire/104/1540151747895_celte1.jpg','http://localhost:4000/images/bestiaire/104/1540151747911_celte2.jpg','http://localhost:4000/images/bestiaire/104/1540151747942_celte4.jpg','http://localhost:4000/images/bestiaire/104/1540151747977_celte6.jpg',0),(105,'Les lions affrontés','Marbre ',54,34,'Reproduction : pavement de l’église des Lions (Um-al-rasas, Jordanie), VIème siècle',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/105/1540152063513_lions.jpg','http://localhost:4000/images/bestiaire/105/1540152063544_lions1.jpg','http://localhost:4000/images/bestiaire/105/1540152063569_lions2.jpg','http://localhost:4000/images/bestiaire/105/1540152063584_lions3.jpg','http://localhost:4000/images/bestiaire/105/1540152063600_lions5.jpg','http://localhost:4000/images/bestiaire/105/1540152063600_lions6.jpg',1),(108,'Turban','Mosaique',89,65,'Mon beau turban bleu',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/108/1540286268535_turban.jpg','http://localhost:4000/images/bestiaire/108/1540286268556_turban1.jpg','http://localhost:4000/images/bestiaire/108/1540286268571_turban2.jpg','http://localhost:4000/images/bestiaire/108/1540286268629_turban3.jpg','http://localhost:4000/images/bestiaire/108/1540286268692_turban4.jpg','http://localhost:4000/images/bestiaire/108/1540286268745_turban5.jpg',0);
/*!40000 ALTER TABLE `bestiaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo_carousel`
--

DROP TABLE IF EXISTS `photo_carousel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_carousel` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `source` varchar(50) NOT NULL,
  `Asource` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_carousel`
--

LOCK TABLES `photo_carousel` WRITE;
/*!40000 ALTER TABLE `photo_carousel` DISABLE KEYS */;
INSERT INTO `photo_carousel` VALUES (1,'carousel1.jpg','../images/carousel/1540571978141_carousel1.jpg','http://localhost:4000/images/carousel/1544544719508_carousel1.jpg'),(2,'carousel2.jpg','../images/carousel/1538121954359_carousel2.jpg','http://localhost:4000/images/carousel/1538121954359_carousel2.jpg'),(3,'carousel3.jpg','../images/carousel/1538121958467_carousel3.jpg','http://localhost:4000/images/carousel/1538121958467_carousel3.jpg'),(4,'carousel4.jpg','../images/carousel/1538122081458_carousel4.jpg','http://localhost:4000/images/carousel/1538122081458_carousel4.jpg'),(5,'carousel5.jpg','../images/carousel/1538121973880_carousel5.jpg','http://localhost:4000/images/carousel/1538121973880_carousel5.jpg');
/*!40000 ALTER TABLE `photo_carousel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vegetal`
--

DROP TABLE IF EXISTS `vegetal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vegetal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `materials` varchar(100) NOT NULL,
  `width` int(5) NOT NULL,
  `height` int(5) NOT NULL,
  `reproduction` varchar(255) NOT NULL,
  `photo_principale` varchar(255) DEFAULT NULL,
  `Aphoto_principale` varchar(255) DEFAULT NULL,
  `owner` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_idx` (`owner`),
  CONSTRAINT `test` FOREIGN KEY (`owner`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegetal`
--

LOCK TABLES `vegetal` WRITE;
/*!40000 ALTER TABLE `vegetal` DISABLE KEYS */;
INSERT INTO `vegetal` VALUES (1,'Rose de printemps','Marbre, pâte de verre',45,50,'Rose en pleine fleur','../images/photo_portrait.jpg','http://localhost:4000/images/vegetal/1/vegetal1.jpg',0),(2,'Vase multicolor','Pâte de verre',35,20,'Vase penchée sur fond blanc','../images/photo_portrait2.jpg','http://localhost:4000/images/vegetal/2/vegetal2.jpg',0),(3,'Rosace d\'automne','Marbre',50,50,'Rosace aux couleur automnales','../images/photo_portrait3.jpg\r\n','http://localhost:4000/images/vegetal/3/vegetal3.jpg',1);
/*!40000 ALTER TABLE `vegetal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-23 13:10:14
