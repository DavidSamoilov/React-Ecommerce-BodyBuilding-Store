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
  KEY `images_product_id_idx` (`product_id`),
  CONSTRAINT `images_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'https://cdn.shopify.com/s/files/1/1367/5201/products/APOLLOMUSCLEFITSST-SHIRTBLACK.A-Edit_AS_750x.jpg?v=1611225091'),(2,1,'https://cdn.shopify.com/s/files/1/1367/5207/products/APOLLOSST-SHIRTBLACK.A-Edit_BK_750x.jpg?v=1611225432'),(3,1,'https://i.pinimg.com/originals/4d/4f/11/4d4f1198ebed25c0dae348192e1bcad2.png'),(4,2,'https://sneakernews.com/wp-content/uploads/2021/04/adidas-ultra-boost-dna-lego-fy7690-2.jpg?w=1140'),(5,3,'https://olimpsport.com/media/catalog/product/optimized/7/c/7c6e5f2a38c6b430f63731f4d6f87978922e7a45916122d42f9c510fa122aa37/olimpprotein_snack_doublechocolate_1_1.png'),(6,3,'https://www.ironbody.de/images/product_images/original_images/Protein_Snack3.jpg'),(7,2,'https://www.slashgear.com/wp-content/uploads/2021/04/Adidas-Ultraboost-DNA-LEGO-Plates-shoes-1280x720.jpg'),(8,3,'https://s13emagst.akamaized.net/products/37287/37286559/images/res_53ec36b29af5ad9f404cf8f652c3f45c.jpg'),(13,3,'https://cashcow-cdn.azureedge.net/images/46f8c687-f803-48ea-89ad-1e0b3005fc7c.png'),(14,2,'https://media1.popsugar-assets.com/files/thumbor/TKpx5NeCTU2a4OHWxPyN96SEg9Q/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/09/864/n/1922729/e959d0c06070aed8746796.97381063_/i/adidas-lego-custom-ultraboost-dna-sneakers.jpg'),(15,4,'https://m.media-amazon.com/images/I/91tZ3EisXVL._AC_SL1500_.jpg'),(16,4,'https://m.media-amazon.com/images/I/91vOw6N2-lS._AC_SL1500_.jpg'),(17,4,'https://m.media-amazon.com/images/I/91xSeBakjtS._AC_SL1500_.jpg'),(18,4,'https://m.media-amazon.com/images/I/91NeB1kprOS._AC_SL1500_.jpg'),(19,5,'https://m.media-amazon.com/images/I/61B0M2L+wrL._AC_SL1500_.jpg'),(20,5,'https://m.media-amazon.com/images/I/71Q1a217MJL._AC_SL1500_.jpg'),(21,5,'https://m.media-amazon.com/images/I/81oUj0xJ+5L._AC_SL1500_.jpg'),(22,6,'https://m.media-amazon.com/images/I/81222bcO0lL._AC_SL1500_.jpg'),(23,6,'https://m.media-amazon.com/images/I/71kM-B1hFaS._AC_SL1500_.jpg'),(24,6,'https://m.media-amazon.com/images/I/71+W6QJPjjL._AC_SL1500_.jpg'),(25,6,'https://m.media-amazon.com/images/I/51Y0UQllV4S._AC_SL1500_.jpg'),(26,7,'https://m.media-amazon.com/images/I/71vMwv51vAL._AC_SL1500_.jpg'),(27,7,'https://m.media-https://m.media-amazon.com/images/I/61Cd3j6WlmL._AC_SL1500_.jpg'),(28,7,'https://m.media-amazon.com/images/I/61E7ltwU+kL._AC_SL1500_.jpg'),(29,8,'https://m.media-amazon.com/images/I/917M9gh-gHL._AC_UL1500_.jpg'),(30,8,'https://m.media-amazon.com/images/I/61eazvjVXML._AC_UL1500_.jpg'),(31,8,'https://m.media-amazon.com/images/I/91iZaCiPtJL._AC_UL1500_.jpg'),(32,9,'https://images.complex.com/complex/images/c_crop,h_693,w_1200,x_0,y_44/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/sw0fvbftmcxz3twmxudx/lil-nas-x-mschf-air-max-97-satan-shoe?fimg-ssr-default'),(33,9,'http://cdn.cnn.com/cnnnext/dam/assets/210328223412-01-lil-nas-x-satan-shoes-super-tease.jpg'),(34,9,'https://smartcdn.prod.postmedia.digital/healthing/images?url=https%3A%2F%2Fsmartcdn.prod.postmedia.digital%2Fhealthing%2Fwp-content%2Fuploads%2F2021%2F04%2Fsatan-shoes.jpg&w=960'),(35,10,'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-01x.jpg'),(36,10,'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-08x.jpg'),(37,10,'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-06x.jpg'),(38,10,'https://cdn.nutrabay.com/wp-content/uploads/2021/06/NB-OPT-1002-29-05x.jpg'),(39,11,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/34da4400ac594d1ba1faaaa701870d6d_9366/Believe_This_2.0_Long_Tights_Black_FJ7188_21_model.jpg'),(40,11,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/03e74fbb243749628f29aaa80001468c_9366/Believe_This_2.0_Long_Tights_Black_FJ7188_22_model.jpg'),(41,11,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/dc4e2450ca8b4c84b3b0aaa70188f502_9366/Believe_This_2.0_Long_Tights_Black_FJ7188_23_hover_model.jpg'),(42,11,'https://m.media-https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3c86cd776bb2402b985aaaa800010448_9366/Believe_This_2.0_Long_Tights_Black_FJ7188_25_model.jpg'),(43,12,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49372d49f1924f35ad6eac6300ba91a2_9366/QT_Racer_Sport_Shoes_Black_FY5680_01_standard.jpg'),(44,12,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9011cbcdf3d5488faf98ac6300ba9fa4_9366/QT_Racer_Sport_Shoes_Black_FY5680_02_standard.jpg'),(45,12,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9de164df8d3146b1ae49ac6300baa6ac_9366/QT_Racer_Sport_Shoes_Black_FY5680_03_standard.jpg'),(46,12,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f5dc3932988c4d93b3a2ac6300baac36_9366/QT_Racer_Sport_Shoes_Black_FY5680_04_standard.jpg'),(48,12,'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/55872a9898ab4cc4b21cac6300bac209_9366/QT_Racer_Sport_Shoes_Black_FY56801_42_detail.jpg');
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

-- Dump completed on 2021-08-10  1:36:58
