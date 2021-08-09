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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `short_description` varchar(100) NOT NULL,
  `long_description` varchar(3000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'GymShark shirt',80.00,'GymShark T-Shirt','A design that’s a true part of the Gymshark story, the Apollo T-Shirt is a classic. A cotton-base with a light elastane content, you can be sure of comfort and stretch however, or wherever, you train.'),(2,'Adidas Ultra-Boost shoes',550.00,'Performance Running Shoes','If you can dream it, you can build it. Just look at adidas Ultraboost shoes. They changed the game in 2015 with their responsive Boost midsole, foot-hugging adidas Primeknit upper and striking style and continue to drive running technology today. This pair features LEGO® brick 3-Stripes to celebrate of all the builders, dreamers and risk-takers who are changing the game in their own way. Step in and dream big on the pavement. Your best run ever starts with that first step.'),(3,'Olimp Protein Snack 8pc',40.00,'Banana flavored protein snacks','Olimp Protein Snack contains a mixture of high-quality collagen hydrolysate and whey protein concentrate (WPC). In addition to the said protein that contributes to the growth and maintenance of muscle mass, our crunchy snack provides valuable dietary fibre (over 3 g per 100 g).'),(4,'Spalding Street Outdoor Basketball',60.00,'Basketball','NCAA Solution Game Basketball The Official Basketball   '),(5,'Iron Gym Total Upper Body Workout Bar',95.00,'pull up bar','The Iron Gym Total Upper Body Workout Bar is a multi-function strength training device that promises to sculpt your upper body through pull ups, chin ups, and abdominal work. And that’s just while this versatile pull up bar is hanging high on your doorframe. Move the Iron Gym Total Upper Body Workout Bar to the ground and you can use it to perform dips to work your triceps, pushups to work your biceps and chest, and sit ups to hit your abs.'),(6,'Renpho Powerful Portable Massage Gun',340.00,'Workout Gun Massager for Back and Neck','The complete ecosystem of RENPHO products ensures that you can improve every facet of your health. Our smart home products use cutting-edge technology engineered that equip you with powerful and accurate data to know your body’s health and performance.'),(7,'Women’s Longline Sports Bra',60.00,'Crop tank sports bra','【Design-- Full coverage U-back】 sports bra for additional support with removeable pad, Great for low, medium and high impact activites. Full figure with racerback design not only effectively protect against shock, prevent the bra from shifting, but also beautify your back curve, increase the fashion sexy style.'),(8,'Under Armour Adult Undeniable Duffle 4.0 Gym Bag',130.00,'Sports bag','UA Storm technology delivers an element-battling, highly water-resistant finish. Tough, abrasion-resistant bottom & side panels. 2 large front zippered organization pockets. Removable, padded, HeatGear shoulder strap for total comfort. Padded top grab handle. Large vented pocket for laundry or shoes & internal slip pockets for organization. D-ring for added attachment point. Dimensions When Full: 11.8\"W x 24.4\"H x 13\"L. Volume: 3,539.4 Cubic In. / 58 L. Adjustable shoulder strap. D-Ring for additional attachment point.'),(9,'Nike Satan Shoes',880.00,'Nike Sport Shoes','Each pair of shoes is black, and features a bronze pentagram on the laces and an inverted cross while on the sides of the shoes is a reference to the Bible passage Luke 10:18.The shoes are also apparently made with \"60cc of ink and 1 drop of human blood\". According to MSCHF co-founder Daniel Greenberg, the blood came from \"about six\" MSCHF employees. A detail from Jan van Eyck\'s Last Judgement appears to be present on the packaging.'),(10,' Gold Standard 100 Whey Protein Powder',280.00,'Whey Protein Powder','Optimum Nutrition Gold Standard 100% Whey Protein Powder gives you the purest source of protein to fulfill your daily requirement of this nutrient. With Optimum Nutrition 100% Whey Protein, you have the advantage of ultra-filtered whey protein isolates that are extremely easy for the body to absorb. With every 30 g serving, you get 24 g of whey protein, giving you a whopping 78% concentration by weight for maximum results. This supplement is also known for its high mixability, allowing you to make a lump-free, smooth protein shake each time.'),(11,'Adidas Long Thighs',80.00,'HIGH-RISE, MOISTURE-ABSORBING WORKOUT TIGHTS.','Slay leg day. Go from the studio to the sidewalk in these long adidas tights. Stay dry with stretchy, moisture-absorbing fabric. Stash your keys or gym pass in the inner mesh pocket and go. Train on'),(12,'QT RACER SPORT SHOES',170.00,'Sports Running Shoes','These adidas shoes give you a smooth ride all day long, from your morning run to afternoon errands and then a backyard hangout at night. The Lightmotion midsole delivers super-lightweight cushioning you\'ll truly appreciate as the hours pass.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
