-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 07:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(10) NOT NULL,
  `categoryName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Bouquets'),
(2, 'Vase Arrangements'),
(3, 'Single Stems'),
(4, 'Gift Sets'),
(5, 'Potted Plants'),
(6, 'Dried Flowers'),
(7, 'Wreaths'),
(8, 'Corsages & Boutonnieres'),
(9, 'Accessories'),
(10, 'Floral Scented Candles');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(10) NOT NULL,
  `categoryID` int(10) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `code` varchar(20) NOT NULL,
  `bgColor` varchar(50) NOT NULL,
  `price` int(5) NOT NULL,
  `image` varchar(255) NOT NULL,
  `isAvailable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `productName`, `code`, `bgColor`, `price`, `image`, `isAvailable`) VALUES
(1, 1, 'Rose Bouquet Small', 'RSBQ-SM', '#ffe6e6', 500, 'img/RSBQSM.jpg', 1),
(2, 1, 'Rose Bouquet Medium', 'RSBQ-MD', '#ffe6e6', 800, 'img/RSBQMD.jpg', 1),
(3, 1, 'Rose Bouquet Large', 'RSBQ-LG', '#ffe6e6', 1200, 'img/RSBQLG.jpg', 1),
(4, 1, 'White Lily Bouquet Small', 'LY-WT-SM', '#ffffff', 600, 'img/LY-WTSM.jpg', 1),
(5, 1, 'White Lily Bouquet Medium', 'LY-WT-MD', '#ffffff', 900, 'img/LY-WTMD.jpg', 1),
(6, 1, 'White Lily Bouquet Large', 'LY-WT-LG', '#ffffff', 1500, 'img/LY-WTLG.jpg', 1),
(7, 1, 'Purple Tulip Bouquet Small', 'TU-PL-SM', '#b16eff', 750, 'img/TU-PLSM.jpg', 1),
(8, 1, 'Purple Tulip Bouquet Medium', 'TU-PL-MD', '#b16eff', 1200, 'img/TU-PLMD.jpg', 1),
(9, 1, 'Purple Tulip Bouquet Large', 'TU-PL-LG', '#b16eff', 1800, 'img/TU-PLLG.jpg', 1),
(10, 1, 'Sunflower Bouquet Small', 'SNBQ-SM', '#fff9db', 400, 'img/SNBQSM.jpg', 1),
(11, 1, 'Sunflower Bouquet Medium', 'SNBQ-MD', '#fff9db', 700, 'img/SNBQMD.jpg', 1),
(12, 1, 'Sunflower Bouquet Large', 'SNBQ-LG', '#fff9db', 1100, 'img/SNBQLG.jpg', 1),
(13, 1, 'Carnation Bouquet Small', 'CARBQ-SM', '#fff0f5', 350, 'img/CARBQSM.jpg', 1),
(14, 1, 'Carnation Bouquet Medium', 'CARBQ-MD', '#fff0f5', 650, 'img/CARBQMD.jpg', 1),
(15, 1, 'Carnation Bouquet Large', 'CARBQ-LG', '#fff0f5', 1000, 'img/CARBQLG.jpg', 1),
(16, 2, 'Mixed Vase Arrangement', 'MXVS', '#fde2e4', 2100, 'img/MXVS.jpg', 0),
(17, 2, 'Red Rose Vase', 'RRVS', '#ffccd5', 1800, 'img/RRVS.jpg', 1),
(18, 2, 'Assorted Roses Vase', 'ARVS', '#f8edeb', 2200, 'img/ARVS.jpg', 0),
(19, 2, 'Tulip Bouquet Vase', 'TBV', '#ffffff', 1400, 'img/TBV.jpg', 1),
(20, 2, 'Lily Vase Arrangement', 'LVA', '#d0f4de', 1700, 'img/LVA.jpg', 1),
(21, 2, 'Mixed Seasonal Flowers Vase', 'MSFV', '#fff1e6', 3000, 'img/MSFV.jpg', 0),
(22, 2, 'Lavender Vase', 'LRV', '#cdb4db', 2000, 'img/LRV.jpg', 1),
(23, 2, 'Sunflower Vase', 'SFV', '#fff7d6', 1500, 'img/SFV.jpg', 1),
(24, 2, 'Carnation Mix Vase', 'CMV', '#ffe5ec', 1700, 'img/CMV.jpg', 1),
(25, 3, 'Red Rose', 'RRS', '#ffd6d6', 100, 'img/RRS.jpg', 1),
(26, 3, 'White Rose', 'WRS', '#f9f9f9', 90, 'img/WRS.jpg', 1),
(27, 3, 'Pink Rose', 'PRS', '#ffe6f0', 120, 'img/PRS.jpg', 1),
(28, 3, 'Peony', 'PNY', '#ffe0ec', 400, 'img/PNY.jpg', 0),
(29, 3, 'White Lily', 'WLS', '#f7f7ff', 120, 'img/WLS.jpg', 1),
(30, 3, 'Sunflower', 'SF', '#fff4cc', 80, 'img/SF.jpg', 1),
(31, 3, 'Tulip', 'TUL', '#ffe9f2', 110, 'img/TUL.jpg', 1),
(32, 3, 'Purple Orchid', 'PO', '#f3e6ff', 150, 'img/PO.jpg', 1),
(33, 3, 'Daffodil', 'DAF', '#ffffcc', 90, 'img/DAF.jpg', 0),
(34, 3, 'Carnation', 'CAR', '#fff0f5', 90, 'img/CAR.jpg', 1),
(35, 3, 'Gerbera Daisy', 'GD', '#ffe0cc', 95, 'img/GD.jpg', 0),
(36, 3, 'Chrysanthemum', 'CHR', '#ffe6e1', 75, 'img/CHR.jpg', 1),
(37, 3, 'Blue Hydrangea', 'HYD', '#e0f0ff', 130, 'img/HYD.jpg', 1),
(38, 3, 'Lavender Stem', 'LAV', '#f5e6ff', 95, 'img/LAV.jpg', 1),
(39, 3, 'Calla Lily', 'CLL', '#fdf6e3', 140, 'img/CLL.jpg', 1),
(40, 4, 'Rose + Chocolate', 'RSCH', '#E3735E', 1000, 'img/GFT01.jpg', 1),
(41, 4, 'Bouquet + Teddy Bear', 'BQTB', '#ffe8f0', 1300, 'img/GFT02.jpg', 1),
(42, 4, 'Wine + Flower', 'WNFL', '#fce4ec', 1500, 'img/GFT03.jpg', 0),
(43, 4, 'Cake + Flower', 'CKFL', '#fff0e1', 1500, 'img/GFT04.jpg', 1),
(44, 4, 'Bouquet + Photo + Card', 'BQPC', '#e5f4ff', 800, 'img/GFT05.jpg', 1),
(45, 5, 'Succulent Pot', 'SCPT', '#e3f9e5', 250, 'img/PTP01.jpg', 1),
(46, 5, 'Mini Bonsai', 'MNBS', '#f1f7e7', 600, 'img/PTP02.jpg', 0),
(47, 5, 'Cactus Pot', 'CCPT', '#f9fbe7', 300, 'img/PTP03.jpg', 1),
(48, 5, 'Ficus Tree', 'FCTR', '#e6f2e6', 800, 'img/PTP04.jpg', 1),
(49, 5, 'Snake Plant', 'SNPT', '#e6ffe6', 450, 'img/PTP05.jpg', 1),
(50, 5, 'Aloe Vera Pot', 'AVPT', '#f0fff0', 320, 'img/PTP06.jpg', 1),
(51, 5, 'Peace Lily', 'PCLY', '#edf7ed', 500, 'img/PTP07.jpg', 1),
(52, 5, 'Lavender Pot', 'LVPT', '#f5e8ff', 380, 'img/PTP08.jpg', 1),
(53, 6, 'Preserved Rose', 'PVRS', '#fce8e8', 400, 'img/DRF01.jpg', 1),
(54, 6, 'Dried Lavender', 'DRLV', '#f3e6ff', 300, 'img/DRF02.jpg', 1),
(55, 6, 'Dried Sunflower', 'DRSF', '#fff9db', 350, 'img/DRF03.jpg', 1),
(56, 6, 'Dried Wheat', 'DRWH', '#f7f1e3', 250, 'img/DRF04.jpg', 1),
(57, 6, 'Dried Baby\'s Breath', 'DRBB', '#fff0f5', 280, 'img/DRF05.jpg', 1),
(58, 7, 'Funeral Wreath', 'FNWR', '#f2f2f2', 2000, 'img/WRTH01.jpg', 0),
(59, 7, 'Christmas Wreath', 'CHWR', '#e6f2e6', 1500, 'img/WRTH02.jpg', 0),
(60, 7, 'Spring Wreath', 'SPWR', '#fdf0f5', 1000, 'img/WRTH03.jpg', 1),
(61, 7, 'Autumn Wreath', 'AUWR', '#fff2e6', 1200, 'img/WRTH04.jpg', 1),
(62, 8, 'Prom Corsage', 'PMCRSG', '#fff0f5', 500, 'img/CRSG01.jpg', 1),
(63, 8, 'Wedding Boutonniere', 'WEDBTNR', '#f0fff0', 300, 'img/BTN01.jpg', 1),
(64, 8, 'Homecoming Corsage', 'HMCRSG', '#fffaf0', 450, 'img/CRSG02.jpg', 1),
(65, 8, 'Bridal Corsage', 'BRCRSG', '#fef6ff', 600, 'img/CRSG03.jpg', 1),
(66, 8, 'Formal Boutonniere', 'FRMBTNR', '#f0f8ff', 350, 'img/BTN02.jpg', 1),
(67, 9, 'Glass Vase', 'GLVS', '#fdf2f2', 200, 'img/ACC01.jpg', 1),
(68, 9, 'Greeting Card', 'GTCR', '#fffbe6', 50, 'img/ACC02.jpg', 1),
(69, 9, 'Flower Pot', 'FLPT', '#f0fff0', 150, 'img/ACC03.jpg', 1),
(70, 9, 'Floral Ribbon', 'FLRB', '#fff0f5', 100, 'img/ACC04.jpg', 1),
(71, 9, 'Plant Stand', 'PLST', '#f0f8ff', 300, 'img/ACC05.jpg', 1),
(72, 9, 'Wrapping Paper', 'WRPP', '#fef6ff', 80, 'img/ACC06.jpg', 1),
(73, 10, 'Lavender Bloom Candle', 'LBC', '#f3f0ff', 350, 'img/FSC.jpg', 1),
(74, 10, 'Rose Petal Glow Candle', 'RPGC', '#fff0f5', 400, 'img/FSC.jpg', 1),
(75, 10, 'Sunflower Citrus Candle', 'SCC', '#fffde6', 380, 'img/FSC.jpg', 1),
(76, 10, 'Peony Blush Candle', 'PBC', '#ffe6f0', 370, 'img/FSC.jpg', 1),
(77, 10, 'Orchid Mist Candle', 'OMC', '#e6f0ff', 390, 'img/FSC.jpg', 1),
(78, 10, 'Cherry Blossom Breeze', 'CBB', '#fff5f0', 410, 'img/FSC.jpg', 1),
(79, 10, 'Gardenia Dream Candle', 'GDC', '#f0fff0', 360, 'img/FSC.jpg', 0),
(80, 10, 'Hibiscus Sunset Candle', 'HSC', '#ffe6cc', 395, 'img/FSC.jpg', 0),
(81, 10, 'Jasmine Whisper Candle', 'JWC', '#f0f8ff', 420, 'img/FSC.jpg', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
