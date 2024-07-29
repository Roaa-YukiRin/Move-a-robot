-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 17 يوليو 2024 الساعة 21:36
-- إصدار الخادم: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dirct-rubot`
--

-- --------------------------------------------------------

--
-- بنية الجدول `move_direc`
--

CREATE TABLE `move_direc` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_direction` varchar(100) NOT NULL,
  `no_Tdirection` int(100) NOT NULL,
  `last_direction` varchar(100) NOT NULL,
  `no_TCounte` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- إرجاع أو استيراد بيانات الجدول `move_direc`
--

INSERT INTO `move_direc` (`id`, `first_direction`, `no_Tdirection`, `last_direction`, `no_TCounte`) VALUES
(1, 'fowrod', 7, 'lift', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `move_direc`
--
ALTER TABLE `move_direc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `move_direc`
--
ALTER TABLE `move_direc`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
SELECT last_direction FROM move_direc;