-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: [호스트명]    Database: [데이터베이스명]
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favorite_genre`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_genre` (
  `favorite_genre_id` bigint NOT NULL AUTO_INCREMENT,
  `genre` varchar(255) NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`favorite_genre_id`),
  KEY `FKt5enyo492p01edsetncel4t9p` (`user_seq`),
  CONSTRAINT `FKt5enyo492p01edsetncel4t9p` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `favorite_music`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite_music` (
  `favorite_music_id` bigint NOT NULL AUTO_INCREMENT,
  `music_id` bigint NOT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`favorite_music_id`),
  KEY `FKn1u0iv07r9vn264toed68pddt` (`music_id`),
  KEY `FK6nsfqfrtubven5tl51bu2up1` (`user_seq`),
  CONSTRAINT `FK6nsfqfrtubven5tl51bu2up1` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKn1u0iv07r9vn264toed68pddt` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `music`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music` (
  `music_id` bigint NOT NULL AUTO_INCREMENT,
  `beat` varchar(255) NOT NULL,
  `cover_request` varchar(500) DEFAULT NULL,
  `cover_source` varchar(200) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(200) DEFAULT NULL,
  `favorite_count` int NOT NULL DEFAULT '0',
  `genre` varchar(255) NOT NULL,
  `mixed_music_request` varchar(500) DEFAULT NULL,
  `mixed_music_source` varchar(200) DEFAULT NULL,
  `music_source` varchar(200) DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `user_seq` bigint NOT NULL,
  PRIMARY KEY (`music_id`),
  KEY `FKepngtdbc0k5x19i74joqxes9j` (`user_seq`),
  CONSTRAINT `FKepngtdbc0k5x19i74joqxes9j` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `music_tag`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music_tag` (
  `music_tag_id` bigint NOT NULL AUTO_INCREMENT,
  `music_id` bigint DEFAULT NULL,
  `tag_id` bigint DEFAULT NULL,
  PRIMARY KEY (`music_tag_id`),
  KEY `FK130nenp61ci8smsrxvt19x6r5` (`music_id`),
  KEY `FKq9ff5032uc2y2xccavjrkc2kn` (`tag_id`),
  CONSTRAINT `FK130nenp61ci8smsrxvt19x6r5` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`),
  CONSTRAINT `FKq9ff5032uc2y2xccavjrkc2kn` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `prompt`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prompt` (
  `prompt_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `midi_description` text,
  `request_description` text,
  `track_id` bigint NOT NULL,
  PRIMARY KEY (`prompt_id`),
  KEY `FKgqy2x9j5fwmrdq0q8tw0rtb3o` (`track_id`),
  CONSTRAINT `FKgqy2x9j5fwmrdq0q8tw0rtb3o` FOREIGN KEY (`track_id`) REFERENCES `track` (`track_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tag`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag_id` bigint NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(200) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `track`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `track` (
  `track_id` bigint NOT NULL AUTO_INCREMENT,
  `midi_description` text,
  `musical_instrument` varchar(100) DEFAULT NULL,
  `music_id` bigint NOT NULL,
  PRIMARY KEY (`track_id`),
  KEY `FKgp5tjs44m6cxvgh7nqyys30fy` (`music_id`),
  CONSTRAINT `FKgp5tjs44m6cxvgh7nqyys30fy` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_seq` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `email` varchar(512) NOT NULL,
  `email_verified_yn` varchar(1) NOT NULL,
  `modified_at` datetime NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `profile_image_url` varchar(512) NOT NULL,
  `provider_type` varchar(20) NOT NULL,
  `role_type` varchar(20) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  PRIMARY KEY (`user_seq`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_a3imlf41l37utmxiquukk8ajc` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_refresh_token`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_refresh_token` (
  `refresh_token_seq` bigint NOT NULL AUTO_INCREMENT,
  `refresh_token` varchar(256) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  PRIMARY KEY (`refresh_token_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-19  1:41:27
