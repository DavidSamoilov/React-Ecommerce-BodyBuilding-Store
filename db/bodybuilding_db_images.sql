-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: bodybuilding_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `image_UNIQUE` (`image`),
  KEY `images_product_id_idx` (`product_id`),
  CONSTRAINT `images_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'https://cdn.shopify.com/s/files/1/1367/5201/products/APOLLOMUSCLEFITSST-SHIRTBLACK.A-Edit_AS_750x.jpg?v=1611225091'),(2,1,'https://cdn.shopify.com/s/files/1/1367/5207/products/APOLLOSST-SHIRTBLACK.A-Edit_BK_750x.jpg?v=1611225432'),(3,1,'https://i.pinimg.com/originals/4d/4f/11/4d4f1198ebed25c0dae348192e1bcad2.png'),(4,2,'https://sneakernews.com/wp-content/uploads/2021/04/adidas-ultra-boost-dna-lego-fy7690-2.jpg?w=1140'),(5,3,'https://olimpsport.com/media/catalog/product/optimized/7/c/7c6e5f2a38c6b430f63731f4d6f87978922e7a45916122d42f9c510fa122aa37/olimpprotein_snack_doublechocolate_1_1.png'),(6,3,'https://www.ironbody.de/images/product_images/original_images/Protein_Snack3.jpg'),(7,2,'https://www.slashgear.com/wp-content/uploads/2021/04/Adidas-Ultraboost-DNA-LEGO-Plates-shoes-1280x720.jpg'),(8,3,'https://s13emagst.akamaized.net/products/37287/37286559/images/res_53ec36b29af5ad9f404cf8f652c3f45c.jpg'),(13,3,'https://cashcow-cdn.azureedge.net/images/46f8c687-f803-48ea-89ad-1e0b3005fc7c.png'),(14,2,'https://media1.popsugar-assets.com/files/thumbor/TKpx5NeCTU2a4OHWxPyN96SEg9Q/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/09/864/n/1922729/e959d0c06070aed8746796.97381063_/i/adidas-lego-custom-ultraboost-dna-sneakers.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-14  1:24:40
