-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2021 at 09:06 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evania_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL DEFAULT 'admin@test.com',
  `password` varchar(100) NOT NULL DEFAULT '123'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@test.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `order_pickup`
--

CREATE TABLE `order_pickup` (
  `waybill_number` int(8) NOT NULL,
  `sender_name` varchar(255) NOT NULL,
  `sender_phone` varchar(12) NOT NULL,
  `sender_address` text NOT NULL,
  `origin_city` varchar(255) NOT NULL,
  `origin_postcode` int(255) NOT NULL,
  `recipient_name` varchar(255) NOT NULL,
  `recipient_phone` varchar(12) NOT NULL,
  `recipient_address` text NOT NULL,
  `destination_city` varchar(255) NOT NULL,
  `destination_postcode` int(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_weight` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_pickup`
--

INSERT INTO `order_pickup` (`waybill_number`, `sender_name`, `sender_phone`, `sender_address`, `origin_city`, `origin_postcode`, `recipient_name`, `recipient_phone`, `recipient_address`, `destination_city`, `destination_postcode`, `item_name`, `item_weight`, `status`, `created_at`, `updated_at`) VALUES
(10000006, 'adf', '254534223', 'a.kjdhfkjaf', 'Bandung', 12123, 'popo', '023942374', 'adfadfasdf', 'Jakarta', 12121, 'batu', '2', 0, '2021-01-25 16:37:51', '2021-01-25 16:37:51'),
(10000007, 'kampang', '111111', 'ajdfkjanfkjba', 'depok', 34534, 'jojo', '3456544', 'sfgsdfgsdfgsdfg', 'jonggol', 234334, 'tempe', '2', 0, '2021-02-08 22:43:03', '2021-02-08 22:43:03');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `phone`, `password`) VALUES
(22, 'hahaha', 'haha@test.com', 813131313, '$2a$10$fL56B4egmCtWpcNgx6streZbrDDHPNr0nUU6/RvMwGwjct4NP5jqq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_pickup`
--
ALTER TABLE `order_pickup`
  ADD PRIMARY KEY (`waybill_number`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_pickup`
--
ALTER TABLE `order_pickup`
  MODIFY `waybill_number` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10000008;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
