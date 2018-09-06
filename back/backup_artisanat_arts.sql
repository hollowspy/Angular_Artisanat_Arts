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
  `alias` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (29,'julien.niedzwiecki@neuf.fr','$2b$10$HYN74Wt0XeOgPhRFobfcE.WUTa27ETxYBBmxcXRk6F1Z7dgmY3gRi','julienNiedzwiecki'),(30,'muriel@muriel.fr','$2b$10$TN85ea940.mRRmMa4gcHUuwkcpIs7vSh5H6r6bAEh3oLlQ14xUd0a','murielNiedzwiecki'),(32,'hollowspy@free.fr','$2b$10$l6ath6Qx7D1KaUur4JMZEON/6EhtU59zur6IXfxe9zFzcf9xVxEnW','hollowSPY'),(33,'julien.niedzwiecki@acensi.fr','$2b$10$cKgEYJC2qNif9NDcKtB/z.FdpDrNL4gkeVTRuPB57ytomAcRTQcq.','jAcensi'),(34,'marjorie.th@live.fr','$2b$10$oc1fiSxtTm8kqQax6MJ6b.26i3jIpdbxP8aVhSDCJBQbAyOfrfuFm','marjorieNied');
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
  `bestiairecol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestiaire`
--

LOCK TABLES `bestiaire` WRITE;
/*!40000 ALTER TABLE `bestiaire` DISABLE KEYS */;
INSERT INTO `bestiaire` VALUES (1,'le chien','mosaique petit carré en grain de mouton',50,20,'Reproduction d\'un chien, nommé Hâidi. Belle Golden retriever ! ','../images/photo_principale.jpg','../images/photo_annexe2.jpg','../images/photo_annexe3.jpg','../images/photo_annexe3.jpg','../images/photo_annexe3.jpg','../images/photo_annexe2.jpg','http://localhost:4000/images/bestiaire/1/62975_104087909653262_1366761_n.jpg','http://localhost:4000/images/bestiaire/1/31225140_576900222688589_484867654138462208_o.jpg','http://localhost:4000/images/bestiaire/1/60639_104088006319919_6562897_n.jpg','http://localhost:4000/images/bestiaire/1/47940_100961766632543_4927418_n.jpg','','',NULL),(2,'Manon','Mosaiqué gros grain soufflé par verre',10,90,'Portrait de Manon NIEDZWIECKI, faite au préalable par son super père ! ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEJFZVF4ghztl0SqFHbRmv51-9ePPhfu0OoCRnEuk-1LGQXcUCQ','','','','','','http://localhost:4000/images/bestiaire/2/61491_104087862986600_1004280_n.jpg','http://localhost:4000/images/bestiaire/2/60132_104087832986603_1331941_n.jpg','http://localhost:4000/images/bestiaire/2/63802_104087776319942_5361531_n.jpg','','','',NULL),(83,'Remake medieval','Petite mosaique',57,89,'Reproduction oeuvre medieval',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/83/1535960483423_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/83/1535960483426_images.jpg','http://localhost:4000/images/bestiaire/83/1535960483426_index1.jpg','http://localhost:4000/images/bestiaire/83/1535960483430_Montréal-Séviac-mosaïque.jpg','http://localhost:4000/images/bestiaire/83/1535960483432_photo_annexe2.jpg','http://localhost:4000/images/bestiaire/83/1535960483433_plancher-de-mosaïque-médiéval-53902619.jpg',NULL),(84,'Creation medievalle','Grande mosaique',67,45,'Reproduction oeuvre medieval',NULL,NULL,NULL,NULL,NULL,NULL,'http://localhost:4000/images/bestiaire/84/1536067347663_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/84/1536067347665_a2a24-mosaique_5.jpg','http://localhost:4000/images/bestiaire/84/1536067347667_images.jpg','http://localhost:4000/images/bestiaire/84/1536067347667_index.jpg','http://localhost:4000/images/bestiaire/84/1536067347668_index1.jpg','http://localhost:4000/images/bestiaire/84/1536067347668_jordan.jpg',NULL);
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
INSERT INTO `photo_carousel` VALUES (1,'carousel1.jpg','../images/mosaique_carousel1.jpeg','http://localhost:4000/images/carousel/1535960442074_carousel1.jpg'),(2,'carousel2.jpg','../images/mosaique_carousel2.jpeg','http://localhost:4000/images/carousel/1536068187617_carousel2.jpg'),(3,'carousel3.jpg','..','http://localhost:4000/images/carousel/1535633209935_carousel3.jpg');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegetal`
--

LOCK TABLES `vegetal` WRITE;
/*!40000 ALTER TABLE `vegetal` DISABLE KEYS */;
INSERT INTO `vegetal` VALUES (1,'Rose de printemps','Mosaique belle',45,50,'Elle est belle ma rose non !!','../images/photo_portrait.jpg','https://aminus3.s3.amazonaws.com/image/g0008/u00007768/i00630715/c76adb18d7d3fe2ff9a22b98fa7f91a7_large.jpg'),(2,'Charlie','Materiaux manuel ! :D',50,120,'Reproduction fidèle du propre fiston !','../images/photo_portrait2.jpg','https://i.skyrock.net/1501/33671501/pics/2136191953_small_1.jpg'),(3,'Muriel','Marbre',50,50,'Portrait de l\'auteur elle même, comme Van Gogh','../images/photo_portrait3.jpg\r\n','https://www.artactif.com/bdd/oeuvre/g_100626.jpg'),(27,'Chucky','Ma copine',89,76,'Mais si, avec Tintin',NULL,NULL);
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

-- Dump completed on 2018-09-04 17:18:21
